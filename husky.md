 Husky + Commintlint + Lint-staged
husky：Git Hook管理工具
将其安装到所在仓库的过程中它会自动在.git/目录下增加相应的钩子实现在pre-commit阶段就执行一系列流程保证每一个commit 的正确性。

https://www.e-learn.cn/topic/3353970 中
https://git-scm.com/docs/githooks 英

# 使用流程 
  npx npm命令,建议v7,不同npm可能命令不同 实在不会就手动复制一份(存疑)
npm install husky --save-dev 安装

npx husky install // 安装husky 开启git hooks,会创建.husky/_/*文件夹    跟.git同级,core.hooksPath来设置
  npx husky uninstall  // 卸载
  npm set-script prepare "husky install" 手动把命令设置到package
 
npx husky add .husky/pre-commit "npx --no-install lint-staged"   // 新增hook.  husky add <file> [cmd]
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
    npx husky set pre-commit check-file // 设置、修改hook. husky set <file> [cmd]
  echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js  // 注意编码问题 utf-8才行

配置好钩子后，再去配置钩子命令里使用到的工具 commitlint.config.js eslint(.eslintrc.js) style-lint(.stylelintrc.js) .prettierrc.js
  
# 常见报错

## 放在husky里
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

#npm test
#自定义命令，手动添加
npm run lint:eslint // 得在package.script里有这个命令
npm run lint:stylelint
---

# 这个是采用线上的
#npx --no-install commitlint --edit $1

#这个是采用 依赖包里面的 node_modules
./my-new-app/node_modules/.bin/commitlint --edit
## 

# 常见钩子
  pre-commit(预先提交) git commit调用. 检查即将提交的快照.如果该钩子以非零值退出,Git将放弃此次提交
  prepare-commit-msg 启动提交信息编辑器之前,默认信息被创建之后运行. 它允许你编辑提交者所看到的默认信息
  commit-msg(提交信息) git commit和git merge调用. 接收一个参数,此参数存有当前提交信息的临时文件的路径. 如果该钩子脚本以非零值退出,Git将放弃提交
  post-commit：该钩子一般用于通知之类的事情。
    git commit -m "提交日志!" --no-verify 绕过钩子
#  package

 "lint-staged": {
    "src/**/*.{less,scss,css}": [
      "stylelint --fix --syntax=less",
      "git add ."
    ],
    "src/**/*.{js,ts,tsx,vue}": [
      "eslint ./src  --ext .js,.tsx,.ts,.vue --cache --fix",
      "git add ."
    ]
  },
  "prepare": "husky install" // npm下载后运行、进行安装husky

// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  }
}


# commitlint.config.js