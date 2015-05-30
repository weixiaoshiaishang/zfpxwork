/**
 * Created by ÓñÀÚ on 2015/5/25.
 */
var fs =require('fs');
var out = fs.createReadStream('./msg.txt');
var bower=[];
out.on('readable',function(){
    console.log('-----');
    var soon;
    while(null!=(soon=out.read(19))){
        bower.push(soon);
    }
}).on('end',function(){
    var buf=Buffer.concat(bower);
    console.log(buf.toString());
});
