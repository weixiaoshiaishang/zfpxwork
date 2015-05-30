/**
 * Created by ÓñÀÚ on 2015/5/25.
 */
var fs = require('fs');
var fd = fs.openSync('./msg.txt','r');
var bytesRead =0;
var result=[];
function readPart(buf,fd){
    return fs.readSync(fd,buf,0,16,null);
}
do{
    var buf =new Buffer(16);
    bytesRead = readPart(buf,fd)
    if(bytesRead<16)
        buf=buf.slice(0,bytesRead);
    result.push(buf);
}while(bytesRead)
console.log(result.toString());