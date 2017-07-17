<style lang="less">
*{
  box-sizing: border-box;
}
html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Microsoft Yahei", "PingFang SC", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ffffff;
}
  #app {
    position: relative;
    padding-top: 90px;
    padding-bottom: 130px;
    height: 100%;
    min-height: 600px;
  }
</style>

<template>
  <div id="app">
    <appheader></appheader>
    <router-view></router-view>
    <appfoot></appfoot>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      appheader: require('./components/header.vue'),
      appfoot: require('./components/footer.vue')
    }
  }
</script>
