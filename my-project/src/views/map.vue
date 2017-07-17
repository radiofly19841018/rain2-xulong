<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .amap-info-content{
    text-align: center;
    padding-right: 25px;
    img{
      width: 200px;
    }
  }
  .amap-info-close{
    top: 11px;
  }
</style>
<style lang="less" scoped>
  #map-container{
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    height: 100%;
    width: 1000px;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
    #map{
      height: 100%;
      width: 100%;
    }
  }
</style>

<template>
  <div id="map-container">
    <div id="map">
    </div>
  </div>
</template>

<script>
/* global AMap */
  export default {
    name: 'map',
    data () {
      return {
        locations: [
          {name: '上海科技馆', location: ['121.542492', '31.219134'], info: 'AV乐园、地壳探秘(全息音响)', image: require('../assets/images/logo2.png'), time: '2002.03'},
          {name: '深圳欢乐谷', location: ['113.980847', '22.541575'], info: '金矿听音室', image: require('../assets/images/logo2.png'), time: '2002.04'},
          {name: '山东科技馆', location: ['117.026406', '36.661398'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2003.10'},
          {name: '温州科技馆', location: ['120.700537', '27.988484'], info: '全息音响、磁悬浮广场等展品6套', image: require('../assets/images/logo2.png'), time: '2004.09'},
          {name: '河北科技馆', location: ['114.525239', '38.04211'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2005.09'},
          {name: '东莞科技馆', location: ['113.746581', '23.009504'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2005.10'},
          {name: '郑州科技馆', location: ['113.627088', '34.7459'], info: '全息音响、水与力展区、螺之美展区、二层改造、力学展区', image: require('../assets/images/logo2.png'), time: '2005.11,2008.06,2010.10,2010.11,2011.06'},
          {name: '广东科学中心', location: ['113.362506', '23.03941'], info: '参加展品征集活动获3等奖', image: require('../assets/images/logo2.png'), time: '2005.12'},
          {name: '四川科技馆', location: ['104.065791', '30.659908'], info: '全息音响、信息科技长廊等', image: require('../assets/images/logo2.png'), time: '2006.02'},
          {name: '贵州科技馆', location: ['106.705514', '26.573161'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2006.10'},
          {name: '大庆市科技馆', location: ['125.09061', '46.582371'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2007.12'},
          {name: '陕西自然博物馆', location: ['108.946596', '34.195913'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2007.12'},
          {name: '新疆科技馆', location: ['87.577945', '43.83416'], info: '地震体验、戏水乐园、怒发冲冠等', image: require('../assets/images/logo2.png'), time: '2008.06'},
          {name: '天津科技馆', location: ['117.218384', '39.087285'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2008.06'},
          {name: '余杭科技馆', location: ['120.294823', '30.424863'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2008.09'},
          {name: '芜湖科技馆', location: ['118.373879', '31.383058'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2008.11'},
          {name: '上海华侨城欢乐谷', location: ['121.214767', '31.096097'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2009.07'},
          {name: '浙江省科技馆', location: ['120.164936', '30.276404'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2009.08'},
          {name: '青海省科技馆', location: ['101.714029', '36.64654'], info: '全息音响等', image: require('../assets/images/logo2.png'), time: '2009.09'},
          {name: '临沂市科技馆', location: ['118.356532', '35.087249'], info: '全息音响等', image: require('../assets/images/logo2.png'), time: '2010.02'},
          {name: '山西清徐科技馆', location: ['112.567436', '37.796127'], info: '视听乐园、数学天地展区', image: require('../assets/images/logo2.png'), time: '2010.03'},
          {name: '威海科技馆', location: ['122.140613', '37.467507'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2010.10'},
          {name: '陕西科技馆', location: ['108.956208', '34.263969'], info: '人体反应测试', image: require('../assets/images/logo2.png'), time: '2012.01'},
          {name: '榆林科技馆', location: ['109.750553', '38.235483'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2012.05'},
          {name: '河南永城科技馆', location: ['116.45701', '33.947551'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2012.09'},
          {name: '上海崇明科技馆', location: ['121.429906', '31.618665'], info: '一层及二层展品', image: require('../assets/images/logo2.png'), time: '2013.06'},
          {name: '克拉玛依科技馆', location: ['84.88786', '45.571006'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2014.08'},
          {name: '深圳锦绣中华', location: ['113.988217', '22.531084'], info: '茶马锅庄听音室', image: require('../assets/images/logo2.png'), time: '2015.09'},
          {name: '宜兴科技馆', location: ['119.851664', '31.356026'], info: '全息音响', image: require('../assets/images/logo2.png'), time: '2016.08'}
        ],
        map: null,
        infoWindow: null
      }
    },
    methods: {
      openInfoWindow (click) {
        this.infoWindow.setContent(click.target.content)
        this.infoWindow.open(this.map, click.target.getPosition())
      }
    },
    mounted () {
      this.infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(10, -25)
      })
      this.map = new AMap.Map('map')
      this.map.setZoom(4)
      this.map.setMapStyle('normal')

      for (let location of this.locations) {
        let marker = new AMap.Marker({
          position: [location.location[0], location.location[1]]
        })
        marker.setMap(this.map)
        marker.content = '<img src="' + location.image + '">' + '<br>' + location.name + '<br>' + location.info + '<br>' + location.time
        marker.on('mouseover', this.openInfoWindow)
      }
      this.map.setFitView()
    }
  }
</script>

