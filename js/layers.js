var L = require('leaflet');
var $ = require('jquery');

var Config = require('./config.js');
var map = require('./map.js');

var trailheadIcon = L.icon({
    iconUrl: 'img/icon_trailhead_active.png',
    iconSize:     [38, 38], // size of the icon
    iconAnchor:   [19, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});


var layers = {};

$.getJSON(Config.trailheadEndpoint, function(data){
    var layer = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: trailheadIcon});
        },

        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.name + " @ " +
                            feature.geometry.coordinates);
        }
    });

    layer.addTo(map);
    layers.trailheads = layer;
});

$.getJSON(Config.trailSegmentEndpoint, function(data){
    var layer = L.geoJson(data, {});

    layer.addTo(map);
    layers.trailSegments = layer;
});

module.exports = layers;
