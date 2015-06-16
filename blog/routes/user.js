var express = require('express');
var router = express.Router();
var models = require('../db/models');
var encryUtils = require('../utils/encryUtils');

router.get('/reg',function(req,res){
    res.render('user/reg',{title:'注册用户',action:'/user/reg'});
});

router.get('/forget',function(req,res){
    res.render('user/forget',{title:'忘记密码'});
});


router.post('/forget',function(req,res){
    if(!req.body.username){
        req.flash('error','请输入用户名!');
        return res.redirect('back');
    }
    models.get('user').findOne({username:req.body.username},function(err,user) {
        if (err) {
            req.flash('error', err);
            return res.redirect('back');
        }
        if(!user){
            req.flash('error','用户名不存在');
            return res.redirect('back');
        }
        var token = encryUtils.encrypt(""+user.id);
        res.end('http://localhost:8080/user/reset?id='+user.id+'&token='+token);
    });
});
router.get('/reset',function(req,res){
    if(!req.query.id){
        req.flash('error','请输入用户名!');
        return res.redirect('back');
    }
    if(!req.query.token || req.query.token != encryUtils.encrypt(""+req.query.id)){
        req.flash('error','token不正确!');
        return res.redirect('back');
    }
    res.render('user/reset',{title:'重置密码',id:req.query.id});
});
router.post('/reset',function(req,res){
    if(!req.body.id){
        req.flash('error','请输入用户ID!');
        return res.redirect('back');
    }
    if(!req.body.password){
        req.flash('error','请输入密码!');
        return res.redirect('back');
    }
    models.get('user').update({id:req.body.id},{password:encryUtils.encrypt(req.body.password)},function(err,ret){
        req.flash('success','重置密码成功!');
        return res.redirect('/user/login');
    });
});
router.post('/reg',function(req,res){
    if(!req.body.username || !req.body.password){
        req.flash('error','请输入用户名和密码!');
        return res.redirect('back');
    }
    models.get('user').findOne({username:req.body.username},function(err,user){
        if(err){
            req.flash('error',err);
            return res.redirect('back');
        }
        if(user){
            req.flash('error','用户名已经被占用，请重新填写');
            return res.redirect('back');
        }
        models.get('user').create({username:req.body.username,password:encryUtils.encrypt(req.body.password)},function(err,newUser){
            res.redirect('/user/login');
        });

    });
});

router.get('/login',function(req,res){
    res.render('user/reg',{title:'登录用户',action:'/user/login'});
});

router.get('/logout',function(req,res){
    delete req.session.user;
    res.redirect('/');
});

router.post('/login',function(req,res){
    if(!req.body.username || !req.body.password){
        req.flash('error','请输入用户名和密码!');
        return res.redirect('back');
    }
    models.get('user').findOne({username:req.body.username},function(err,user){
        if(err){
            req.flash('error',err);
            return res.redirect('back');
        }
        if(!user){
            req.flash('error','用户名不存在，请重新填写');
            return res.redirect('back');
        }
        if(user.password != encryUtils.encrypt(req.body.password)){
            req.flash('error','密码错误，请重新填写');
            return res.redirect('back');
        }
        req.flash('success','登录成功');
        req.session.user = user;
        res.redirect('/');
    });
});

module.exports = router;