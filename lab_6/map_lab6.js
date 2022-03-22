//Creating the map variable
var mymap = L.map("map", {
    center: [51.48882027639122, -0.1028811094342392], 
    zoom: 11
});

// Set up baselayers
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VwaGFydHphY2hhcnkiLCJhIjoiY2wwN29uaGhrMmp2MjNsbmZmeGI1ajE1bSJ9.01YntP4zdduQ5ztvjdFYfg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.geoJson(data).addTo(mymap);