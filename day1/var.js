/**
 * Created by 玉磊 on 2015/5/23.
 */
/*
* 在js中 带var关键字只声明和带function的关键字需要域解释*/
console.log(num);
var num =9;
fn();
function fn(){
    console.log('1');
}
var fn2 = function(){
    console.log('2');
}
fn2();
