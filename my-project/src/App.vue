<style lang="less">
*{
  box-sizing: border-box;
}
html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  #app {
    position: relative;
    padding-top: 50px;
    height: 100%;
  }
</style>

<template>
  <div id="app">
    <appheader></appheader>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      appheader: require('./components/header.vue')
    }
  }
</script>
