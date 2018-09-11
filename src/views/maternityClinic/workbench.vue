<template>
  <div class="bodywrapper">
    <top-header></top-header>
    <div class="contentwrapper bgimg" style="height: 100%">
      <div class="dashboard_content " style="height: 100%">
        <div class="navmodule clearfix ">
          <div  v-for="(permission,index) in permissions" :key="index" class="menuItem animated">
            <router-link :to="permission.uri.split('app.')[1]">
              <div class="icon" :class="permission.icon"></div>
              <span>{{permission.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="contentfooter">
      <span class="left">平台版本V{{versions}}  龙源美生医疗投资（北京）有限公司</span>
      <span class="right">联系客服：4008-121-909</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'dashboard',
  data () {
    return {}
  },
  computed: {},
  methods: {
    handleDashboard () {
    }
  },
  created () {},
  destroyed () {}
}
</script>
<style rel="stylesheet/css" lang="css" scoped>

</style>
