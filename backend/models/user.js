const mongoose = require('mongoose');
const Schema = mongoose.Schema;




// User Schema
const userSchema = new Schema({
    username:{
        name:String,

    },
    email: {
        type: String,
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
    }
});



module.exports = new mongoose.model('Users', userSchema);