const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// plant schema
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
    ref:{
        url:String
    },
    optimal_climate:{
          
    },
    optimal_moods:{

    },
});

// getter for reference link
const root = '';
Schema.path('ref.0.url').get(v=> `${root}${v}`);

// module.exports = new mongoose.model('Plants', plantSchema);
mongoose.model('Plants', plantSchema);