/**
 * Created by ���� on 2015/5/30.
 */
/*
* ����Ŀ¼
* mkdir
* */
var fs = require('fs');
fs.mkdir('./test/test3',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('�����ɹ�')
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
                        throw new Error('·�����ڣ��������ļ���')��
                    }
                }
            }else{
                break;
            }
        }
    }
}