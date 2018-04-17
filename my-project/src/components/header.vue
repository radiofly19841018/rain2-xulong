<style lang="less" scoped>
  #header{
    flex: 0;
    flex-shrink: 0;
    width: 100%;
    height: 80px;
    background-color: #293239;
    .header-conatiner{
      position: relative;
      width: 1400px;
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
      .old-page{
        position: absolute;
        right: 0;
        top: 0;
        padding: 5px;
        margin-top: 20px;
        color: #25bbd6;
        &:hover{
          color: #ffffff;
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
        <router-link class='links' :class="{'active':pageName==='index'}" :to="{ name: 'index'}">首页</router-link>
        <router-link class='links' :class="{'active':pageName==='info'}" :to="{ name: 'info'}">公司简介</router-link>
        <router-link class='links' :class="{'active':pageName==='map'}" :to="{ name: 'map'}">项目分布</router-link>
        <router-link class='links' :class="{'active':pageName==='menu'}" :to="{ name: 'menu'}">项目展示</router-link>
      </div>
      <a class="old-page" href="xl/">旭龙游乐</a>
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
