/**
 * Created by ���� on 2015/5/23.
 */
    //���غ��İ�
var http = require('http');
var url = require('url');
var waiter = function(req,res){
    console.log(req.url);
    var  url =req.url;
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    console.log(req.headers['accept-language']);
    if(url == '/baozi'){
        res.end('����');
    }else if(url =='/doufu'){
        res.end('����');
    }
    res.end('hello');
};
var server = http.createServer(waiter);
server.listen(8080);

/*
* 1xx �����Ѿ����� ��Ҫ��������
* 2xx �������Ѿ����ܣ�������Ӧ
* 3xx �ض�����Ҫ�ͻ��Ƚ�һ������
* 4xx �ͻ��˴���
* 5xx ����������*/