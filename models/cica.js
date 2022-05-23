const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Cica = db.model('Cica',{
    id: Number,
    name: String,
    colour: String,
    _hotel: {
        type:Schema.Types.ObjectId,
        ref: 'Hotel' 
    },
    date: String
})

module.exports = Cica;

