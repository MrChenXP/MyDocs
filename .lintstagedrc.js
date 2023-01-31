// linlint-staged 要运行的命令 不能为空，设置了什么lint就得装什么lint包
module.exports = {
  '*.vue': ['stylelint --cache --fix --allow-empty-input', 'eslint --cache --fix'],
  '*.{scss,css}': 'stylelint --cache --fix --allow-empty-input',
  '*.{js,jsx,ts,tsx}': 'eslint --cache --fix', // 
};

