/**
 * Created by ���� on 2015/5/24.
 */
/*
* js�������������ԣ�ֻ�ж���
* ԭ����
* ԭ�ͺ͹��캯�����ɶ���
* 1.���캯���ڶ�������Լ̳з�ʽ��ͬ��
* 2.���캯�����κ����Ժͺ������ᱻ�ظ�����
* 3.���캯���ڶ���ĺ�������ʱ�бհ��Ŀ���*/
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