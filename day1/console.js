/**
 * Created by ���� on 2015/5/23.
 */
/*
* js ���������һ��ȫ�ֶ��� global
*  ���������е����Զ������ڳ����κεط����ʣ� console process*/
//conssole  :���׼��������
//node 1.console.js 1>a.txt 2>&1
console.log()
console.log('%s',new Object());

console.log("1+1");
console.log(eval('1+1'));//eval�÷�

console.time('time')
//ִ�д��뻨��ʱ�䣺
console.timeEnd('time');

var course={name:'zfpx',age:6};
console.log('%j',course);
console.dir(course);
