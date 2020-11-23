const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = 3000;

const db = require("./db/index");

const api = require('./routes');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('./api', api);

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})
