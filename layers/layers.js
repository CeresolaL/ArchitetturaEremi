var wms_layers = [];


        var lyr_bergfexosm_0 = new ol.layer.Tile({
            'title': 'bergfex osm',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://www.bergfex.at">©BEV, bergfex.at 2008, 2015</a>',
                url: 'http://maps.bergfex.at/osm/standard/{z}/{x}/{y}.jpg'
            })
        });
var format_P_CPR_1 = new ol.format.GeoJSON();
var features_P_CPR_1 = format_P_CPR_1.readFeatures(json_P_CPR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_CPR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_CPR_1.addFeatures(features_P_CPR_1);
var lyr_P_CPR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_P_CPR_1, 
                style: style_P_CPR_1,
                interactive: false,
                title: '<img src="styles/legend/P_CPR_1.png" /> P_CPR'
            });
var format_P_ESp_2 = new ol.format.GeoJSON();
var features_P_ESp_2 = format_P_ESp_2.readFeatures(json_P_ESp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_ESp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_ESp_2.addFeatures(features_P_ESp_2);
var lyr_P_ESp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_P_ESp_2, 
                style: style_P_ESp_2,
                interactive: false,
                title: '<img src="styles/legend/P_ESp_2.png" /> P_ESp'
            });
var format_P_SBCA_3 = new ol.format.GeoJSON();
var features_P_SBCA_3 = format_P_SBCA_3.readFeatures(json_P_SBCA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_SBCA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_SBCA_3.addFeatures(features_P_SBCA_3);
var lyr_P_SBCA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_P_SBCA_3, 
                style: style_P_SBCA_3,
                interactive: false,
                title: '<img src="styles/legend/P_SBCA_3.png" /> P_SBCA'
            });
var format_selER_4 = new ol.format.GeoJSON();
var features_selER_4 = format_selER_4.readFeatures(json_selER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_selER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_selER_4.addFeatures(features_selER_4);
var lyr_selER_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_selER_4, 
                style: style_selER_4,
                interactive: false,
                title: '<img src="styles/legend/selER_4.png" /> selER'
            });

lyr_bergfexosm_0.setVisible(true);lyr_P_CPR_1.setVisible(true);lyr_P_ESp_2.setVisible(true);lyr_P_SBCA_3.setVisible(true);lyr_selER_4.setVisible(true);
var layersList = [lyr_bergfexosm_0,lyr_P_CPR_1,lyr_P_ESp_2,lyr_P_SBCA_3,lyr_selER_4];
lyr_P_CPR_1.set('fieldAliases', {'full_id': 'full_id', });
lyr_P_ESp_2.set('fieldAliases', {'full_id': 'full_id', });
lyr_P_SBCA_3.set('fieldAliases', {'full_id': 'full_id', });
lyr_selER_4.set('fieldAliases', {'fid': 'fid', 'chiesa': 'chiesa', });
lyr_P_CPR_1.set('fieldImages', {'full_id': 'TextEdit', });
lyr_P_ESp_2.set('fieldImages', {'full_id': 'TextEdit', });
lyr_P_SBCA_3.set('fieldImages', {'full_id': 'TextEdit', });
lyr_selER_4.set('fieldImages', {'fid': 'TextEdit', 'chiesa': 'TextEdit', });
lyr_P_CPR_1.set('fieldLabels', {'full_id': 'no label', });
lyr_P_ESp_2.set('fieldLabels', {'full_id': 'no label', });
lyr_P_SBCA_3.set('fieldLabels', {'full_id': 'no label', });
lyr_selER_4.set('fieldLabels', {'fid': 'no label', 'chiesa': 'no label', });
lyr_selER_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});