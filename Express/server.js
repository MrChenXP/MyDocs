let express = require('express');   //从外部获取express模块的接口 即所获取模块的 exports 对象
let bodyParser = require('body-parser');//处理表单 解析方式
let fs = require('fs');

let app = express();    //调用了createApplication()方法，返回了一个express对象 生成实例
//app.use(bodyParser.urlencoded({extend:false}))
let urlencodedParser = bodyParser.urlencoded({extend:false}); //urlencoded表单解析方式
let jsonParser = bodyParser.json()    // json就是json解析方式

//获取指定路径并返回回调函数  get请求方法(还有post,delete)
    // : 代表动态路由 符串模式的路由路径可以用正则?+*()-.  也可以用纯正则
    app.get(/^\/((a$)|(b$))/,function (req,res) {
        let data = req.query;   //获取以get方式传入的数据
        let oJson = {age:{},sex:3};
        res.send(data);//相应内容给指定文档 默认会转换json
    });
    // app.post('/:a', urlencodedParser, function(req, res) {
//  		console.log(req.params.a)
    //     res.send(req.body);
    // });
    //postman模拟各种请求的一种浏览器插件   https://crx.2333.me/
    // https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=zh-CN
    //body 提交内容 form-data可以提交文件 x-www-f...提交文本，会对特殊字符进行编码 raw选择各种格式
    // app.post('/aaaa', jsonParser, function(req, res) {
    //     res.send(req.body);
    // });
//上传文件 Multer
    //Multer 会添加一个 body 对象 以及 file 或 files 对象 到 express 的 request 对象中。
    // body 对象包含表单的文本域信息，file 或 files 对象包含对象表单上传的文件信息。
    let multer = require('multer'); //处理文件上传
    // let upload = multer({ dest: 'uploads/' });//指定上传的目录
    let createFolder = function(folder) {
        try {
            fs.accessSync(folder);  //查找目录
        } catch (e) {
            fs.mkdirSync(folder);   //没有就创建
        }
    };
    let uploadFolder = './upload/';
    createFolder(uploadFolder); //调用创建目录方法
    let storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadFolder)  //储存的目录
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname) //给文件命名
        }
    });

    let upload = multer({ storage: storage });
        app.get('/form',function (req,res) {
            res.sendFile(__dirname + '/form.html'); //传送指定路径的文件
        });
        //单文件上传获取信息 参数里写上传文件框的name值
        app.post('/upload', upload.single('logo'), function(req, res) {
            console.dir(req.file);  //req.file 是 `logo` 文件的信息
            res.send(req.file);
        });
        //多文件上传 （第二个参数限定上传文件个数）（没有修改后缀） 不能多于限制个数 会报错
        app.post('/uploads',upload.array('logo',2),function(req,res){
            console.dir(req.files);// req.files 是 `photos` 文件数组的信息
            res.send(req.files);// // req.files 是一个对象 (String -> Array) 键是文件名，值是文件数组
            //  req.files['avatar'][0] -> File  req.files['gallery'] -> Array
        });
//EJS模板引擎
    app.set('views', './views');    //放模板文件的目录 不写就默认是 ./views
    app.set('view engine', 'ejs');  //指定模板引擎
    app.get('/form/:aa', function(req, res) {
        let  b = { age: 21, job: "陈新平", hobbie: ['1', '2', '3'] }; //要传递的值
        res.render('form', { data: b});  //返回views目录下的form文件 data是要传递的参数名 b是值
    });

//中间件 对请求进行处理的过程     参数没有写路由时 访问时不要加任何东西 如：localhost:82
    app.use(function (req,res,next) {   //使用中间件 app.get中的function也是中间件
        console.log('aaa');
        next(); //传递给下一个中间件，不然会直接结束
        console.log('aaa'); //会在没有next()存在的中间件结束后运行
    });
    app.use('/use',function (req,res) { //该路由会执行此中间件
        console.log('bbbbb');
        res.send('ok')
    });
//访问静态文件中间件 localhost:82/路由/文件全名。 若没设置路由 那访问方式为 localhost:82/文件全名
    app.use('/sta',express.static('public'));    //public为文件存储目录 可更改 但建议public
//模块化 使用路由中间件进行模块化开发
let indexRouter = require('./routes/index');//将具体代码写在这个文件然后导入
let usersRouter = require('./routes/users');
app.use('/index', indexRouter);//使用路由中间件 匹配相应的文件给对应的路由
app.use('/users', usersRouter);

//请求和响应
// request对象表示HTTP请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性 用来获取数据
    // req.app                  当callback为外部文件时，用req.app访问express的实例
    // req.baseUrl              获取路由当前安装的URL路径
    // req.body / req.cookies   获得「请求主体」/ Cookies    用来post的参数(要使用body-parser插件配置urlencoded)
    // req.fresh / req.stale    判断请求是否还「新鲜」
    // req.hostname / req.ip    获取主机名和IP地址
    // req.originalUrl          获取原始请求URL
    // req.params               获取路由的parameters 地址后面的参数
    // req.path                 获取请求路径
    // req.protocol             获取协议类型
    // req.query                获取URL的查询参数串 用来获取get请求的参数
    // req.route                获取当前匹配的路由
    // req.subdomains           获取子域名
    // req.accepts()            检查可接受的请求的文档类型
    // req.acceptsCharsets/req.acceptsEncodings/req.acceptsLanguages 返回指定字符集的第一个可接受字符编码
    // req.get()                获取指定的HTTP请求头
    // req.is()                 判断请求头Content-Type的MIME类型
// response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据
    // res.app          同req.app一样
    // res.append()     追加指定HTTP头
    // res.set()        在res.append()后将重置之前设置的头
    // res.cookie(name，value [，option])     设置Cookie
    // opition: domain / expires / httpOnly / maxAge / path / secure / signed
    // res.clearCookie() 清除Cookie
    // res.download()    传送指定路径的文件
    // res.get()         返回指定的HTTP头
    // res.json()        传送JSON响应   只能传送json文件
    // res.jsonp()       传送JSONP响应
    // res.location()    只设置响应的Location HTTP头，不设置状态码或者close response
    // res.redirect()    设置响应的Location HTTP头，并且设置状态码302
    // res.render(view,[locals],callback)   渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
    // res.send()        传送HTTP响应
    // res.sendFile(path [，options] [，fn]) 传送指定路径的文件 -会自动根据文件extension设定Content-Type
    // res.set()         设置HTTP头，传入object可以一次设置多个头
    // res.status()      设置HTTP状态码
    // res.type()        设置Content-Type的MIME类型

let server = app.listen(82, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 ", host, port)
});
























