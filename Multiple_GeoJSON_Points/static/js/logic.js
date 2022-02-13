let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

let map = L.map('mapid', {
    center: [30,30],
    zoom: 2,
    layers: [streets]
});

let airportData = "https://raw.githubusercontent.com/taherrin92/Mapping_Earthquakes/main/majorAirports.json";

d3.json(airportData).then(function(data) {
    console.log(data);
    L.geoJSON(data).addTo(map)
});


// We create the tile layer that will be the background of our map.


let baseMaps = {
    Street: streets,
    Dark: dark
  };

L.control.layers(baseMaps).addTo(map);