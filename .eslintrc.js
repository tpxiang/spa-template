module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 0,
    'consistent-return': 0,
    'import/extensions': 0,
    'no-unused-expressions': 0,
    'semi': [2, 'never'],
    'import/no-extraneous-dependencies': 0,
    'comma-dangle': [2, 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}