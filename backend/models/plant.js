const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// plant schema
const plantSchema = new Schema({
    name: {
        type:String,
        required: true,
        createdOn: {type: Date, "default": Date.now},
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    description: {body: String},
    ref:{
        url:String
    },
    optimal_climate:{
        humidity: {
            type: Number, set: function (v) { return Math.round(v) ;},
            min: { type: Number, min: 0 },
            max: { type: Number, max: 100 }
        },
        temperature:{
            type: Number, set: function (v) { return Math.round(v) ;},
            min: { type: Number, min: -100 },
            max: { type: Number, max: 200 }
        },
    },
    optimal_moods:{
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
    },

});

// getter for reference link
const root = 'https://en.wikipedia.org/wiki/Cactus';
Schema.path('ref.0.url').get(v=> `${root}${v}`);

// module.exports = new mongoose.model('Plants', plantSchema);
const Plants = mongoose.model('Plants', plantSchema);
module.exports = Plants;