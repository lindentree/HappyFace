const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


// email validation
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// User Schema
const userSchema = new Schema({
    username:{
        name:String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please make a valid Username'],
        index: true,
        createdOn: {type: Date, "default": Date.now},
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "email is required"],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        index: true,
    },
    location: {
        type: {
          type: String,
          enum: ['Point']
        },
        // GeoJSON Points
        coordinates: {
          type: [Number],
          index: '2dsphere'
        },
        climate: {
            humidity: {
                type: Number, set: function (v) { return Math.round(v) ;}
            },
            temperature:{
                type: Number, set: function (v) { return Math.round(v) ;}
            },
            description: {
                
            }
        }
    },
    preferences:{
        type: String,
    },
    any_plants:{
        plants: {
            // cross refernce plant types at plant schema
            min: { type: Number, min: 0 },
            max: { type: Number, max: 500 }
        },
    },
    current_mood:{
            happy: {
            type: Boolean,
            default: false
        },
            mad: {
            type: Boolean,
            default: false
        },
            sad: {
            type: Boolean,
            default: false
        },
            stressed: {
            type: Boolean,
            default: false
        },
            tired: {
            type: Boolean,
            default: false
        },
            lonely: {
            type: Boolean,
            default: false
        },
    }, {timestamps: true});


const User = mongoose.model('Users', userSchema);
module.exports = User;