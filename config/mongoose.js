const mongoose = require('mongoose') ;
const env = require('./enviroment');

const url = env.db ;

mongoose.connect(url);

const db = mongoose.connection ;

db.on('error', console.error.bind(console, 'Error in connecting to db'));

db.once('open', function(){
    console.log('Connected to mongo');
})

module.exports = db ;