console.log("hello!")

let map = L.map('mapid', {
    center: [
        34.0522,-118.243
    ],
    zoom:8
});


L.circleMarker([34.0522,-118.2438], {
    radius: 75,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);