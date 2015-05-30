/**
 * Created by 玉磊 on 2015/5/23.
 */
    //加载核心包
var http = require('http');
var url = require('url');
var waiter = function(req,res){
    console.log(req.url);
    var  url =req.url;
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    console.log(req.headers['accept-language']);
    if(url == '/baozi'){
        res.end('包子');
    }else if(url =='/doufu'){
        res.end('豆腐');
    }
    res.end('hello');
};
var server = http.createServer(waiter);
server.listen(8080);

/*
* 1xx 请求已经受理 需要继续处理
* 2xx 服务器已经接受，正常响应
* 3xx 重定向，需要客户度进一步处理
* 4xx 客户端错误
* 5xx 服务器错误*/