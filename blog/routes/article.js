var express = require('express');
var router = express.Router();
var models = require('../db/models');
var SuperCache = require('super-cache');
var cache = new SuperCache({
    ttl:10,
    store:new SuperCache.RedisStore({
        host:'127.0.0.1',
        port:6379,
        db:0,
        prefix:'cache',
        password:'xxx'
    })
});
var renderUtils = require('../utils/renderUtils');
function checkLogin(req,res,next){
    if(req.session.user){
        next();
    }else{
        req.flash('error','用户未登录!');
        return res.redirect('/user/login');
    }
}
router.get('/add',checkLogin,function(req,res){
    res.render('article/add',{title:'增加文章',action:'/article/add'});
});

router.post('/add',checkLogin,function(req,res){
    if(!req.body.title || !req.body.content){
        req.flash('error','请输入标题和内容!');
        return res.redirect('back');
    }

    models.get('article').create({user:req.session.user.id,title:req.body.title,content:req.body.content},function(err,newArticle){
        if(err){
            req.flash('error',err);
            return res.redirect('back');
        }
        res.redirect('/');
    });
});


router.get('/view/:id',checkLogin,function(req,res){
    var key = 'article/'+req.params.id;
    cache.get(key,function(err,data){
        if(data){
            res.render('article/view',{title:'查看文章',article:data});
        }else{
            models.get('article').findOne({id:req.params.id},function(err,article){
                if(err){
                    req.flash('error',err);
                    return res.redirect('back');
                }
                if(!article){
                    req.flash('error','文章不存在');
                    return res.redirect('back');
                }
                article.content = renderUtils.toHtml(article.content);
                article.content = renderUtils.xss(article.content);
                cache.set(key,article,3600);
                res.render('article/view',{title:'查看文章',article:article});
            })
        }


    });

});


router.get('/edit/:id',checkLogin,function(req,res){
    models.get('article').findOne({id:req.params.id},function(err,article){
        if(err){
            req.flash('error',err);
            return res.redirect('back');
        }
        if(!article){
            req.flash('error','文章不存在');
            return res.redirect('back');
        }
        res.render('article/add',{title:'编辑文章',article:article,action:'/article/edit/'+article.id});
    });

});


router.post('/edit/:id',checkLogin,function(req,res){
    if(!req.body.title || !req.body.content){
        req.flash('error','请输入标题和内容!');
        return res.redirect('back');
    }

    models.get('article').update({id:req.params.id},{title:req.body.title,content:req.body.content},function(err,newArticle){
        if(err){
            req.flash('error',err);
            return res.redirect('back');
        }
        res.redirect('/');
    });
});

router.get('/delete/:id',checkLogin,function(req,res){
    models.get('article').destroy({id:req.params.id},function(err,newArticle){
        if(err){
            req.flash('error',err);
            return res.redirect('back');
        }
        res.redirect('/');
    });
});

module.exports = router;