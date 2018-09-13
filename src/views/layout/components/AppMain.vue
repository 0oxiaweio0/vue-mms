<template>
  <section class="app-main">
<!--    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>-->
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>
<style rel="stylesheet/css" scoped>
  .app-main{

  }
</style>
