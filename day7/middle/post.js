/**
 * Created by 玉磊 on 2015/6/13.
 */
var express = require('express');
var querystring = require('querystring')
var bodyParser = require('body-parser');
var multer = require('multer');

var app= express();
app.use(bodyParser.json());
app.use(multer({dest:'./uploads'}));//制定上传文件存放目录
app.use(bodyParser.urlencoded({extends:false}));
app.get('/',function(req,res){
    res.sendfile('./index.html');
})
/*//方式1
app.post('/',function(req,res){
    var postData='';
    req.on('data',function(data){
        postData+=data;
    })
    req.on('end',function(data){
        var dataObj = querystring.parse(postData.toString());
        res.end(JSON.stringify(dataObj));
    })
});*/

//方式2
app.post('/:name/:age1',function(req,res){
    console.log(req.params.name);
    console.log(req.query.name);
    console.log(req.body.name);

    console.log(req.param('age1'));cd
    console.log(req.param('age2'));

    // console.log(req.params.name);


    console.log(req.files.avatar)
   res.end(JSON.stringify(req.query)+ JSON.stringify(req.body) )
});
app.listen(8080);