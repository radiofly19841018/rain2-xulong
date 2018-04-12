<style lang="less" scoped>
  #footer{
    flex: 0;
    flex-shrink: 0;
    width: 100%;
    height: 120px;
    background-color: #293239;
    .footer-conatiner{
      width: 1400px;
      margin: 0 auto;
      padding-top: 10px;
      color: #25bbd6;
      text-align: center;
      font-size: 0;
      .company-info{
        display: inline-block;
        font-size: 14px;
        &.info-half{
          padding: 0 20px;
          width: 49%;
        }
        &.info-all{
          width: 100%;
          p{
            margin-top: 0;
          }
        }
        &.left{
          text-align: right;
        }
        &.right{
          text-align: left;
        }
        p{
          padding: 0;
          margin: 4px 0;
        }
      }
      .links{
        text-decoration: underline;
        color: #25bbd6;
        &:hover{
          color: #ffffff;
        }
      }
    }
  }
</style>

<template>
  <div id="footer">
    <div class="footer-conatiner">
      <div class="company-info info-half left">
        <p>地    址：陕西省西安市雁塔区电子正街379号圣都大厦1209</p>
        <p>电    话：029-88240587, 13609110891</p>
        <p>邮    编：710065</p>
      </div>
      <div class="company-info info-half right">
        <p>电子邮件：zhangzhiyong1961@126.com</p>
        <p>传    真：029-88250570</p>
        <p>联 系 人：张志勇</p>
      </div>
      <div class="company-info info-all">
        <p><a href="http://www.sino-dragon.com" class="links">网    址：www.sino-dragon.com</a></p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
