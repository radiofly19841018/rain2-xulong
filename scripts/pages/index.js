require('stylesheets/pages/index.scss');

// 初始化地图
var map = new AMap.Map('map-container',{
  mapStyle:'dark',
  zoom: 18,
  center: [109.069769,34.262025]
});

// 设置地图底层显示内容
map.setFeatures(['road','point','bg','building']);

// 添加自定义坐标点
var marker = new AMap.Marker({
    position: [109.069769,34.262025]
});
marker.setMap(map);
var circle = new AMap.Circle({
    center: [109.069769,34.262025],
    radius: 100,
    fillOpacity:0.2,
    strokeWeight:1
});
circle.setMap(map);
var info = new AMap.InfoWindow({
    content:"信息窗体<br>这里是方恒科技大厦",
    offset:new AMap.Pixel(0,-28)
});
info.open(map,marker.getPosition());


var marker = new AMap.Marker({
    position: [109.070769,34.262025]
});
marker.setMap(map);
var circle = new AMap.Circle({
    center: [109.070769,34.262025],
    radius: 100,
    fillOpacity:0.2,
    strokeWeight:1
});
circle.setMap(map);
var info = new AMap.InfoWindow({
    content:"信息窗体<br>这里是方恒科技大厦",
    offset:new AMap.Pixel(0,-28)
});
info.open(map,marker.getPosition());


map.setFitView();
