/**
 * Created by ÓñÀÚ on 2015/5/25.
 */
var fs=require('fs');
var out = fs.createReadStream('./msg.txt');
var src =fs.createWriteStream('./msg2.txt');
out.on('open',function(){
    console.log('dakai');
})
out.on('data',function(data){
    src.write(data);
})