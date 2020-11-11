const mongoose = require('mongoose');


function connect()
{
    mongoose.connect('mongodb://localhost/dbmern', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    console.log('Connected to db');
}

connect();