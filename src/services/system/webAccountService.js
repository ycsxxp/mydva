import request from '../../utils/request';

export async function fetchUser() {
  return request('/api/getUsers.php', {
  	method: 'post'
  })
}
