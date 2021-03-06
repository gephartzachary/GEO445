//Creating the map variable
var mymap = L.map("map", {
    center: [51.48882027639122, -0.1028811094342392], 
    zoom: 11
});

// Set up baselayers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VwaGFydHphY2hhcnkiLCJhIjoiY2t6eHA2bG1kMDNsczJvazFlYXp4bTJ5aCJ9.s98R-oDZAV66nFusWbt-Uw', {
    maxZoom: 12,
    minZoom: 8,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
}).addTo(mymap);

function getColor(value) {
    return value > 139 ? '#54278f':
           value > 87  ? '#756bb1':
           value > 53  ? '#9e9ac8':
           value > 32  ? '#cbc9e2':
                         '#f2f0f7';
}

function style(feature){
    return {
        fillColor: getColor(feature.properties.pop_den),
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

  function highlightFeature(e) {
    var feature = e.target;

    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });
}

var geojson;

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    geojson2.resetStyle(e.target);
}

geojson = L.geoJson(data, {
    style: style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
return layer.feature.properties.NAME 
        + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
}).addTo(mymap);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (mymap) {

    var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 32, 53, 87, 139];

    div.innerHTML = '<b>Population Density <br></b>';
    
    // Loop through our the classes and generate a label with a color box for each interval.
    // If you are creating a choropleth map, you DO NOT need to change lines below.
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(mymap);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getColor2(value) {
    return value > 47 ? "rgb(179,0,0)":
           value > 35  ? "rgb(227,74,51)":
           value > 22  ? "rgb(252,141,89)":
           value > 14  ? "rgb(253,204,138)":
                         "rgb(254,240,217)";
}

function style2(feature){
    return {
        fillColor: getColor2(feature.properties.lan_den),
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

  function highlightFeature2(e) {
    var feature = e.target;

    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

function onEachFeature2(feature, layer) {
    layer.on({
        mouseover: highlightFeature2,
        mouseout: resetHighligh2t,
    });
}

var geojson2;

function resetHighlight2(e) {
    geojson2.resetStyle2(e.target);
    geojson2.resetStyle(e.target);
}

geojson2 = L.geoJson(data, {
    style: style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
        + '<p style="color:red">' + layer.feature.properties.lan_den.toString() + ' people/hectare </p>';       
}).addTo(mymap);

var legend2 = L.control({position: 'bottomright'});

legend2.onAdd = function (mymap) {

    var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 15, 23, 36, 48];

    div.innerHTML = '<b>All English Density <br></b>';
    
    // Loop through our the classes and generate a label with a color box for each interval.
    // If you are creating a choropleth map, you DO NOT need to change lines below.
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor2(grades[i] + 1) + '"></i>' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend2.addTo(mymap);

// ~~~~~~~ Menu ~~~~~~~~~~

var mapLayers = {
    "Population" : geojson,
    "Language" : geojson2,
};

var layerControl = L.control.layers(mapLayers, {collapsed: false}).addTo(mymap);
