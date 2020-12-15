const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

// validations for a differnt file
// const validateEmail = funcitoon(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

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
            humidity: ,
            temperature:,
        }
    },
    preferences:{
        type: String,
    },
    any_plants:{
        plants: {
            min: { type: Number, min: 0 },
            max: { type: Number, min: 0 }
        },
    },
    current_mood:{

    },
});

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

module.exports = new mongoose.model('Users', userSchema);