const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = 4040;

const app = express();

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})
