'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
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