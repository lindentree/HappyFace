// Our modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv/config');

// express app
const app = express();

// connect to mongodb
const dbURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@happycluster.cmho2.mongodb.net/HappyPlant?retryWrites=true&w=majority`
mongoose.connect(dbURI, {userNewUrlParser: true, useUnifiedTopology: true})
// remember to add the port listener to the callback funciton
.then((result) => console.log('You are connected :)' ))
.catch((err) => console.log('Uh Oh! Something went wrong :('));

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('*', (req,res) =>{
res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 8080);