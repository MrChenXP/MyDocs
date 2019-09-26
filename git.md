### [git线上文档](https://www.runoob.com/git/git-tutorial.html)
### [md线上文档](https://www.jianshu.com/p/191d1e21f7ed)
## 初始化仓库
   `git init`   (把这个目录变成Git可以管理的仓库) (空的仓库empty Git repository)
   `git init 目录名`   在指定目录下新建git仓库

## git配置(config)
   - 适用系统中所有用户的配置 低
      `git config --system 其他命令`   读写的是'Git安装目录/etc/gitconfig'文件
   - 只适用某用户配置 中
      `git config --global 其他命令`  ( $HOME 变量指定的目录)用户宿主目录下的~/.gitconfig 宿主目录：C:\Users\xiong
   - 只适用当前仓库的配置 高
      `git config 其他命令`   仓库目录中的 .git/config 文件
   - 设置用户名和邮箱
      `git config --global user.name "英文用户名"  `
      `git config --global user.email "邮箱"`
   - 查看所有配置信息       `git config --list` 重复的变量名,说明来自不同的配置文件
   - 查阅某个特定环境变量的设定 `git config 变量名`
   - 更改文本编辑器         `git config core.editor 编辑器名` 一般默认使用Vi或者Vim,也有Emacs等可进行更换
   - 更改差异分析工具       `git config merge.tool 工具名`  kdiff3,tkdiff,meld,xxdiff,emerge,vimdiff,gvimdiff等

## 基本操作
   - 创建一个空目录         `mkdir 文件名`
   - 打开目录               `cd 文件名`
   - 显示当前目录           `pwd`
   - 创建 README.md 文件并写入内容   `echo "# 菜鸟教程 Git 测试" >> README.md`
   - 显示隐藏的.git文件     `ls -ah`
   - 查看仓库状态           `git status`
   - 显示目录或文件列表     `ls`
   - 将文件内容打印显示     `cat 文件名`
## 管理使用
   - 将文件(夹)纳入版本控制(仓库管理,对文件(夹)进行跟踪)   
      `git add 文件名 又一个文件名`   没有任何显示，这就对了
      `git add *.c`        当前目录下所有.c后缀的文件纳入版本控制
      `git add .`          添加当前项目的所有文件
   - 提交(将工作空间的修改提交到本地库)   ` git commit -m '备注'`   每一次提交代码前一定要提交文件
   - 查看提交日志           `git log`
   - 回滚上一个版本         `git reset --hard HARD^`
   - 处理冲突(合并代码)     `git pull`
   - 回滚指定版本           `git reset --hard id`   可以恢复在版本库删除的文件
   - 查看回滚记录           `git reflog`
   - 查看工作区删除的文件   `git checkout`
   - 恢复文件              `git checkout 文件名`   在工作区删除的文件
   - 在版本库删除文件       `git rm 文件名(夹)`    不能恢复,工作区也被删除
   - 强制删除              `git rm -f 文件名(夹)`   如果删除前修改过且已经放到暂存区域的话
   - 删除版本控制          `git rm --cached 文件名(夹)`   文件从暂存区域移除,但仍保留在当前工作目录中
   - 移动或重命名一个文件、目录、软连接   `git mv 原文件名 新文件名`   工作区和暂存区都会修改
   - 修改文件或者目录的时间属性   `touch file`   修改file时间属性,包括存取时间和更改时间,如file不存在,将创建新的空白文件

## 分支
   - 创建分支              `git branch 分支名称`
   - 查看分支              `git branch 分支名称`   master:主分支
   - 切换分支              `git checkout <分支名称>`
   - 创建并且切换          `git checkout -b <分支名称>`
   - 合并分支              `git merge <分支名称>`
   - 删除分支              `git branch -d <分支名称>`

## 标签
   - 添加一个带注解的标签  `git tag -a 标签名`   -a就是加上注解
   - 看到我们的标签        `git log --decorate`
   - 给特定版本加上标签    `git tag -a 标签名 版本号`
   - 查看所有标签          `git tag`
   - 指定标签信息命令      `git tag -a <tagname> -m "runoob.com标签"`
   - PGP签名标签命令       `git tag -s <tagname> -m "runoob.com标签"`

