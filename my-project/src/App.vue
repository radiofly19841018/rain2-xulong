<style lang="less">
*{
  box-sizing: border-box;
}
html,body{
  min-height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Microsoft Yahei", "PingFang SC", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
  #app {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .page-info{
      margin: 10px 0;
      box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
      padding: 10px;
      width: 1200px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      color: #13567a;
    }
  }
</style>

<template>
  <div id="app">
    <appheader></appheader>
    <router-view class="page-info"></router-view>
    <appfoot></appfoot>
    <imgBox></imgBox>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      appheader: require('./components/header.vue'),
      appfoot: require('./components/footer.vue'),
      imgBox: require('./components/img-box.vue')
    }
  }
</script>
