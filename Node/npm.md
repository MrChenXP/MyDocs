 Express 框架核心特性：
     可以设置中间件来响应 HTTP 请求。
     定义了路由表用于执行不同的 HTTP 请求动作。
     可以通过向模板传递参数来动态渲染 HTML 页面。
测试npm是否成功安装 npm -v
升级npm   npm install npm -g
1. 初始化node项目
	npm init （cmd上写）
        --package name: (node) 项目的名称 （默认名称）(项目名称不能与要安装的模块名一样)
        --version: (1.0.0) 当前版本
        description: 项目的描述
        entry point: (ejs.js) 入口名称
        test command:  测试命令
        git repository: 使用git
        keywords: 项目的关键字
        author: 项目的作者
        license: (ISC)  开源协议
     生成package.json -- 此文件时项目描述
2. 建立入口文件（ejs.js）
3. 使用npm安装express框架
    (node_modules 用来存放项目中所需要node模块（库）)
	局部安装：（只会在当前项目中安装，一般只用来安装所需要的模块）
	    安装模块的命令  (npm install <模块的名称>)
        npm install express             --下载 express 模块 (有50多个文件，因为express模块还依赖了一些其他模块)
        npm install xxx xxx             --下载多个模块
        npm install express --save      --下载并安装模板并写到packge.json文件中 dependencies节点中
        npm install                     --安装项目中所依赖的模块
        npm install express --save-dev  --开发环境所需要的依赖  devDependencies
        npm install xxx @x.x.x 下载指定版本
        简写 npm i
	全局安装(一般安装工具类)     npm i -g <模块名称>
	查看已安装的模块             npm list xxxx       (npm list express)
	查看已安装的全局模块         npm list -g 或者 npm list -g --depth 0
	卸载模块                    npm uninstall [-g] express
  更新模块                    npm update express
	搜索模块                    npm search express
	发布模块                    npm publish
	本地安装
        1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
        2. 可以通过 require() 来引入本地安装的包。
    全局安装
        1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
        2. 可以直接在命令行里使用 如在cmd里直接输入 express
4.使用淘宝 NPM 镜像
    先使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm
        npm install -g cnpm --registry=https://registry.npm.taobao.org
    在使用原来的npm命令
        cnpm install [name]
5."scripts" 脚本文件 start:node app.js 在cmd使用npm run start后悔运行此行代码
        服务器入口文件

6.nodemon 该模块可以让代码改动后自动重启服务器 要全局安装 然后使用nodemon xxx来执行入口文件
    或者把 nodemon xxx 写入scripts的start中去 在运行npm run start

yarn
  yarn init    初始化一个新的项目
    添加一个依赖包 (全局：global)
    yarn add [package]
    yarn add [package]@[version]
    yarn add [package]@[tag]
    更新一个依赖包
    yarn upgrade [package]
    yarn upgrade [package]@[version]
    yarn upgrade [package]@[tag]
    删除一个依赖包  yarn remove [package]
    安装所有的依赖包  yarn  ||  yarn install
    显示 yarn bin 目录的位置   yarn bin
    列出已安装的包   yarn list
    全局命令 yarn global [add|bin|ls|remove|upgrade] [flags]
request对象
	-- 用来获取数据
		params 地址后面的参数
		query 用来获取get请求的参数
		body 用来post的参数  （要使用body-parser插件配置urlencoded）



response对象
	-- 用来响应数据

	send() 用来响应数据 并且响应的数据会进行转义
	sendFile() 用来返回一个文件的数据， 数据会进行转义
	res.redirect() 请求重定向
	res.json() 用来返回json格式的数据 

	res.jsonp() 允许使用jsonp的方式跨域访问
	res.render()  返回一个视图模板




Router对象
	--用来管理路由

	通过express.Router()

	router对象写每个路由

	app.use('子路由',router对象)

	app.use(router对象)


ejs模板
 	npm i ejs --save

 	在node项目中配置ejs
 	app.set('view engine','ejs')
	app.set('views',path.join(__dirname,'views'))

	在路由中使用render方法响应
	参数1，模板名称
	参数2，需要响应的数据





