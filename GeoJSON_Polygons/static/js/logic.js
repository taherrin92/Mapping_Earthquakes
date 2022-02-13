let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };

let map = L.map('mapid', {
    center: [30,30],
    zoom: 2,
    layers: [satelliteStreets]
});

let myStyle = {
    color: "#ffffa1",
    weight: 2
}

let torontoHoods = "https://raw.githubusercontent.com/taherrin92/Mapping_Earthquakes/main/torontoNeighborhoods.json";

d3.json(torontoHoods).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        style: myStyle
    }).addTo(map)
});


// We create the tile layer that will be the background of our map.


L.control.layers(baseMaps).addTo(map);

