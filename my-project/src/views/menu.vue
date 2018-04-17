<style lang="less">
  #menu-container{
    flex-grow: 1;
    background-image: url('../assets/images/menu-bg-o1.png');
    background-position: top center;
    background-size: 100% auto;
    background-repeat: repeat-y;
    .img-box{
      padding: 28px 0 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: flex-start;
      .item-inner{
        margin-bottom: 28px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        .item-inner-img{
          width: 400px;
          height: 300px;          
          box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
          margin-bottom: 15px;
          object-fit: cover;
        }
      }
    }
  }
</style>
<template>
  <section>
    <div id="menu-container">
      <div class="img-box">
        <template v-for="item, index of menu">
          <div class="item-inner">
            <img @click="showImg(item)" class="item-inner-img" :src="item.url">
            {{item.title}}
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
  import menu from '../scripts/menu'
  export default {
    data () {
      return {
        menu: menu || []
      }
    },
    methods: {
      showImg (item) {
        this.$root.$emit('showImg', item)
      }
    }
  }
</script>
