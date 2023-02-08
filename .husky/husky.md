# husky：Git Hook 管理工具

- 将其安装到所在仓库的过程中它会自动在.git/目录下增加相应的钩子实现在 pre-commit 阶段就执行一系列流程保证每一个 commit 的正确性\*
  [中](https://www.e-learn.cn/topic/3353970) [英](https://git-scm.com/docs/githooks)

### 使用流程

- npm install husky --save-dev 安装

- npx husky install // 安装 husky 开启 git hooks,会创建.husky/\_/\*文件夹 跟.git 同级,使用 core.hooksPath 来设置

  - npx husky uninstall // 卸载
  - npm set-script prepare "husky install" 手动把命令设置到 package

- npx husky add .husky/pre-commit "npx --no-install lint-staged" // 新增 hook. husky add <file> [cmd]
- npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'

  - npx husky set pre-commit check-file // 设置、修改 hook. husky set <file> [cmd]
  - npx npm 命令,建议 npm7,不同 npm 可能命令不同 实在不会就手动复制一份

- echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js // 添加 commitlint 插件配置 注意编码问题,utf-8 才行

- 配置 hook 命令 commitlint.config.js eslint(.eslintrc.js) style-lint(.stylelintrc.js) .prettierrc.js

### 常见钩子

- pre-commit(预先提交) git commit 调用. 检查即将提交的快照.如果该钩子以非零值退出,Git 将放弃此次提交
- prepare-commit-msg 启动提交信息编辑器之前,默认信息被创建之后运行. 它允许你编辑提交者所看到的默认信息
- commit-msg(提交信息) git commit 和 git merge 调用. 接收一个参数,此参数存有当前提交信息的临时文件的路径. 如果该钩子脚本以非零值退出,Git 将放弃提交
- post-commit 该钩子一般用于通知之类的事情。
  git commit -m "提交日志!" --no-verify 绕过钩子

### package.json

```json {.line-numbers highlight=2}
  "lint": "eslint --fix src",
  "lint:lint-staged": "lint-staged -c ./.husky/lint-staged.config.js",
  "lint:style": "stylelint --fix ./**/*.{scss,css,vue} --custom-syntax",
  "eslint:fix": "eslint --fix --ext .js,.jsx,.ts,.tsx,.vue src/",
  "stylelint:fix": "stylelint ./src/**/*.{vue,css,scss} --fix",
  "check:tsc": "vue-tsc --noEmit --skipLibCheck",
  "prepare": "husky install"
```
