<template>
  <div class="fgl_bigCon">
    <!--header-->
    <nav-main></nav-main>
    <!--leftBar-->
    <left-menu></left-menu>
    <!--main-->
    <app-main></app-main>
  </div>
</template>

<script>
import navMain from './components/nav'
import leftMenu from './components/menu'
import appMain from './components/AppMain.vue'
export default {
  name: 'layout',
  components: {navMain, leftMenu, appMain},
  computed: {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/css" scoped>
</style>
