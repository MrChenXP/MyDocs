let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});
let template = ejs.compile(str, options);
template(data);
// => 输出绘制后的 HTML 字符串

ejs.render(str, data, options);
// => 输出绘制后的 HTML 字符串

ejs.renderFile(filename, data, options, function(err, str){
    // str => 输出绘制后的 HTML 字符串
});