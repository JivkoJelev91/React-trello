const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5432;

const db = require('./config/db');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors()); // include before other routes
app.use(morgan('dev'));


// routes
require('./routes/routes')(app);

app.listen(port, () => console.log(`Server running on port ${port}`));