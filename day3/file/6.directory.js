/**
 * Created by 玉磊 on 2015/5/30.
 */
/*
* 创建目录
* mkdir
* */
var fs = require('fs');
fs.mkdir('./test/test3',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('创建成功')
    }
})

function makeDir(path,mode){
    if(mode==undefined){
        mode = 0777 &(-process.umask);
        var parts = path.split(path,seq);
        for(var i=0;i<parts.length;i++){
            var sa = parts.splice(0,i+1).join(path.sep);
            if(fs.existsSync(sa)){
                var st;
                if(st = fs.statSync(sa)){
                    if(!st.isDirectory()){
                        throw new Error('路径存在，但不是文件家')；
                    }
                }
            }else{
                break;
            }
        }
    }
}