import request from '../utils/request';

export async function login() {
  return request('/api/login.php', {
  	method: 'post'
  })
}

export async function logout() {
  return request('/api/logout.php', {
  	method: 'post'
  })
}
