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
fs.open('./msg.txt','w',0666,function(err,fd){
    fs.write(fd,new Buffer('虎妈猫爸'),3,6,0,function(),)
});