<style lang="less" scoped>
  #header{
    position: absolute;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: #293239;
    .header-conatiner{
      position: relative;
      width: 1000px;
      height: 100%;
      margin: 0 auto;
      .links-box{
        margin: 0 auto;
        width: 80%;
        height: 100%;
        flex-flow: row;
        display: flex;
        justify-content: center;
        align-items: center;
        .links{
          padding: 4px 2px;
          color: #25bbd6;
          text-decoration: none;
          font-size: 18px;
          margin: 0 8px;
          font-weight: 600;
          border-bottom: 2px solid #293239;
          transition: all 0.2s;
          &:hover,
          &.active{
            color: #ffffff;
            border-bottom: 2px solid #ffffff;
          }
        }
      }
      .logo-box{
        position: absolute;
        left: 0;
        top: 0;
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
      <div class="logo-box">
        <img src="../assets/logo/logo2.png">
      </div>
      <div class="links-box">
        <router-link class='links' :class="{'active':pageName==='info'}" :to="{ name: 'info'}">公司简介</router-link>
        <router-link class='links' :class="{'active':pageName==='map'}" :to="{ name: 'map'}">项目分布</router-link>
        <router-link class='links' :class="{'active':pageName==='riri'}" :to="{}">项目展示</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pageName: ''
      }
    },
    watch: {
      $route: function (val, oldVal) {
        this.pageName = val.name
      }
    },
    methods: {
    },
    created () {
      this.pageName = this.$route.name
    }
  }
</script>
