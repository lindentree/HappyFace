const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required: true,
    }
    email:,
    location:,
    preferences:,
    has_plants:,
    current_mood:,
})