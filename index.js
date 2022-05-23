

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//app.use(express.static('static'));

require('./route/routing')(app)
app.listen(3000, function () {
});