const path  = require('path');
const express = require('express');
const Plants = require('../../models/plant');
const mongoose = require('mongoose');


// const User = mongoose.model('Users', userSchema);
// stick with create and read controller calls
const plant_index = (res, req) => {
    Plants.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', {''})
        })
        .catch((err) => {
            console.log(err);
        })
}

const plant_create_get = (res,req) => {
    res.render('create', {''})
}

const plant_create_post = (res, req) => {
    const user = new Plants(req.body);

    user.save()
    .then((result) => {
        res.redirect('/user');
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports ={
    plant_index,
    plant_create_get,
    plant_create_post,
}
