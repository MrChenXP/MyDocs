const mongoose = require("mongoose"); //引入mongoose模块
mongoose.connect('mongodb://127.0.0.1:27017',(err) => console.log('数据库链接成功...') );