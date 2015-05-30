/**
 * Created by ÓñÀÚ on 2015/5/30.
 */
var fs =require('fs');
fs.open('./msg.txt','r',function(err,fd){
    if(err){
        console.log(err);
    }else{
        var buff = new Buffer(255);
        var bytesRead =fs.readSync(fd,buff,0)
    }
})