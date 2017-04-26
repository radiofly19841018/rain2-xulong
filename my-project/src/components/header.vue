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
      .logo-box{
        float: left;
        padding: 3px;
        margin-top: 10px;
        background-color: #eeeeee;
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
        <img src="../assets/logo.png">
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
    }
  }
</script>
