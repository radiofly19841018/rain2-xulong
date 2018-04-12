<style lang="less" scoped>
  #index-info{
    width: 100%;
    min-width: 1400px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    position: relative;
    .swiper-container{
      width: 100%;
      .swiper-wrapper{
        .swiper-slide{
          height: auto;
        }
      }
    }
  }

</style>

<template>
  <div id="index-info">
    <div class="swiper-container" v-swiper>
      <div class="swiper-wrapper">
        <img class="swiper-slide" src="../assets/images/banner-01.png">
        <img class="swiper-slide" src="../assets/images/banner-02.png">
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  const Swiper = require('swiper')
  export default {
    data () {
      return {
        swiper: null
      }
    },
    directives: {
      swiper: {
        inserted (el, binding, vnode) {
          vnode.context.initSlide()
        }
      }
    },
    methods: {
      initSlide () {
        this.swiper = new Swiper('.swiper-container', {
          initialSlide: 0,
          speed: 300,
          pagination: '.swiper-pagination'
        })
      }
    }
  }
</script>
