const { spawn } = require('child_process');

module.exports = function(computer, arguments,cb){
    let err = null;
    let info = '';
    let sci = spawn('./bin/NodeCommand.exe', [arguments, computer]);
    
    sci.on('error',function(data){
        err += data;
    });
    sci.on('data',function(data){
        info += data;
    });

    sci.on('close',function(){
        return cb(err,info);   
    });
}
