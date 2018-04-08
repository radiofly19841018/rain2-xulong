<style lang="less">
  #menu-container{
    flex-grow: 1;
    background-image: url('../assets/images/menu-bg-o1.png');
    background-position: top center;
    background-size: 100% auto;
    background-repeat: repeat-y;
    .item-row{
      display: flex;
      margin-bottom: 30px;
      padding: 10px;
      &:nth-of-type(2n+1){
        justify-content: flex-start;
      }
      &:nth-of-type(2n){
        justify-content: flex-end;
      }
      .item-inner{
        &:first-of-type{
          margin-right: 50px;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        .item-inner-img{
          box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
          height: 220px;
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
<template>
  <section>
    <div id="menu-container">
      <template v-for="item, index of menu">
        <div class="item-row" v-if="index % 2 === 0">
          <div class="item-inner">
            <img @click="showImg(item)" class="item-inner-img" :src="item.url">
            {{item.title}}
          </div>
          <div class="item-inner" v-if="index < menu.length">
            <img @click="showImg(menu[index+1])" class="item-inner-img" :src="menu[index+1].url">
            {{menu[index+1].title}}
          </div>
        </div>
      </template>
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
