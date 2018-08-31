<template>
  <div class="bodywrapper" ng-controller="DashboardCtrl">
 <!--   <div ng-include="'/app/tpls/blocks/topHeader.html'"></div>-->
    <div class="contentwrapper bgimg" style="height: 100%">
      <div class="dashboard_content " style="height: 100%">
<!--        <div class="navmodule clearfix " ng-class="{'text-align-new':(permissions | menu | orderBy:['-weight']:true).length<5}">
          <div ng-click="setCurrentModule(permission.uri)"  ng-repeat="permission in permissions | menu | orderBy:['-weight']:true" ui-sref="{{permission.uri}}.index" class="menuItem animated">
            <div class="icon {{permission.icon}}"></div>
            <span>{{permission.name}}</span>
          </div>
        </div>-->
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
  components: { },
  name: 'dashboard',
  data () {
    return {
      versions: this.$store.state.configs.version
    }
  },
  methods: {
  },
  created () {
  },
  destroyed () {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>
<style rel="stylesheet/css" lang="css" scoped>

</style>
