<style lang="less" scoped>
  #header{
    position: absolute;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: #2a2d34;
    .header-conatiner{
      width: 1000px;
      margin: 0 auto;
      .links{
        color: #ffffff;
        text-decoration: none;
      }
      .logo-box{
        float: left;
        padding: 3px;
        margin-top: 10px;
        border-radius: 4px;
        img{
          display: block;
          height: 60px;
        }
      }
    }
  }
</style>

<template>
  <div id="header">
    <div class="header-conatiner">
      <router-link class='links' :to="{ name: 'map'}">项目分部</router-link>
      <router-link class='links' :to="{ name: 'info'}">公司简介</router-link>
      <div class="logo-box">
        <img src="../assets/logo/logo2.png" v-on:mouseover="showMenu">
      </div>
    </div>
    {{mms}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mms: '222'
      }
    },
    methods: {
      showMenu () {
        console.log('11111')
      }
    }
  }
</script>
