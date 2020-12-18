// const path  = require('path');
// const express = require('express');
const Plants = require('../../models/plant');
// const mongoose = require('mongoose');


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

const find_plant_by_name = (res, req) => {
    Plants.findOne({name: req.params.plant}
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
             return res.status(500).send(err);
        })

}

const find_plant_reccomendation = (req,res) => {
    Plants.find({optimal_climate:{ humidity: req.params.humidity, temperature: req.params.humidity}, optimal_moods: {$all : req.params.moods} 
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).send(err);
        })
}


const plant_create_get = (res,req) => {
    res.render('create', {name: 'What is your plant\'s name?'})
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
