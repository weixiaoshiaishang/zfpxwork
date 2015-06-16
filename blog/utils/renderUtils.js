var markdown = new require('markdown-it')({html:true});

var xss = require('xss');
var whiteList = xss.whiteList;
whiteList.embed = ['src','type','width','height'];
var xssFilter = new xss.FilterXSS({
    whiteList:whiteList
});
exports.toHtml = function(content){
    return markdown.render(content||'');
}

exports.xss = function(html){
    return xssFilter.process(html);
}