/**
 * Created by ÓñÀÚ on 2015/5/30.
 */
var fs =require('fs');
var BUFFER_SIZE =10000;
function copy(src,dest){
    var readSoFar,fdsrc,fddest,read;
    var buff= new Buffer(BUFFER_SIZE);
    fdsrc = fs.openSync(src,'r');
    fddest = fs.openSync(dest,'w');
    do{
        read =fs.readSync(fdsrc,buff,0,BUFFER_SIZE,readSoFar);
        fs.write(fddest,buff,0,read);
        readSoFar+=read;
    }while(read>0)
    fs.closeSync(fdsrc);
    fs.closeSync(fddest);
}