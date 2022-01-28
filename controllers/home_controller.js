const File = require('../models/file');
const path = require('path');


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
