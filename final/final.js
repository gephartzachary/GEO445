//Set up the baselayers and WMS layer
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VwaGFydHphY2hhcnkiLCJhIjoiY2t6eHA2bG1kMDNsczJvazFlYXp4bTJ5aCJ9.s98R-oDZAV66nFusWbt-Uw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
});

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VwaGFydHphY2hhcnkiLCJhIjoiY2t6eHA2bG1kMDNsczJvazFlYXp4bTJ5aCJ9.s98R-oDZAV66nFusWbt-Uw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});

var topo = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VwaGFydHphY2hhcnkiLCJhIjoiY2t6eHA2bG1kMDNsczJvazFlYXp4bTJ5aCJ9.s98R-oDZAV66nFusWbt-Uw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1
});

//Create Icons
var myOrbit = new L.Icon({
    iconSize: [45, 45],
    iconAnchor: [22.5, 22.5],
    popupAnchor:  [1, -24],
    iconUrl: 'planet.png'
});

var myLunar = new L.Icon({
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor:  [1, -24],
    iconUrl: 'moon.png'
});

var myInterplanetary = new L.Icon({
    iconSize: [40, 30],
    iconAnchor: [20, 15],
    popupAnchor:  [1, -24],
    iconUrl: 'saturn.png'
});

var myInterstellar = new L.Icon({
    iconSize: [50, 40],
    iconAnchor: [25, 20],
    popupAnchor:  [1, -24],
    iconUrl: 'star.png'
});

var base = new L.Icon({
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [1, -24],
    iconUrl: 'rocket.png'
})

var orbital_bases = new L.geoJson(orbital, {
    onEachFeature: function(feature, featureLayer){
        
        featureLayer.bindPopup('<p><b>'+feature.properties.TITLE+ '</b></br>') + '</p>';
    }, 
    pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng,{icon: myOrbit});
            return marker;
    }
});

var lunar_bases = new L.geoJson(lunar, {
    onEachFeature: function(feature, featureLayer){
        
        featureLayer.bindPopup('<p><b>'+feature.properties.TITLE+ '</b></br>') + '</p>';
    }, 
    pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng,{icon: myLunar});
            return marker;
    }
});

var interplanetary_bases = new L.geoJson(interplanetary, {
    onEachFeature: function(feature, featureLayer){
        
        featureLayer.bindPopup('<p><b>'+feature.properties.TITLE+ '</b></br>') + '</p>';
    }, 
    pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng,{icon: myInterplanetary});
            return marker;
    }
});

var interstellar_bases = new L.geoJson(interstellar, {
    onEachFeature: function(feature, featureLayer){
        
        featureLayer.bindPopup('<p><b>'+feature.properties.TITLE+ '</b></br>') + '</p>';
    }, 
    pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng,{icon: myInterstellar});
            return marker;
    }
});

var layer = L.geoJson();

var sliderOrbital = new L.geoJson(orbital, {
    onEachFeature: function(feature, featureLayer){
        var numLaunches = feature.properties.num_launches;
        if (numLaunches == null) {
            numLaunches = "Unknown";
        }
        featureLayer.bindPopup('<p style="text-align:center"><b>'+feature.properties.TITLE+ '</b></br>' +
                            '<img src="'+feature.properties.img+'" alt="Space Center Picture" style="display: block;margin-left: auto;margin-right: auto; width: 150px;"></br>' +
                            'Founding Year: '+feature.properties.year_start + '</br>' +
                            'Num Launches: '+numLaunches + '</br>' +
                            'Launch Record: '+feature.properties.highest + '</br>' +
                            "<a href="+feature.properties.url+">Additional Information</a") + '</p>';
    }, 
    pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng,{icon: base});
            return marker;
    }
});

var sliderLunar = new L.geoJson(lunar, {
    onEachFeature: function(feature, featureLayer){
        var numLaunches = feature.properties.num_launches;
        if (numLaunches == null) {
            numLaunches = "Unknown";
        }
        featureLayer.bindPopup('<p style="text-align:center"><b>'+feature.properties.TITLE+ '</b></br>' +
                            '<img src="'+feature.properties.img+'" alt="Space Center Picture" style="display: block;margin-left: auto;margin-right: auto; width: 150px;"></br>' +
                            'Founding Year: '+feature.properties.year_start + '</br>' +
                            'Num Launches: '+ numLaunches + '</br>' +
                            'Launch Record: '+feature.properties.highest + '</br>' +
                            "<a href="+feature.properties.url+">Additional Information</a") + '</p>';
    }, 
    pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng,{icon: base});
            return marker;
    }
});

