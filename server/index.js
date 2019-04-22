const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.get('/', (req, res) => {
    res.send('Hello World!');
});


MongoClient.connect('link-to-mongodb', (err, database) => {
  // ... start the server
})

app.listen(4000)