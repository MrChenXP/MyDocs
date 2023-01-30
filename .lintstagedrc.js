module.exports = {
  '*.vue': ['stylelint --cache --fix --allow-empty-input', 'eslint --cache --fix'],
  '*.{scss,css}': 'stylelint --cache --fix --allow-empty-input',
  '*.{js,jsx,ts,tsx}': 'eslint --cache --fix',
};
