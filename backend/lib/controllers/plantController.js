// const path  = require('path');
// const express = require('express');
const Plants = require('../../models/plant');
// const mongoose = require('mongoose');


// const User = mongoose.model('Users', userSchema);
// stick with create and read controller calls
const plant_index = (req,res) => {
    Plants.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index')
        })
        .catch((err) => {
            console.log(err);
        })
}

const find_plant_by_name = (req,res) => {
    Plants.findOne({name: req.params.plant}
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
             return res.status(500).send(err);
        })

    )}

const find_plant_reccomendation = (req,res) => {
    Plants.find({optimal_climate:{ humidity: req.params.humidity, temperature: req.params.humidity}, optimal_moods: {$all : req.params.moods} 
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).send(err);
        })
    })
}

const create_plant = (req,res) => {
    console.log( req);
    const plant = new Plants(req)
    plant.save()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err)
    })
}



module.exports ={
    plant_index,
    find_plant_by_name,
    find_plant_reccomendation,
    create_plant,

}
