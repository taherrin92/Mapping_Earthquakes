

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

let baseMaps = {
    Light: light,
    Dark: dark
  };

let map = L.map('mapid', {
    center: [30,30],
    zoom: 2,
    layers: [light]
});

let myStyle = {
    color: "#ffffa1",
    weight: 2
}

let torontoData = "https://raw.githubusercontent.com/taherrin92/Mapping_Earthquakes/main/torontoRoutes.json";

d3.json(torontoData).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature,layer) {
            layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: " 
            + feature.properties.dst + "</h3>");
        }
    }).addTo(map)
});


// We create the tile layer that will be the background of our map.


L.control.layers(baseMaps).addTo(map);

