<style lang="less" scoped>
  #footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #2a2d34;
    .footer-conatiner{
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
  <div id="footer">
    <div class="footer-conatiner">
      <router-link class='links' :to="{ name: 'map'}">To Map</router-link>
      <router-link class='links' :to="{ name: 'info'}">To Info</router-link>
      <div class="logo-box">
        <img src="../assets/logo/logo2.svg" v-on:mouseover="showMenu">
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
