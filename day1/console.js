/**
 * Created by 玉磊 on 2015/5/23.
 */
/*
* js 特殊对象有一个全局对象 global
*  它及其所有的属性都可以在程序任何地方访问： console process*/
//conssole  :向标准输出流输出
//node 1.console.js 1>a.txt 2>&1
console.log()
console.log('%s',new Object());

console.log("1+1");
console.log(eval('1+1'));//eval用法

console.time('time')
//执行代码花费时间：
console.timeEnd('time');

var course={name:'zfpx',age:6};
console.log('%j',course);
console.dir(course);
