<template>
  <div class="fgl_bigCon" >
    <!--header-->
    <nav-main></nav-main>
    <!--leftBar-->
    <left-menu></left-menu>
    <app-main></app-main>
  </div>
</template>

<script>
import navMain from './components/nav'
import leftMenu from './components/menu'
export default {
  name: 'layout',
  components: {navMain, leftMenu},
  computed: {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/css" scoped>
</style>
