const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');
const claimsFormRoutes = express.Router();

//CREATE EXPRESS APP
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
  
//ROUTES WILL GO HERE
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
   
  });
 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })

//   claimsFormRoutes.route('/add', upload.single('myFile'), (req, res, next) => {
//     const file = req.
//     console.log(file)
//     if (!file) {
//       const error = new Error('Please upload a file')
//       error.httpStatusCode = 400
//       return next(error)
//     }
//       res.send(file)
// })
  app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    console.log("hit upload file wooo")
    const file = req.file
    // console.log(file)
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
    
  })


//   app.post('/add', upload.single('picture'), (req, res) => {
//     var img = fs.readFileSync(req.file.path);
//  var encode_image = img.toString('base64');
//  // Define a JSONobject for the image attributes for saving to database
  
//  var finalImg = {
//       contentType: req.file.mimetype,
//       image:  new Buffer(encode_image, 'base64')
//    };
// db.collection('quotes').insertOne(finalImg, (err, result) => {
//     console.log(result)
 
//     if (err) return console.log(err)
 
//     console.log('saved to database')
//     res.redirect('/')
   
     
//   })
// })

// app.get('/photos', (req, res) => {
//     db.collection('mycollection').find().toArray((err, result) => {
     
//           const imgArray= result.map(element => element._id);
//                 console.log(imgArray);
     
//        if (err) return console.log(err)
//        res.send(imgArray)
     
//       })
//     });

// app.get('/photo/:id', (req, res) => {
//         var filename = req.params.id;
         
//         db.collection('mycollection').findOne({'_id': ObjectId(filename) }, (err, result) => {
         
//             if (err) return console.log(err)
         
//            res.contentType('image/jpeg');
//            res.send(result.image.buffer)
           
            
//           })
//         })
const MongoClient = require('mongodb').MongoClient
const myurl = 'mongodb://localhost:27017'; 
MongoClient.connect(myurl, (err, client) => {
  if (err) return console.log(err)
  db = client.db('test') 
  app.listen(4000, () => {
    console.log('listening on 4000')
  })
})


























// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const PORT = 4000;
// const claimsFormRoutes = express.Router();
// const ClaimsForm = require('./ClaimsForm.model')
// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const multer = require('multer')

// app.use(cors());
// // app.use(bodyParser.urlencoded({
// //     extended: true
// //   }));

// // request.setValue(application/json, forHTTPHeaderField: "Content-Type") 
// app.use(bodyParser.json({ type: 'application/json' }))
// app.use('/claims-form', claimsFormRoutes);
// mongoose.connect('mongodb://127.0.0.1:27017/ClaimsForm', { useNewUrlParser: true });

// const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// });


// app.listen(PORT, function() {
//     console.log("Server is running on Port: " + PORT);
// });

// const upload = multer({ dest: 'uploads/' })

// claimsFormRoutes.route('/add').post(upload.single('file'), function(req, res) {
  
  
//   console.log(req.file)
//   console.log(req.body)
// //   const reader = new FileReader();
// //   reader.onload = function() {
// //       console.log(reader.result)
// //   }
// //   console.log(reader.readAsText(req.body))
//     let claims = new ClaimsForm({
//     //     name: req.body.name,
//            image: req.file,
//     //     address1: req.body.address1,
//     //     city1: req.body.city1,
//     //     state1: req.body.state1,
//     //     dayPhone1: req.body.dayPhone1,
//     //     evePhone1: req.body.evePhone1,
//     //     cellPhone1: req.body.cellPhone1,
//     //     dayPhone2: req.body.dayPhone2,
//     //     evePhone2: req.body.evePhone2,
//     //     cellPhone2: req.body.cellPhone2,
//     //     dateOfBirth: req.body.dateOfBirth,
//     //     ssn: req.body.ssn,
//     //     dateOfIncident: req.body.dateOfIncident,
//     //     timeOfIncident: req.body.timeOfIncident,
//     //     location: req.body.location,
//     //     vehicle: req.body.vehicle,
//     //     basisOfClaim: req.body.basisOfClaim,
//     //     cityEmployeety: req.body.cityEmployeety,
//     //     description: req.body.description,
//     //     item1: req.body.item1,
//     //     amount1: req.body.amount1,
//     //     item2: req.body.item2,
//     //     amount2: req.body.amount2,
//     //     item3: req.body.item3,
//     //     amount3: req.body.amount3,
//     //     item4: req.body.item4,
//     //     amount4: req.body.amount4,
//     //     total: req.body.total,
//     //     witnessAddress1: req.body.witnessAddress1,
//     //     witnessPhone1: req.body.witnessPhone1,
//     //     witness2: req.body.witness2,
//     //     witnessAddress2: req.body.witnessAddress2,
//     //     witnessPhone2: req.body.witnessPhone2,

