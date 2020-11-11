const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//requires
require('./db/connection');
morgan('dev');
app.set('PORT', 4000);



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    credentials: true
}));
//_d[3/_k2jmMgJ;@6XVbZ{zz%J4k%TB
//routes

app.use('/api/user', require('./routes/routes'));


module.exports = app;

