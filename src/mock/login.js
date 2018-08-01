import Mock from 'mockjs'

Mock.mock(/\/auth\/login/, 'post', () => ({
  code: 1000,
  message: '',
  data: Mock.mock({
    'userName|1': 'admin',
    'sex|1': ['男', '女']
  })
}))
