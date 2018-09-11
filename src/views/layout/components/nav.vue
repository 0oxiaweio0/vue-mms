<template>
  <div class="fgl_bigCon" >
    <div class="fgl_block_tips">
      <span class="fgl_logo_title"><i class="iconfont">&#xe612;</i>孕产婴智慧医疗平台</span>
      <ul class="fgl_operate_btn">
        <li @click="windowMin()"><img src="../../../assets/hospital_web/min-wind.png" alt="最小化"/></li>
        <li @click="windowMax()"><img src="../../../assets/hospital_web/enlarge.png" alt="最大化"/></li>
        <li @click="windowClose()"><img src="../../../assets/hospital_web/Close.png" alt="关闭"/></li>
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
          <p><img src="../../../assets/hospital_web/top_icon_hospital.png" alt=""/></p>
          <!--         {{secondTitle}}-->
        </div>
        <div class="fgl_headerRight">
          <span style="width: auto;margin-right: 15px;"><!--{{user.organization.name}}--></span>
          <span class="fgl_avatar_imgbox">
                    <img src="../../../assets/hospital_web/avatar.png" alt=""/>
                </span>
          <div @click="popWindow()" title="" class="fgl_headerRightName" style="cursor: pointer"><!--{{user.name}}--></div>
          <div @click="popWindow()" class="arrow-bottom arrow-bottom-position"></div>
          <div class="fgl_headerLine"></div>
          <div class="fgl_headerRightExit" @click="logout()"  style="cursor: pointer">注销</div>
        </div>
      </div>
    </section>
    <!--    <ng-include scope="false" src="'/app/tpls/blocks/popMenus.html'"></ng-include>-->
  </div>
</template>

<script>
export default {
  name: 'navMain',
  components: {},
  computed: {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/css" scoped>
</style>
