const fs = require('fs');



 fs.readFile('/Users/jordansturdivant/Desktop/learnnode2/planet.txt','utf-8',(err,data)=>{
    if(err){
       return console.log('error accessing files');
    }
    console.log(`Planets in the solar system in order in proximity of the sun:
    ${data}`)
 })
