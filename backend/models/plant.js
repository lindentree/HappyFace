const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// plant schema
const plantSchema = new Schema({
    name: {
        type:String,
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    description: String,
    url:String,
    optimal_climate:{
        humidity: {
            type: Number,

        },
        temperature:{
            type: Number,
 
        },
    },
    optimal_moods: [{
        type:String, 
    }]

});


// module.exports = new mongoose.model('Plants', plantSchema);
const Plants = mongoose.model('Plants', plantSchema);
module.exports = Plants;