import Axios from 'axios';

/**
 * 进行登陆操作
 * @param {name， email, password} params
 */
export const login = params => {
  return Axios.post('/lch/user/login', params);
};

/**
 * 检查用户名是否重复
 * @param {domain} params
 */
export const checkDomain = params => {
  return Axios.get('/lch/user/checkDomain', { params });
};

/**
 * 检查密码是否匹配
 * @param {name, password} params
 */
export const checkPassword = params => {
  return Axios.get('/lch/user/checkPassword', { params });
};

/**
 * 发送验证码
 * @param {email} params
 */
export const sendVerification = params => {
  return Axios.get('/lch/user/sendVerification', { params });
};

/**
 * 检查邮件地址是否已经存在
 * @param {email} params
 */
export const checkEmail = params => {
  return Axios.get('/lch/user/checkEmail', { params });
};

/**
 * 注册用户信息
 * @param {name, email, code, password} params
 */
export const addUser = params => {
  return Axios.post('/lch/user/addUser', params);
};

/**
 * 忘记密码，进行密码的修改
 * @param {email, code, password} params
 */
export const forgotPwd = params => {
  return Axios.post('/lch/user/forgotPwd', params);
}
