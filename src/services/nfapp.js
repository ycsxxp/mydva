import request from '../utils/request';

export async function login() {
  return request('/api/login.php')
}
