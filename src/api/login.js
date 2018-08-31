import request from '@/utils/request'

export function login (postData) {
  return request({
    url: '/tokens',
    method: 'POST',
    data: postData,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
}
export function currentUser (params) {
  return request({
    url: '/users/currentUser',
    method: 'GET',
    params: params
  })
}
export function vercode (phone) {
  return request({
    url: '/vercode',
    method: 'GET',
    params: {phone: phone}
  })
}
export function logout () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}
