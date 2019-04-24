const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const claimsFormRoutes = express.Router();
const ClaimsForm = require('./ClaimsForm.model')


app.use(cors());
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

// request.setValue(application/json, forHTTPHeaderField: "Content-Type") 
app.use(bodyParser.json({ type: 'application/json' }))
app.use('/claims-form', claimsFormRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/ClaimsForm', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

claimsFormRoutes.route('/add').post(function(req, res) {
    let claims = new ClaimsForm(req.body);
    claims.save()
    .then(claims => {
        res.status(200).json({'claimsForm': 'claim form added successfully'});

    })
    .catch(err => {
        res.status(400).send('adding new claim form failed');
    });
})

claimsFormRoutes.route('/').get(function(req, res) {
    ClaimsForm.find(function(err, claimsForm) {
        if (err) {
            console.log(err);
        } else {
            res.json(claimsForm);
        }
    });
});