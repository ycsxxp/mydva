import request from '../../utils/request'

const headerType = { 'Content-Type': 'application/json' }

export async function subnetList() {
  return request('/api/subnetList', {
  	method: 'get'
  })
}

export async function createSubnet(data) {
	return request('/api/createSubnet', {
		method: 'post',
		headers: headerType,
  	body: JSON.stringify(data)
	})
}

export async function updateSubnet(data) {
	return request('/api/updateSubnet', {
		method: 'post',
		headers: headerType,
  	body: JSON.stringify(data)
	})
}

export async function deleteSubnet(data) {
	return request('/api/deleteSubnet', {
		method: 'post',
		headers: headerType,
  	body: JSON.stringify(data)
	})
}
