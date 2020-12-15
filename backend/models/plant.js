const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    description: {body: String},
    ref:,
    optimal_climate:{
          
    },
    optimal_moods:{

    },
});

module.exports = new mongoose.model('Plants', plantSchema);