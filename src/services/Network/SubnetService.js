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
