const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gtayj0', { useNewUrlParser: true });
module.exports = mongoose;