const File = require('../models/file');
const path = require('path');

// uploading file and saving its address in db 
module.exports.submit = (req, res)=>{
    // console.log(req);
    // console.log(req.body.file);
    // console.log(req.body);
    console.log(`${req.file}`);
    // console.log(req.file.path);
    if(req.file === undefined){
        return res.redirect('back');
    }
    try{
        File.create({
            name: req.file.filename,
            path: path.join(__dirname,'..', req.file.path)})
    }catch(err){
        console.log(err);
    };
    res.redirect('back');
} 

// displaying home page with all uploaded files
module.exports.home = (req, res) => {
    let files = File.find({}, (err, files)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.render('home',{
            files
        })
    // console.log(file,' ');
    })
        
}
