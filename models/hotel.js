const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Hotel = db.model('Hotel',{
    id: Number,
    name: String,
    address: String,
})

module.exports = Hotel;