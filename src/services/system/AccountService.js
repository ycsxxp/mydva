import request from '../../utils/request';

export async function fetchUser() {
  return request('/api/getUsers', {
  	method: 'get'
  })
}

export async function createAccount(data) {
	return request('/api/insertAccount', {
		method: 'post',
		headers: {
  		'Content-Type': 'application/json'
  	},
  	body: JSON.stringify(data)
	})
}
