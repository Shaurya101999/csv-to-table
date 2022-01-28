const File = require('../models/file');

var fs = require('fs'); 
var {parse} = require('csv-parse');

module.exports.open = (req, res)=>{
    let checkHeader = 0; 
    let path = req.query.path;
    console.log(`File path : ${path}`);
    // return res.redirect('back');
    // console.log(req.params);
    var csvData=[];
    var csvHeader =[];
    fs.createReadStream(path)
        .pipe(parse({delimiter: ','}))
        .on('data', function(csvrow) {
            // console.log(csvrow);
            //do something with csvrow
            if(checkHeader==0){
                csvHeader.push(csvrow);
                checkHeader = 1;
            }else{
                csvData.push(csvrow);
            }        
        })
        .on('end',function() {
        // do something with csvData
        // console.log('** In * Csv Header **** ',csvHeader[0][1]);
        // console.log('** In * Csv data **** ',csvData[0][0]);
        // console.log(csvData);
            return res.render('table',{
                csvHeader: csvHeader[0],
                csvData
            })
        });
     
}