var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_ElectoralDistricts_3 = new ol.format.GeoJSON();
var features_ElectoralDistricts_3 = format_ElectoralDistricts_3.readFeatures(json_ElectoralDistricts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectoralDistricts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectoralDistricts_3.addFeatures(features_ElectoralDistricts_3);
var lyr_ElectoralDistricts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectoralDistricts_3, 
                style: style_ElectoralDistricts_3,
                interactive: true,
    title: 'Electoral Districts<br />\
    <img src="styles/legend/ElectoralDistricts_3_0.png" /> BARRACKPORE WEST<br />\
    <img src="styles/legend/ElectoralDistricts_3_1.png" /> BRONTE<br />\
    <img src="styles/legend/ElectoralDistricts_3_2.png" /> DEBE EAST/L\'ESPERANCE/UNION HALL<br />\
    <img src="styles/legend/ElectoralDistricts_3_3.png" /> DEBE SOUTH<br />\
    <img src="styles/legend/ElectoralDistricts_3_4.png" /> LA FORTUNE/DEBE NORTH<br />\
    <img src="styles/legend/ElectoralDistricts_3_5.png" /> LA ROMAINE<br />\
    <img src="styles/legend/ElectoralDistricts_3_6.png" /> PALMISTE/HERMITAGE<br />\
    <img src="styles/legend/ElectoralDistricts_3_7.png" /> PENAL<br />\
    <img src="styles/legend/ElectoralDistricts_3_8.png" /> QUINAM/ MORNE DIABLO<br />\
    <img src="styles/legend/ElectoralDistricts_3_9.png" /> ROCHARD/BARRACKPORE EAST<br />'
        });
var format_Roads_4 = new ol.format.GeoJSON();
var features_Roads_4 = format_Roads_4.readFeatures(json_Roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_4.addFeatures(features_Roads_4);
var lyr_Roads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_4, 
                style: style_Roads_4,
                interactive: true,
                title: '<img src="styles/legend/Roads_4.png" /> Roads'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_ElectoralDistricts_3.setVisible(true);lyr_Roads_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleSatellite_2,lyr_ElectoralDistricts_3,lyr_Roads_4];
lyr_ElectoralDistricts_3.set('fieldAliases', {'fid': 'fid', 'Councillor': 'Councillor', 'Chairman of Committee': 'Chairman of Committee', 'Electoral District': 'Electoral District', 'Email': 'Email', 'Contact Number': 'Contact Number', });
lyr_Roads_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_ElectoralDistricts_3.set('fieldImages', {'fid': 'TextEdit', 'Councillor': 'TextEdit', 'Chairman of Committee': 'TextEdit', 'Electoral District': 'TextEdit', 'Email': 'TextEdit', 'Contact Number': 'TextEdit', });
lyr_Roads_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_ElectoralDistricts_3.set('fieldLabels', {'fid': 'header label', 'Councillor': 'header label', 'Chairman of Committee': 'header label', 'Electoral District': 'header label', 'Email': 'header label', 'Contact Number': 'header label', });
lyr_Roads_4.set('fieldLabels', {'fid': 'header label', 'name': 'header label', });
lyr_Roads_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});