const getters = { // 方便store中集中处理
  token: state => state.user.token,
  user: state => state.user.user,
  userOrg: state => state.user.userOrg,
  roles: state => state.user.roles,
  permissions: state => state.user.permissions,
  watermark: state => state.user.watermark
}
export default getters
