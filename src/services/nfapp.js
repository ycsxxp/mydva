import request from '../utils/request';

export async function login(params) {
  return request('/api/login', {
  	method: 'post',
  	headers: {
  		'Content-Type': 'application/json'
  	},
  	body: JSON.stringify(params)
  })
}

export async function logout() {
  return request('/api/logout', {
  	method: 'post'
  })
}
