/**
 * Created by ���� on 2015/5/30.
 */
    /*
    * fs.write
    * fd ������
    * bufffer ���ĸ���������ȡ����
    * offset �������ж�ȡ�Ŀ�ʼλ��
    * length �������ж�ȡ���ֽ���
    * position ָдд���ļ��Ŀ�ʼλ��*/
var fs = require('fs');
fs.open('./msg.txt','w',0666,function(err,fd){
    fs.write(fd,new Buffer('����è��'),3,6,0,function(),)
});