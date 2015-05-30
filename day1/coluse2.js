/**
 * Created by ÓñÀÚ on 2015/5/23.
 */
var number=4;
var obj={
    number:4,
    fn1:(function(){
        this.number *=2;
        number =number*2;
        var number=2;

    })
}