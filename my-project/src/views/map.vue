<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #map{
    flex-grow: 1;
  }

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

<template>
  <section>
    <div id="map">
    </div>
  </section>
</template>

<script>
  /* global AMap */
  import locations from '../scripts/map'
  export default {
    name: 'map',
    data () {
      return {
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

      for (let location of locations) {
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

