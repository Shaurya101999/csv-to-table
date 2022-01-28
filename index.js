const express = require('express') ;
const port = process.env.PORT || 8000 ;
const app = express() ;

const bodyParser = require('body-parser') ;

const expressLayouts = require('express-ejs-layouts') ;

const db = require('./config/mongoose');

// const multer = require('multer');
const multer = require('./config/multer');

app.use(expressLayouts);
app.use(express.urlencoded({extended: true}));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.use(multer().array())

app.set('layout extractScripts' ,'true')
app.set('layout extractStyles' ,'true')

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running Server ${err}`);
    }
    console.log(`Server running on port: ${port}`);
})