var sliderInterplanetary = new L.geoJson(interplanetary, {
    onEachFeature: function(feature, featureLayer){
        var numLaunches = feature.properties.num_launches;
        if (numLaunches == null) {
            numLaunches = "Unknown";
        }
        featureLayer.bindPopup('<p style="text-align:center"><b>'+feature.properties.TITLE+ '</b></br>' +
                            '<img src="'+feature.properties.img+'" alt="Space Center Picture" style="display: block;margin-left: auto;margin-right: auto; width: 150px;"></br>' +
                            'Founding Year: '+feature.properties.year_start + '</br>' +
                            'Num Launches: '+ numLaunches + '</br>' +
                            'Launch Record: '+feature.properties.highest + '</br>' +
                            "<a href="+feature.properties.url+">Additional Information</a") + '</p>';
    }, 
    pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng,{icon: base});
            return marker;
    }
});

var sliderInterstellar = new L.geoJson(interstellar, {
    onEachFeature: function(feature, featureLayer){
        var numLaunches = feature.properties.num_launches;
        if (numLaunches == null) {
            numLaunches = "Unknown";
        }
        featureLayer.bindPopup('<p style="text-align:center"><b>'+feature.properties.TITLE+ '</b></br>' +
                            '<img src="'+feature.properties.img+'" alt="Space Center Picture" style="display: block;margin-left: auto;margin-right: auto; width: 150px;"></br>' +
                            'Founding Year: '+feature.properties.year_start + '</br>' +
                            'Num Launches: '+ numLaunches + '</br>' +
                            'Launch Record: '+feature.properties.highest + '</br>' +
                            "<a href="+feature.properties.url+">Additional Information</a") + '</p>';
    }, 
    pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng,{icon: base});
            return marker;
    }
});

layer.addLayer(sliderOrbital);
layer.addLayer(sliderLunar);
layer.addLayer(sliderInterplanetary);
layer.addLayer(sliderInterstellar);

//Create the map variable
var mymap = L.map("map", {
    center: [30, 20], 
    zoom: 2,
    layers: [grayscale, layer]
});

// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
    'Satellite': topo,
};

// Search Box
	

var searchControl = new L.Control.Search({
    position:'topright',
    layer: layer,
    propertyName: 'TITLE',
    marker: false,
    markeranimate: true,
    delayType: 50,
    collapsed: false,
    textPlaceholder: 'Search by Active Facility Name',   //placeholder value
    moveToLocation: function(latlng, title, map) {
        mymap.setView(latlng, 13);}
});

mymap.addControl(searchControl);  //inizialize search control

// Slider
var insert = document.getElementById("insert");
var slider = document.getElementById("myRange");

var phrase = document.createTextNode("1940  -  ");
var year = document.createTextNode(slider.value);

insert.appendChild(phrase);
insert.appendChild(year);

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    layer.clearLayers();

    insert.removeChild(insert.lastChild);
    var year = document.createTextNode(slider.value);
    insert.appendChild(year);

    var sliderOrbital = new L.geoJson(orbital, {
        filter: function(feature) {
            if (feature.properties.year_start <= slider.value) {
                return true;
            }
        },
        onEachFeature: function(feature, featureLayer){
            var numLaunches = feature.properties.num_launches;
            if (numLaunches == null) {
                numLaunches = "Unknown";
            }
            featureLayer.bindPopup('<p style="text-align:center"><b>'+feature.properties.TITLE+ '</b></br>' +
                                '<img src="'+feature.properties.img+'" alt="Space Center Picture" style="display: block;margin-left: auto;margin-right: auto; width: 150px;"></br>' +
                                'Founding Year: '+feature.properties.year_start + '</br>' +
                                'Num Launches: '+ numLaunches + '</br>' +
                                'Launch Record: '+feature.properties.highest + '</br>' +
                                "<a href="+feature.properties.url+">Additional Information</a") + '</p>';
        }, 
        pointToLayer: function (feature, latlng) {
                var marker = L.marker(latlng,{icon: base});
                return marker;
        }
    });

    var sliderLunar = new L.geoJson(lunar, {
        filter: function(feature) {
            if (feature.properties.year_start <= slider.value) {
                return true;
            }
        },
        onEachFeature: function(feature, featureLayer){
            var numLaunches = feature.properties.num_launches;
            if (numLaunches == null) {
                numLaunches = "Unknown";
            }
            featureLayer.bindPopup('<p style="text-align:center"><b>'+feature.properties.TITLE+ '</b></br>' +
                                '<img src="'+feature.properties.img+'" alt="Space Center Picture" style="display: block;margin-left: auto;margin-right: auto; width: 150px;"></br>' +
                                'Founding Year: '+feature.properties.year_start + '</br>' +
                                'Num Launches: '+ numLaunches + '</br>' +
                                'Launch Record: '+feature.properties.highest + '</br>' +
                                "<a href="+feature.properties.url+">Additional Information</a") + '</p>';
        }, 
        pointToLayer: function (feature, latlng) {
                var marker = L.marker(latlng,{icon: base});
                return marker;
        }
    });

    var sliderInterplanetary = new L.geoJson(interplanetary, {
        filter: function(feature) {
            if (feature.properties.year_start <= slider.value) {
                return true;
            }
        },
        onEachFeature: function(feature, featureLayer){
            var numLaunches = feature.properties.num_launches;
            if (numLaunches == null) {
                numLaunches = "Unknown";
            }
            featureLayer.bindPopup('<p style="text-align:center"><b>'+feature.properties.TITLE+ '</b></br>' +
                                '<img src="'+feature.properties.img+'" alt="Space Center Picture" style="display: block;margin-left: auto;margin-right: auto; width: 150px;"></br>' +
                                'Founding Year: '+feature.properties.year_start + '</br>' +
                                'Num Launches: '+ numLaunches + '</br>' +
                                'Launch Record: '+feature.properties.highest + '</br>' +
                                "<a href="+feature.properties.url+">Additional Information</a") + '</p>';
        }, 
        pointToLayer: function (feature, latlng) {
                var marker = L.marker(latlng,{icon: base});
                return marker;
        }
    });

    var sliderInterstellar = new L.geoJson(interstellar, {
        filter: function(feature) {
            if (feature.properties.year_start <= slider.value) {
                return true;
            }
        },
        onEachFeature: function(feature, featureLayer){
            var numLaunches = feature.properties.num_launches;
            if (numLaunches == null) {
                numLaunches = "Unknown";
            }
            featureLayer.bindPopup('<p style="text-align:center"><b>'+feature.properties.TITLE+ '</b></br>' +
                                '<img src="'+feature.properties.img+'" alt="Space Center Picture" style="display: block;margin-left: auto;margin-right: auto; width: 150px;"></br>' +
                                'Founding Year: '+feature.properties.year_start + '</br>' +
                                'Num Launches: '+ numLaunches + '</br>' +
                                'Launch Record: '+feature.properties.highest + '</br>' +
                                "<a href="+feature.properties.url+">Additional Information</a") + '</p>';
        }, 
        pointToLayer: function (feature, latlng) {
                var marker = L.marker(latlng,{icon: base});
                return marker;
        }
    });
    
    layer.addLayer(sliderOrbital);
    layer.addLayer(sliderLunar);
    layer.addLayer(sliderInterplanetary);
    layer.addLayer(sliderInterstellar);
}

