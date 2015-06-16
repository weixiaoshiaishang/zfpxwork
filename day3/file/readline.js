var fs = require('fs');
var EventEmiter = require('events').EventEmitter;
var util = require('util');
var RETURN = 0x0d; //ascii \r 0d=13 回车  return  移动光标到该行的起始位置
var NEWLINE = 0x0a; //ascii \n a=10 换行 换行移动至下一行的起始位置
function LineReader(path) {
    //this._rs = fs.createReadStream(path, 'r');
    this._rs = fs.openSync(path, 'r');
}
util.inherits(LineReader,EventEmiter);
LineReader.prototype.on('newListener', function (event, func) {
    buff = new Buffer(1);
    //var b =new Buffer();
    if (event == 'newLine') {
        var self = this;
        var line = [];
        var read ;
        var size=0;

        do {
            read = fs.readSync(this._rs, buff, 0, 1, size);
          // console.log(buff =='\u00bd)
            if (buff =='\u000d') {
                //this.read(1);
                //console.log(buff)
                read = fs.readSync(this._rs, buff, 0, 1, size);
                //console.log(buff)
               // console.log(line.toString()+'5');
                self.emit('newLine', line.toString());
                line = [];
                size +=1;
                buff[0]='';
            } else if(buff.toString()!='') {
                line.push(buff);
                console.log(buff)
                console.log(line.toString())
               // line = [];
                size +=1;
                buff[0]='';
            }

        } while (read > 0)


       /* this._rs.on('readable', function () {
            var ch;
            while (null != (ch = this.read(1))) {
                if (ch[0] == RETURN) {
                    this.read(1);
                    self.emit('newLine', Buffer.concat(line).toString());
                    line = [];
                } else {
                    line.push(ch);
                }
            }
        });*/
       /* this._rs.on('end', function () {
            self.emit('newLine', Buffer.concat(line).toString());
            self.emit('end');
        });*/
    }
});
var reader = new LineReader('./1.txt');
reader.on('newLine', function (data) {
    console.log(data);
});
reader.on('end', function () {
    console.log('end');
});