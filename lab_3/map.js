var mymap = L.map("map", {
    center: [40.0902, -95.7129], 
    zoom: 5});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VwaGFydHphY2hhcnkiLCJhIjoiY2t6bm5sMHNsMW4zcjJ2bnhqdnM1YmQ3OSJ9.Lq5AjfeB-mn38nQVrvo4pw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var yel = L.marker([44.4280, -110.5885], {icon: myIcon1}).bindPopup("<b>Yellowstone").addTo(mymap);
var yos = L.marker([37.8651, -119.5383], {icon: myIcon2}).bindPopup("<b>Yosemite").addTo(mymap);
var glac = L.marker([48.7596, -113.7870], {icon: myIcon3}).bindPopup("<b>Glacier").addTo(mymap);
var gran = L.marker([36.1069, -112.1129], {icon: myIcon4}).bindPopup("<b>Grand Canyon").addTo(mymap);
var zion = L.marker([37.2982, -113.0263], {icon: myIcon5}).bindPopup("<b>Zion").addTo(mymap);
var teton = L.marker([43.7904, -110.6818], {icon: myIcon6}).bindPopup("<b>Grand Teton").addTo(mymap);
var bryce = L.marker([37.5930, -112.1871], {icon: myIcon7}).bindPopup("<b>Bryce Canyon").addTo(mymap);
var arch = L.marker([38.7331, -109.5925], {icon: myIcon8}).bindPopup("<b>Arches").addTo(mymap);
var rock = L.marker([40.3428, -105.6836], {icon: myIcon9}).bindPopup("<b>Rocky Mountain").addTo(mymap);
var seq = L.marker([36.4864, -118.5658], {icon: myIcon10}).bindPopup("<b>Sequoia").addTo(mymap);