// Circles
function getRadius(area) {
    if (area == null) {area = 1}
    var radius = Math.sqrt(area/Math.PI);
    return radius * 2 + 14;
}
  
var propcircles = new L.geoJson();
var circOrbit = new L.geoJson(orbital, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Name: <b>'+feature.properties.TITLE+ '</b></br> Number of Launches: '+feature.properties.num_launches+'</p>');
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            fillColor: "#920101", 
            color: '#920101',
            weight: 2,       
            radius: getRadius(feature.properties.num_launches),
            fillOpacity: .35
        }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: '#2D8F4E'});
  
            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: '#920101'});  
            }
        });
    }
});
var circLunar = new L.geoJson(lunar, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Name: <b>'+feature.properties.TITLE+ '</b></br> Number of Launches: '+feature.properties.num_launches+'</p>');
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            fillColor: "#920101", 
            color: '#920101',
            weight: 2,       
            radius: getRadius(feature.properties.num_launches),
            fillOpacity: .35
        }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: '#2D8F4E'});
  
            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: '#920101'});  
            }
        });
    }
});
var circInterplanetary = new L.geoJson(interplanetary, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Name: <b>'+feature.properties.TITLE+ '</b></br> Number of Launches: '+feature.properties.num_launches+'</p>');
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            fillColor: "#920101", 
            color: '#920101',
            weight: 2,       
            radius: getRadius(feature.properties.num_launches),
            fillOpacity: .35
        }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: '#2D8F4E'});
  
            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: '#920101'});  
            }
        });
    }
});
var circInterstellar = new L.geoJson(interstellar, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Name: <b>'+feature.properties.TITLE+ '</b></br> Number of Launches: '+feature.properties.num_launches+'</p>');
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            fillColor: "#920101", 
            color: '#920101',
            weight: 2,       
            radius: getRadius(feature.properties.num_launches),
            fillOpacity: .35
        }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: '#2D8F4E'});
  
            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: '#920101'});  
            }
        });
    }
});

propcircles.addLayer(circOrbit);
propcircles.addLayer(circLunar);
propcircles.addLayer(circInterplanetary);
propcircles.addLayer(circInterstellar);

var overlays = {"<img src='planet.png' height=16> Orbital Capability": orbital_bases, 
                "<img src='moon.png' height=16> Lunar Capability": lunar_bases,
                "<img src='saturn.png' height=16> Interplanetary Capability": interplanetary_bases,
                "<img src='star.png' height=16> Interstellar Capability": interstellar_bases,
                "<img src='propcircles.png' height=16> Number of Launches": propcircles
};

//Create the menu
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);

// Scalebar
L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap); 

// View
L.easyButton(('O height=50%'), function(btn, map){
    map.setView([30, 20], 2);
}).addTo(mymap);

//Create locator map
var miniMap = new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'), {
    toggleDisplay: true,
    minimized: true,
    position: 'bottomright'
}).addTo(mymap);