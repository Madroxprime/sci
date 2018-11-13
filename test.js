const sci = require('./index.js');

sci('CM-X-1060655','screenshot',function(err,data){
    if(err){
        console.log(err);
    }
    if(data){
        console.log(data);
    }
})