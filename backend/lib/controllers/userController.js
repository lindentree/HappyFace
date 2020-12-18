const path  = require('path');
const express = require('express');
const User = require('../../models/user');
const mongoose = require('mongoose');


// const User = mongoose.model('Users', userSchema);
// stick with create and read controller calls
const user_index = (res, req) => {
    User.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', {''})
        })
        .catch((err) => {
            console.log(err);
        })
}
const find_user_by_name = (res, req) => {
    User.findOne({username: req.params.user}
        .then((result) => {
            return res.status(200).json(result);
        }).catch((err) => {
             return res.status(500).send(err);
        })

}

const user_create_get = (res,req) => {
    res.render('create', {''})
}

const user_create_post = (res, req) => {
    const user = new User(req.body);

    user.save()
    .then((result) => {
        res.redirect('/user');
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports ={
    user_index,
    find_user_by_name,
    user_create_get,
    user_create_post,
}
