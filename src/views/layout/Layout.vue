<template>
  <div class="fgl_bigCon" >
    <div class="fgl_block_tips">
      <span class="fgl_logo_title"><i class="iconfont">&#xe612;</i>孕产婴智慧医疗平台</span>
      <ul class="fgl_operate_btn">
        <li @click="windowMin()"><img src="../../assets/hospital_web/min-wind.png" alt="最小化"/></li>
        <li @click="windowMax()"><img src="../../assets/hospital_web/enlarge.png" alt="最大化"/></li>
        <li @click="windowClose()"><img src="../../assets/hospital_web/Close.png" alt="关闭"/></li>
      </ul>
    </div>
    <div class="fgl_left_big_icon">
        <span class="fgl_logo_warp">
            <i class="iconfont fgl_logo_icon">&#xe612;</i>
        </span>
    </div>
    <!--header-->
    <section class="fgl_header">
      <div class="fgl_herder_main">
        <div class="fgl_headerLeft">
          <span  style="cursor: pointer" @click="backup()" ><i class="iconfont" style="font-size:27px; ">&#xe60f;</i></span>
          <div class="fgl_headerLine"></div>
          <p><img src="../../assets/hospital_web/top_icon_hospital.png" alt=""/></p>
 <!--         {{secondTitle}}-->
        </div>
        <div class="fgl_headerRight">
          <span style="width: auto;margin-right: 15px;"><!--{{user.organization.name}}--></span>
          <span class="fgl_avatar_imgbox">
                    <img src="../../assets/hospital_web/avatar.png" alt=""/>
                </span>
          <div @click="popWindow()" title="" class="fgl_headerRightName" style="cursor: pointer"><!--{{user.name}}--></div>
          <div @click="popWindow()" class="arrow-bottom arrow-bottom-position"></div>
          <div class="fgl_headerLine"></div>
          <div class="fgl_headerRightExit" @click="logout()"  style="cursor: pointer">注销</div>
        </div>
      </div>
    </section>
<!--    <ng-include scope="false" src="'/app/tpls/blocks/popMenus.html'"></ng-include>-->

    <!--leftBar-->
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
    <app-main></app-main>
  </div>
</template>

<script>
export default {
  name: 'layout',
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/css" scoped>
</style>
