/**
 * Created by ���� on 2015/5/23.
 */
/*
* process
* ȫ�ֶ���ȫ�ֱ���������
* */
//ȫ�ֱ���������
global.name='zfpx';
console.log(name);
//��ʽ����ı���
age = 6;
console.log(global.age);

//process ����һ��ȫ�ֱ��� global���������
/*1.process��ǰ�Ľ���*/
console.log('hellow');
process.stdout.write('hellow2');
process.stdin.on('data',function(data){
    process.stdout.write(data);
})