console.log("hello!")

let map = L.map('mapid').setView([36.1733,-120.1794],7);


let line = [[33.9416,-118.4085],
            [37.6213,-122.3790],
            [40.7899,-111.9791],
            [47.4502,-122.3088]
];

L.polyline(line, {
    color: "yellow"
}).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



