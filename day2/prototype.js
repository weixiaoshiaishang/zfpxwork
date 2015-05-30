/**
 * Created by 玉磊 on 2015/5/24.
 */
/*
* js是面向对象的语言，只有对象
* 原型链
* 原型和构造函数生成对象，
* 1.构造函数内定义的属性继承方式不同，
* 2.构造函数的任何属性和函数都会被重复创建
* 3.构造函数内定义的函数运行时有闭包的开销*/
function prerson(){
    this.name ='';
    this.say =function(){};
}
prerson.prototype.name='zfpx';
prerson.prototype.showName=function(){
    console.log(this.name);
}var person = new prerson();

function Animal(name,food){
    thiss.food =food;
    this.name=name;
    this.getName=function(){
        return this.name;
    }
}
Animal.prototype.food =''