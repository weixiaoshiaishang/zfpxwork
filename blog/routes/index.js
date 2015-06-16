var express = require('express');
var router = express.Router();
var models = require('../db/models');
router.get('/',function(req,res){
    var query = {};
    if(req.id){
        query.user = req.id;
    }
    models.get('article').find(query).exec(function(err,articles){
        if(err) next(err);
        res.render('index'+(req.style&& req.style != 'default'?('_'+req.style):''),{title:'首页',articles:articles});//渲染模板
    });

});

module.exports = router;