const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const claimsFormRoutes = express.Router();
const ClaimsForm = require('./ClaimsForm.model')
const PDFDocument = require('pdfkit');
const fs = require('fs');

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
            const doc = new PDFDocument;
            const name = claimsForm.slice(-1)[0].name
            console.log('name', name)
            doc.pipe(fs.createWriteStream('./output.pdf'));
 
// Embed a font, set the font size, and render some text
            doc.font('Helvetica-Bold')
            .fontSize(25)
            .text(name, 100, 100);
 
 
// Add another page
            doc.addPage()
            .fontSize(25)
            .text('Here is some vector graphics...', 100, 100);
 
// Draw a triangle
            doc.save()
            .moveTo(100, 150)
            .lineTo(100, 250)
            .lineTo(200, 250)
            .fill("#FF3300");
 
// Apply some transforms and render an SVG path with the 'even-odd' fill rule
            doc.scale(0.6)
            .translate(470, -380)
            .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
            .fill('red', 'even-odd')
            .restore();
 
// Add some text with annotations
            doc.end();
        }
    });
});