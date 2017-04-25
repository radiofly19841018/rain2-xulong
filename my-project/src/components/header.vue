<style lang="less" scoped>
  #header{
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #000;
  }
</style>

<template>
  <div id="header">
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
