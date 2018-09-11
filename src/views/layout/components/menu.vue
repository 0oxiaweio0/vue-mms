<template>
  <section class="fgl_leftBar">
    <ul class="fgl_max_block">
      <li class="fgl_leftBarFirst"><div class="fgl_first_none">孕产婴智慧医疗平台</div></li>
      <li  @click="goUri(permission.uri, this)" ng-class="{fgl_selected:$state.includes(permission.uri)}"  ng-repeat="permission in permissions | menu:currentModuleUri | orderBy:['-weight']:true"   >
        <div  class="firstMenu">
          <i  ng-class="{write_font:$state.includes(permission.uri)}" class="iconfont fgl_work_icon" ng-bind-html="permission.icon"></i><span>{{permission.name}}</span>
        </div>
        <ul  ng-class="{bbt:uriIsLeaf(permissions,permission.uri)}" my-show="$state.includes(permission.uri)" class="secondMenu">
          <li ng-class="{selected:$state.is(sub.uri)}" ng-click="goUri(sub.uri);$event.stopPropagation();" ng-repeat="sub in permissions | menu:permission.uri | orderBy:['-weight']:true">{{sub.name}}</li>
        </ul>
      </li>
    </ul>
    <ul class="fgl_min_block">
      <li class="fgl_left_first">
        <label>
          <i class="iconfont">&#xe612;</i>
        </label>
        <span></span>
      </li>
      <li menu-compile2=""  ng-click="goUri(permission.uri, this)" ng-class="{fgl_selected:$state.includes(permission.uri)}" ng-repeat="permission in permissions | menu:currentModuleUri | orderBy:['-weight']:true"  >
        <i ng-class="{fgl_icon_color:$state.is(permission.uri)}" class="iconfont fgl_1024_icon" ng-bind-html="permission.icon"></i><span>{{permission.name}}</span>
        <div class="secondMenu">
          <div class="arrow-left"></div>
          <div class="subItemMenu" ng-class="{selected:$state.is(sub.uri)}" ng-click="goUri(sub.uri);$event.stopPropagation();" ng-repeat="sub in permissions | menu:permission.uri | orderBy:['-weight']:true">{{sub.name}}</div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'leftMenu',
  components: {},
  computed: {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/css" scoped>
</style>
