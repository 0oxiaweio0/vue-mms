const getters = { // 方便store中集中处理
  token: state => state.user.token,
  user: state => state.user.user,
  userOrg: state => state.user.userOrg,
  roles: state => state.user.roles,
  userPermissions: state => state.user.userPermissions,
  watermark: state => state.user.watermark,
  constantRouterMap: state => state.permission.constantRouterMap,
  routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  haveConfigRouter: state => state.permission.haveConfigRouter,
  modalRouters: state => state.permission.modalRouters,
  modalType: state => state.permission.modalType
}
export default getters
