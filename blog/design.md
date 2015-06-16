#开发一个博客
#本地启动博客流程：1. mysql数据库：D:\ruanjian\mysql\bin>mysql -D blog -u root -p；   2.mongodb:cmd下进入到bin目录 运行mongod --dbpath d:\mongodb\data  --->然后启动gongo.exe;--》redies 3.浏览器：localhost:8080
#提供注册功能
#npm install -g bower使用bower命令管理前端  --->>npm install -g bower --registry=http://registry.npm.taobao.org  安装不成功是用这个命令装bower
#使用bower install bootstrap 安装前端框架bootstrap

#文章为mackdown格式
#其中使用了heightlight.com中的高亮
#评论使用了多说系统评论

#alter table article modify `content`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL ;  --修改mysql列的字符集解决乱码