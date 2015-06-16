/**
 * Created by 玉磊 on 2015/5/30.
 */
    /*
    * fs.write
    * fd 描述符
    * bufffer 从哪个缓存区读取数据
    * offset 缓存区中读取的开始位置
    * length 缓存区中读取的字节数
    * position 指写写入文件的开始位置*/
var fs = require('fs');
var path = require('path');

function deepVerse(dir){
    console.log(dir);

    var stat = fs.statSync(dir);
    if(stat.isDirectory()){

        fs.rmdir(dir,function(err){
            if(err){
                var files = fs.readdirSync(dir);
                for(var i=0;i<files.length;i++){
                    deepVerse(path.join(dir,files[i]));
                }
            }else{
                deepVerse(path.join(dir,files[i]));
                console.log('ddd')
            }

        })

    }else{
        console.log(dir);
        fs.unlink(dir,function(){
            console.log('删除文件'+stat);
        })
    }
}
deepVerse(path.resolve('./A'))


/*
function delDir(path){

    if(fs.existsSync(path)){
        var st;
        if(st = fs.statSync(path)){
            if(!st.isDirectory()){
                fs.unlink('path',function(){
                    console.log('删除文件')
                })
                //throw new Error('路径存在但不是文件夹');
            }else{
                var arryDir =fs.readdir(path,function(){

                })
            }
        }
    }else{
        throw new Error('路径存在但不是文件夹');
    }

*/




   /* if(mode ==undefined){
        mode =0777 & (-process.unmask);//0755
        var parts = path.split(systemPath.sep);//win \ linux /
        for(var i=0;i<parts.length;i++){// ./a/b/c
            var sa = parts.slice(0,i+1).join(systemPath.sep);
            if(fs.existsSync(sa)){
                var st;
                if(st = fs.statSync(sa)){
                    if(!st.isDirectory()){
                        throw new Error('路径存在但不是文件夹');
                    }
                }
            }else{
                break;
            }

        }
        for(var i=0;i<parts.length;i++){
            var build = parts.slice(0,i+1).join(systemPath.sep);
            fs.mkdirSync(build,mode);
        }
    }*/
