'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv/config');
const User = require('./lib/controllers/userController');
const Plant = require('./lib/controllers/plantController');

// express app
const app = express();

// connect to mongodb
const dbURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@happycluster.cmho2.mongodb.net/HappyPlant?retryWrites=true&w=majority`
mongoose.connect(dbURI, {userNewUrlParser: true, useUnifiedTopology: true})
// remember to add the port listener to the callback funciton
.then((result) => console.log( result, 'You are connected :)' ))
.catch((err) => console.log(err, 'Uh Oh! Something went wrong :('));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/api/add_plant', function (req, res) {
 Plant.create_plant(req.body.plant)
 });

 app.post('/api/user_create_post', function (req, res) {
  User.create_plant(req.body.plant)
  });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('*', (req,res) =>{
res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/api/register', function (req, res) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    // ..
  });
});










app.listen(process.env.PORT || 8080);