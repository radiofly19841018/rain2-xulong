<style lang="less">
  #class-mask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    overflow: hidden;
    .img-box{
      flex-shrink: 0;
      width: 700px;
      margin-bottom: 60px;
      img{
        display: block;
        margin: 15px 0;
        width: 100%;
      }
    }
    .text-box{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      color: #ffffff;
    }
  }
  
</style>

<template>
  <section id="class-mask" v-if="url !== ''" @click="closeImg">
    <div class="img-box">
      <img :src="img" v-for="img of url">
    </div>
    <div class="text-box">
      <div class="mid-text" v-for="text of info">
        {{text}}
      </div>
    </div>
  </section>  
</template>

<script>
  export default {
    data () {
      return {
        url: '',
        info: ''
      }
    },
    methods: {
      closeImg () {
        this.url = ''
        this.info = ''
      }
    },
    created () {
      this.$root.$on('showImg', (item) => {
        this.url = item.detail.url
        this.info = item.detail.info
      })
    }
  }
</script>
