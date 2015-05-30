/**
 * Created by 玉磊 on 2015/5/23.
 */
/*
* process
* 全局对象：全局变量的宿主
* */
//全局变量的属性
global.name='zfpx';
console.log(name);
//隐式定义的变量
age = 6;
console.log(global.age);

//process 就是一个全局变量 global对象的属性
/*1.process当前的进程*/
console.log('hellow');
process.stdout.write('hellow2');
process.stdin.on('data',function(data){
    process.stdout.write(data);
})