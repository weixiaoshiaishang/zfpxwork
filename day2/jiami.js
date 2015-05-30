/**
 * Created by ÓñÀÚ on 2015/5/25.
 */
var fs = require('fs');
function encode(path){
    if(fs.existsSync(path)){
        var stat =fs.statSync(path);
        if(stat.isFile()){
            var content =fs.readFileSync(path);
            for(var i=0;i<content.length;i++){
                content[i]=255-content[i];
            }
            var out =fs.createWriteStream('./msg2.txt');
            out.end(content);
        }
    }
}
//encode('./msg.txt');
encode('./msg2.txt')