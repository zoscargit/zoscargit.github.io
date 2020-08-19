/** 这个文件只允许放表单验证方法 **/
//验证用户名
export function isValidNickname(rule, value, callback) {
  console.log(value);
  if (!value||(value&&value.length <= 1) ) {
    return callback(new Error('昵称太短了哦'));
  }else if (value.length > 16) {
    return callback(new Error('昵称太长了哦'));
  }
}
//验证手机号
export function isPhone(rule, value, callback) {
  if (!value) {
    return callback(new Error('输入不可以为空'));
  }
  var pattern = /^1[34578]\d{9}$/
  if(pattern.test(value)){
    return callback()
  }
  return callback(new Error('输入的手机号错误'))
}
