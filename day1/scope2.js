/**
 * Created by ÓñÀÚ on 2015/5/23.
 */
var n =1;
var s = 'hello';
var f = 'window f';
function fn(){
    console.log(n);
    console.log(s);
    n =2;
    var n=3;
    var f ='fn -f';
    function inner(){
        console.log(n);

    }
}
