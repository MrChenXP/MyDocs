//先安装mongoose模块 参考：express
const mongoose = require("mongoose"); //引入mongoose模块
//创建数据库连接 mongoose.connect(uri(s), [options], [callback])
    //url(s):数据库地址,可以是多个,以`,`隔开
    //options:可选,配置参数
    //callback:可选,回调
// 指定用户连接 mongoose.connect('mongodb://用户名:密码@127.0.0.1:27017/数据库名称')
// 连接多个数据库 mongoose.connect('urlA,urlB,...',{mongos:true})
    mongoose.connect('mongodb://127.0.0.1:27017/test',(err) => console.log('数据库链接成功...') );
// 连接状态 disconnected 已断开  connected 已连接 connecting正在连接 disconnecting 正在断开
    mongoose.connection.on('connected', () => console.log('数据库链接成功...'));

// 定义 Schema  是一种以文件形式存储的数据库模型骨架(架构)，不具备数据库的操作能力
    // schema可以理解为mongoose对表结构的定义(不仅仅可以定义文档的结构和属性，还可以定义文档的实例方法、
        // 静态模型方法、复合索引等)，每个schema会映射到mongodb中的一个collection（集合，表）
    const stuSchema =  mongoose.Schema({
        name:String,
        age:Number,
        tall:Number,
        phone:String,
    });

//Model     是由Schema编译而成的假想（fancy）构造器，具有抽象属性和行为。 mongoose.model(`文档名称`, Schema)
    // Model的每一个实例（instance）就是一个document。document可以保存到数据库和对数据库进行操作。
    //Model与Schema相对应。操纵model就是在操纵数据库中的集合
    //创建一个stuSchema架构 集合名为stus的对象(系统会自动把集合名转为小写，没加s的加上s)
    let stuModel = mongoose.model('stus',stuSchema);
// 生成一个model实例
    let stu = new stuModel({
        name:'young1',
        age:20,
        tall: 170,
        phone:'13600136000'
    });
//将实例保存到数据库 (错误信息,保存的数据) 执行一次保存一次 保存成一条新的数据
//     stu.save((err,result)=>{
//         if(err){
//             console.log('保存失败')
//         }
//         console.log('这是刚刚插入的数据：'+result)
//     });
//查询 (错误信息,查询后的数据) 用Model对象进行查询
    stuModel.find( (err,result) => console.log('这是stus所有的数据：'+result) );
    //根据id查询
    //stuModel.findById('5ad55895fb2fda0df4e90a04',(err,result) => console.log('这是id查询的数据：'+result) );
//修改 (错误信息,修改后的结果) 只会修改查找后的第一个
    stuModel.update({name:'young1'},{$set:{name:'young2'}},(err,result) => console.log(result) );
//删除
    stuModel.remove({name:'young2'},(err) => console.log('删除成功') );