## 远程使用Github
   - 1. 生成公钥           `ssh-keygen -t rsa -C 'github上注册的邮箱'` 然后将公钥加入github
   - 2. 查看是否验证成功   `ssh -T git@github.com`   You've successfully authenticated 成功
   - 3. 添加远程仓库       `git remote add origin git地址`
   - 删除远程仓库          `git remote rm origin(远程名)`
   - 查看当前有哪些远程库  `git remote`   `git remote -v` 以看到每个别名的实际链接地址
   - 推送                 `git push -u origin(远程名) master(分支名)`   把本地代码推送到远程仓库,要先提交到本地
   - 克隆                 `git clone git地址`   将远程库的代码拷贝到本地   若不用远程的项目名,可再后面加自己的文件夹名   加个.代表在当前目录下创建项目
   - 拉取                  `git pull origin(远程名) master(分支名)`   从远程获取最新版本到本地并自动合并merge   --allow-unrelated-history合并两个独立启动仓库
   - 获取                  `git fetch`   从远程获取最新版本到本地不会自动合并merge

## 高级
   1. 显示文件
      - `ls -1`   每行列出一个文件，即以单列形式列出
      - `ls -a`   列出所有文件，包括隐藏文件
      - `ls  -la`  所有文件的长格式列表（含权限、所有权、大小和修改日期）
      - `ls -lh`  使用人可读单位（KB，MB，GB）显示大小的长格式列表
      - `ls -lS`  按大小排序的长格式列表（降序）。
      - `ls -ltr` 按大小排序的长格式列表（降序）
   2. 查看仓库状态
      - `git status -s`     查看简短的状态内容
      - `git diff`          查看详细信息,一行一行地显示
      - `git diff`          尚未缓存的改动：
      - `git diff --cached` 查看已缓存的改动： 
      - `git diff HEAD`     查看已缓存的与未缓存的所有改动：
      - `git diff --stat`   显示摘要而非整个 
   3. 查看提交日志
      - `git log --oneline`   查看简短的状态内容
      - `git log --graph`     查看历史中什么时候出现了分支、合并
      - `git log --reverse`   逆向显示所有日志
      - `git log --author=Linus`   查找指定用户(Linus)的提交日志
      - `--since --before --until --after`   指定日期
   4. 打印显示
      - `cat 文件名1 文件名2> 文件名`   将多个文件合并到目标文件中
      - `cat 文件名1 文件名2 >> 文件名`   将几个文件附加到目标文件中
   5. 移动或重命名文件和目录
      
      - `mv file1.txt file2`   将file1文本移动到file2目录
   5. 忽略不需要管理的文件  
      > - 建立一个.gitignore 文件，在这个文件中写不需要管理的路径 如 /.idea/.gitignore
      > - 如创建.gitignore文件前就push了某一文件,那即使在.gitignore文件写入过滤该文件的规则,该规则也不会起作用,git仍然会对该文件进行版本管理. git对于.gitignore配置文件是按行从上到下进行规则匹配的
      > - 以斜杠“/”开头表示目录 以星号“*”通配多个字符 以问号“?”通配单个字符 以方括号“[]”包含单个字符的匹配列表 以叹号“!”表示不忽略(跟踪)匹配到的文件或目录
   6. config配置
      - `git config --local -l`   查看当前仓库配置,必须进入仓库目录下
      - `git config --global -l`  查看用户配置
      - `git config --system -l`  查看系统配置
      - `git config -l`   查看所有的配置信息,依次是系统级别、用户级别、仓库级别
      - `git config [--local|--global|--system] --add section.key value`   增加配置项,例git config –add cat.name tom
      - `git config [--local|--global|--system] --get section.key`   获取一个配置项git config --get cat.name
      - `git config [--local|--global|--system] --unset section.key`   删除一个配置项
      - `git config --global http.proxy http://127.0.0.1:1080`   配置代理
      - `git config --global http.proxy https://username:password@proxy.baidu.com:8080`   要密码的配置
      - `git config --global --unset http.proxy`   取消代理
      - `git config core.ignorecase false`   忽略大小写
   7. 编辑器命令
      - `Esc`   退出输入模式进入命令行模式也是系统默认模式
      - `o,i,a`   都可以进入输入模式
      - `ZZ,:wq`   在命令模式下,保存修改并且退出
      - `:w`   只保存文件,回车后底行会提示写入操作结果,并保持停留在命令模式
      - `:q!`   在命令模式下,放弃所有修改并退出
      - `:e!`   在命令模式下,放弃所有文件修改但不退出，即回退到文件打开后，最后一次保存操作的状态