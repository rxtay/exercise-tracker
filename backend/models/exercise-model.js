const Schema = require('mongoose').Schema
const model = require('mongoose').model

const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
}, {
    timestamps: true,

});

const Exercise = model('Exercise', exerciseSchema);
module.exports = Exercise;