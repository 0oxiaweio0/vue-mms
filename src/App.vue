<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth' // getToken from cookie
export default{
  name: 'App',
  created () {
    if (getToken()) {
      console.log('浏览器刷新动态路由配置')
      this.$store.dispatch('GenerateRoutes', this.$store.state.user.userPermissions).then(() => {
        if (this.$store.state.permission.addRouters && this.$store.state.permission.haveConfigRouter) {
          this.$router.addRoutes(this.$store.state.permission.addRouters)
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