//     });
//     console.log(claims)
   
//     // claims.save()
//     // .then(claims => {
//     //     res.status(200).json({'claimsForm': 'claim form added successfully'});

//     // })
//     // .catch(err => {
//     //     res.status(400).send('adding new claim form failed');
//     // });
// });

// claimsFormRoutes.route('/').get(function(req, res) {
//     ClaimsForm.find(function(err, claimsForm) {
//         if (err) {
//             console.log(err);
//         } else {
//             const doc = new PDFDocument;
//             const currentClaimsForm = claimsForm.slice(-1)[0]
//             console.log(currentClaimsForm)
//             res.json(currentClaimsForm);
//             const name = currentClaimsForm.name
//             const address1 = currentClaimsForm.address1
//             const city1 = currentClaimsForm.city1
//             const state1 = currentClaimsForm.state1
//             const dayPhone1 = currentClaimsForm.dayPhone1
//             const evePhone1 = currentClaimsForm.evePhone1
//             const cellPhone1 = currentClaimsForm.cellPhone1
//             const dayPhone2 = currentClaimsForm.dayPhone2
//             const evePhone2 = currentClaimsForm.evePhone2
//             const cellPhone2 = currentClaimsForm.cellPhone2
//             const dateOfBirth = currentClaimsForm.dateOfBirth
//             const ssn = currentClaimsForm.ssn
//             const dateOfIncident = currentClaimsForm.dateOfIncident
//             const timeOfIncident = currentClaimsForm.timeOfIncident
//             const location = currentClaimsForm.location
//             const vehicle = currentClaimsForm.vehicle
//             const basisOfClaim = currentClaimsForm.basisOfClaim
//             const cityEmployeety = currentClaimsForm.cityEmployeety
//             const description = currentClaimsForm.description
//             const item1 = currentClaimsForm.item1
//             const amount1 = currentClaimsForm.amount1
//             const item2 = currentClaimsForm.item2
//             const amount2 = currentClaimsForm.amount2
//             const item3 = currentClaimsForm.item3
//             const amount3 = currentClaimsForm.amount3
//             const item4 = currentClaimsForm.item4
//             const amount4 = currentClaimsForm.amount4
//             const total = currentClaimsForm.total
//             const witnessAddress1 = currentClaimsForm.witnessAddress1
//             const witnessPhone1 = currentClaimsForm.witnessPhone1
//             const witness2 = currentClaimsForm.witness2
//             const witnessAddress2 = currentClaimsForm.witnessAddress2
//             const witnessPhone2 = currentClaimsForm.witnessPhone2
       

            
//             doc.pipe(fs.createWriteStream('./output.pdf'));
 
// // Embed a font, set the font size, and render some text
//             doc.font('Helvetica-Bold')
//             .fontSize(25)
//             .text("CLAIM AGAINST THE CITY AND COUNTY OF SAN FRANCISCO", 100, 100);

//             doc.font('Helvetica-Bold')
//             .fontSize(12)

//             .text("Before completing this form please read the instructions on the back. Untimely claims will be returned. Please submit this form and supporting documentation to the Controller’s Office, Claims Division, 1390 Market Street, 7th Floor, San Francisco, CA 94102 in person or by mail.", 100, 170)
            
            
//             doc.font('Helvetica-Bold')
//             .fontSize(12)
//             .text(name, 100, 250);
 
 
// // Add another page
//             doc.font('Helvetica-Bold')
//             .fontSize(12)
//             .text(address1, 100, 300);
 
 
// // Add some text with annotations
//             doc.end();
//         }
    
//     });
// });