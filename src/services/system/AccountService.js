import request from '../../utils/request';

const headerType = { 'Content-Type': 'application/json' }

export async function fetchUser() {
  return request('/api/getUsers', {
  	method: 'get'
  })
}

export async function createAccount(data) {
	return request('/api/insertAccount', {
		method: 'post',
		headers: headerType,
  	body: JSON.stringify(data)
	})
}

export async function updateAccount(data) {
  return request('/api/updateAccount', {
    method: 'post',
    headers: headerType,
    body: JSON.stringify(data)
  })
}

export async function deleteAccount(data) {
  return request('/api/deleteAccount', {
    method: 'post',
    headers: headerType,
    body: JSON.stringify(data)
  })
}
