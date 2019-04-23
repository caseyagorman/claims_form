const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const claimsFormRoutes = express.Router();

app.use('/claims-form', claimsFormRoutes);
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/ClaimsForm', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

claimsFormRoutes.route('/add').post(function(req, res) {
    let claimsForm = new ClaimsForm(req.body);
    claimsForm.save()
    .then(claimsForm => {
        res.status(200).json({'claimsForm': 'claim form added successfully'});

    })
    .catch(err => {
        res.status(400).send('adding new claim form failed');
    });
})


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});