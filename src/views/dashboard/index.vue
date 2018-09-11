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
import topHeader from '@/components/topHeader/index'
import { objectArraySort } from '@/utils/commonfn'
export default {
  components: {topHeader},
  name: 'dashboard',
  data () {
    return {
      versions: this.$store.state.configs.version
    }
  },
  filters: {
  },
  computed: {
    permissions: function () {
      let permissionsArray = this.$store.state.user.userPermissions
      let puri = null
      let pathName = this.$route.name
      function permissionsFun (menus, puri) {
        if (menus) {
          return menus.filter(function (item) {
            if (pathName === 'app.dashboard') {
              if (item.puri === '') {
                return true
              }
            } else {
              puri = puri || pathName
              var reg = new RegExp(puri + '\\.[A-Za-z0-9]+$')
              if (item.uri.indexOf(puri) !== -1 && reg.test(item.uri) && item.type === 1) {
                return true
              }
            }
          })
        }
      }
      return objectArraySort(permissionsFun(permissionsArray, puri), 'weight', 'up')
    }
  },
  methods: {
    handleDashboard () {
    }
  },
  created () {
    this.$store.dispatch('GenerateRoutes', this.$store.state.user.userPermissions).then(() => {
      if (this.$store.state.permission.addRouters && this.$store.state.permission.haveConfigRouter) {
        this.$router.addRoutes(this.$store.state.permission.addRouters)
        console.log('用户动态路由配置成功')
      }
    }).catch(function (err) {
      console.log(err)
    })
  },
  destroyed () {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>
<style rel="stylesheet/css" lang="css" scoped>
  .bgimg {
    background-image: url('../../assets/dashboard/BG_long@2x.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .dashboard_content {
    width: 1200px;
    margin: 0 auto;
  }
  .navmodule {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    padding-bottom: 110px;
  }
  .menuItem {
    display: inline-block;
    height: 180px;
    width: 140px;
    cursor: pointer;
    margin: 108px 50px 0;
  }
  .animated {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .menuItem .icon {
    height: 140px;
    width: 140px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    border-radius: 21px;
    box-shadow: 0 5px 15px 0 #6a90c0;
    background-color: #53afea;
  }
  .menuItem span {
    width: 140px;
    text-align: center;
    display: inline-block;
    margin-top: 15px;
    font-size: 18px;
    color: rgb(102, 102, 102);
  }
  .contentfooter {
    height: 36px;
    line-height: 36px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    font-size: 14px;
    color:rgb(102, 102, 102);
  }
  .contentfooter span.left {
    margin-left: 30px;
    float: left;
  }
  .contentfooter span.right {
    margin-right: 30px;
    float: right;
  }
</style>
