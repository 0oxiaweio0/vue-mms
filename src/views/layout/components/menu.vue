<template>
  <section class="fgl_leftBar">
    <ul class="fgl_max_block">
      <li class="fgl_leftBarFirst"><div class="fgl_first_none">孕产婴智慧医疗平台</div></li>
      <li :class="[$route.path.indexOf(menuItem.path)!==-1 ? 'fgl_selected':'']" v-if="!menuItem.hidden"  v-for="(menuItem,index) in leftMenus" :key="index">
        <router-link :to="menuItem.path">
          <div class="firstMenu">
            <i :class="[$route.path.indexOf(menuItem.path)!==-1?'write_font':'']" class="iconfont fgl_work_icon" v-html="menuItem.meta.icon"></i><span>{{menuItem.meta.name}}</span>
          </div>
          <ul class="secondMenu bbt" v-if="isAppendChildren(menuItem.children)">
            <li :class="[isActive($route.path,childrenItem.path) ? 'selected':'']" v-if="!childrenItem.hidden" v-for="(childrenItem,index) in menuItem.children" :key="index">
              <router-link :to="childrenItem.path">
                {{childrenItem.meta.name}}
              </router-link>
            </li>
          </ul>
        </router-link>
      </li>
    </ul>
    <ul class="fgl_min_block">
      <li class="fgl_left_first">
        <label>
          <i class="iconfont">&#xe612;</i>
        </label>
        <span></span>
      </li>
      <li menu-compile2=""  ng-class="{'fgl_selected':$route.path==menuItem.path}" v-for="(menuItem,index) in leftMenus" :key="index">
        <router-link :to="menuItem.path">
          <i :class="{'fgl_icon_color':$route.path==menuItem.path}" class="iconfont fgl_1024_icon" v-html="menuItem.meta.icon"></i><span>{{menuItem.meta.name}}</span>
          <div class="secondMenu">
            <div class="arrow-left"></div>
            <div class="subItemMenu" :class="{'selected':$route.path==menuItem.path}" v-for="(childrenItem,index) in menuItem.children" :key="index">{{childrenItem.meta.name}}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'leftMenu',
  components: {},
  computed: {
    leftMenus: function () {
      return this.$store.state.permission.modalRouters
    }
  },
  methods: {
    isActive: function (router, path) {
      let routerArray = []
      routerArray = router.split('/')
      return routerArray.some(item => item === path)
    },
    isAppendChildren: function (children) {
      let isTrue = false
      if (children && children.length > 0) {
        if (children.length === 1) {
          if (children[0].hidden) isTrue = false
        } else {
          isTrue = true
        }
      } else {
        isTrue = false
      }
      return isTrue
    }

  }
}
</script>

<style rel="stylesheet/css" scoped>
  .fgl_max_block li a{
    display: block;
    color:#6F7C8A;
  }
  .router-link-active{
    background: #59b0f1;
    color: #fff!important;
  }
  .router-link-active a{
    color: #fff!important;
  }
  .router-link-active .firstMenu i{
    color: #fff!important;
  }
  .router-link-active .secondMenu{
    display: block;
  }
  .secondMenu .router-link-exact-active{
    color: #efdd32!important;
  }
  .secondMenu li:hover{
    color: #efdd32!important;
  }
  .secondMenu li a:hover{
    color: #efdd32!important;
  }

</style>
