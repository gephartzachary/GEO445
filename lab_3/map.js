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

var myIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/US-NationalParkService-Logo.svg/1200px-US-NationalParkService-Logo.svg.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var yel = L.marker([44.4280, -110.5885], {icon: myIcon}).bindPopup("<b>Yellowstone").addTo(mymap);
var yos = L.marker([37.8651, -119.5383], {icon: myIcon}).bindPopup("<b>Yosemite").addTo(mymap);
var glac = L.marker([48.7596, -113.7870], {icon: myIcon}).bindPopup("<b>Glacier").addTo(mymap);
var gran = L.marker([36.1069, -112.1129], {icon: myIcon}).bindPopup("<b>Grand Canyon").addTo(mymap);
var zion = L.marker([37.2982, -113.0263], {icon: myIcon}).bindPopup("<b>Zion").addTo(mymap);
var teton = L.marker([43.7904, -110.6818], {icon: myIcon}).bindPopup("<b>Grand Teton").addTo(mymap);
var bryce = L.marker([37.5930, -112.1871], {icon: myIcon}).bindPopup("<b>Bryce Canyon").addTo(mymap);
var arch = L.marker([38.7331, -109.5925], {icon: myIcon}).bindPopup("<b>Arches").addTo(mymap);
var rock = L.marker([40.3428, -105.6836], {icon: myIcon}).bindPopup("<b>Rocky Mountain").addTo(mymap);
var seq = L.marker([36.4864, -118.5658], {icon: myIcon}).bindPopup("<b>Sequoia").addTo(mymap);