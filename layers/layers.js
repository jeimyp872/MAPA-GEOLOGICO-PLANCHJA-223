var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_precipitacion_1 = new ol.format.GeoJSON();
var features_precipitacion_1 = format_precipitacion_1.readFeatures(json_precipitacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_precipitacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_precipitacion_1.addFeatures(features_precipitacion_1);
var lyr_precipitacion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_precipitacion_1, 
                style: style_precipitacion_1,
                popuplayertitle: 'precipitacion',
                interactive: true,
                title: '<img src="styles/legend/precipitacion_1.png" /> precipitacion'
            });
var format_Administrativo_P_2 = new ol.format.GeoJSON();
var features_Administrativo_P_2 = format_Administrativo_P_2.readFeatures(json_Administrativo_P_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrativo_P_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrativo_P_2.addFeatures(features_Administrativo_P_2);
var lyr_Administrativo_P_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrativo_P_2, 
                style: style_Administrativo_P_2,
                popuplayertitle: 'Administrativo_P',
                interactive: true,
                title: '<img src="styles/legend/Administrativo_P_2.png" /> Administrativo_P'
            });
var format_GEOLOGIA_POLIGONO_AREA_3 = new ol.format.GeoJSON();
var features_GEOLOGIA_POLIGONO_AREA_3 = format_GEOLOGIA_POLIGONO_AREA_3.readFeatures(json_GEOLOGIA_POLIGONO_AREA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGIA_POLIGONO_AREA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGIA_POLIGONO_AREA_3.addFeatures(features_GEOLOGIA_POLIGONO_AREA_3);
var lyr_GEOLOGIA_POLIGONO_AREA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGIA_POLIGONO_AREA_3, 
                style: style_GEOLOGIA_POLIGONO_AREA_3,
                popuplayertitle: 'GEOLOGIA_POLIGONO_AREA',
                interactive: true,
    title: 'GEOLOGIA_POLIGONO_AREA<br />\
    <img src="styles/legend/GEOLOGIA_POLIGONO_AREA_3_0.png" /> E1E2-VCm<br />\
    <img src="styles/legend/GEOLOGIA_POLIGONO_AREA_3_1.png" /> K2-Pf<br />\
    <img src="styles/legend/GEOLOGIA_POLIGONO_AREA_3_2.png" /> K2-Pm<br />\
    <img src="styles/legend/GEOLOGIA_POLIGONO_AREA_3_3.png" /> K2-Vm<br />\
    <img src="styles/legend/GEOLOGIA_POLIGONO_AREA_3_4.png" /> k2k6-Sm<br />\
    <img src="styles/legend/GEOLOGIA_POLIGONO_AREA_3_5.png" /> n1n2-Pi<br />\
    <img src="styles/legend/GEOLOGIA_POLIGONO_AREA_3_6.png" /> Q-al<br />\
    <img src="styles/legend/GEOLOGIA_POLIGONO_AREA_3_7.png" /> Q-ca<br />\
    <img src="styles/legend/GEOLOGIA_POLIGONO_AREA_3_8.png" /> Q1-l<br />\
    <img src="styles/legend/GEOLOGIA_POLIGONO_AREA_3_9.png" /> <br />' });
var format_VIA_4 = new ol.format.GeoJSON();
var features_VIA_4 = format_VIA_4.readFeatures(json_VIA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIA_4.addFeatures(features_VIA_4);
var lyr_VIA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIA_4, 
                style: style_VIA_4,
                popuplayertitle: 'VIA',
                interactive: true,
                title: '<img src="styles/legend/VIA_4.png" /> VIA'
            });
var format_DRENAJE_SENCILLO_5 = new ol.format.GeoJSON();
var features_DRENAJE_SENCILLO_5 = format_DRENAJE_SENCILLO_5.readFeatures(json_DRENAJE_SENCILLO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRENAJE_SENCILLO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAJE_SENCILLO_5.addFeatures(features_DRENAJE_SENCILLO_5);
var lyr_DRENAJE_SENCILLO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAJE_SENCILLO_5, 
                style: style_DRENAJE_SENCILLO_5,
                popuplayertitle: 'DRENAJE_SENCILLO',
                interactive: true,
                title: '<img src="styles/legend/DRENAJE_SENCILLO_5.png" /> DRENAJE_SENCILLO'
            });
var format_FALLAS_6 = new ol.format.GeoJSON();
var features_FALLAS_6 = format_FALLAS_6.readFeatures(json_FALLAS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FALLAS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FALLAS_6.addFeatures(features_FALLAS_6);
var lyr_FALLAS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FALLAS_6, 
                style: style_FALLAS_6,
                popuplayertitle: 'FALLAS',
                interactive: true,
    title: 'FALLAS<br />\
    <img src="styles/legend/FALLAS_6_0.png" /> Falla<br />\
    <img src="styles/legend/FALLAS_6_1.png" /> Falla cubierta<br />\
    <img src="styles/legend/FALLAS_6_2.png" /> <br />' });
var format_CURVAS_7 = new ol.format.GeoJSON();
var features_CURVAS_7 = format_CURVAS_7.readFeatures(json_CURVAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CURVAS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CURVAS_7.addFeatures(features_CURVAS_7);
var lyr_CURVAS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CURVAS_7, 
                style: style_CURVAS_7,
                popuplayertitle: 'CURVAS',
                interactive: true,
                title: '<img src="styles/legend/CURVAS_7.png" /> CURVAS'
            });
var format_Datos_estacion_8 = new ol.format.GeoJSON();
var features_Datos_estacion_8 = format_Datos_estacion_8.readFeatures(json_Datos_estacion_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datos_estacion_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Datos_estacion_8.addFeatures(features_Datos_estacion_8);
var lyr_Datos_estacion_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Datos_estacion_8, 
                style: style_Datos_estacion_8,
                popuplayertitle: 'Datos_estacion',
                interactive: true,
                title: '<img src="styles/legend/Datos_estacion_8.png" /> Datos_estacion'
            });
var group_GEOLOGICO = new ol.layer.Group({
                                layers: [lyr_GEOLOGIA_POLIGONO_AREA_3,lyr_VIA_4,lyr_DRENAJE_SENCILLO_5,lyr_FALLAS_6,lyr_CURVAS_7,lyr_Datos_estacion_8,],
                                fold: 'close',
                                title: 'GEOLOGICO'});
var group_DEMyresultados = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'close',
                                title: 'DEM y resultados'});

lyr_GoogleSatellite_0.setVisible(true);lyr_precipitacion_1.setVisible(true);lyr_Administrativo_P_2.setVisible(true);lyr_GEOLOGIA_POLIGONO_AREA_3.setVisible(true);lyr_VIA_4.setVisible(true);lyr_DRENAJE_SENCILLO_5.setVisible(true);lyr_FALLAS_6.setVisible(true);lyr_CURVAS_7.setVisible(true);lyr_Datos_estacion_8.setVisible(true);
var layersList = [group_DEMyresultados,lyr_precipitacion_1,lyr_Administrativo_P_2,group_GEOLOGICO];
lyr_precipitacion_1.set('fieldAliases', {'precipitac': 'precipitac', });
lyr_Administrativo_P_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE_GEOGRAFICO': 'NMG', 'CODIGO_NOMBRE': 'CODIGO_NOMBRE', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'x': 'x', 'y': 'y', });
lyr_GEOLOGIA_POLIGONO_AREA_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SimboloUC': 'SimboloUC', 'Descripcio': 'Descripcio', 'Edad': 'Edad', 'UGIntegrad': 'UGIntegrad', 'Comentario': 'Comentario', });
lyr_VIA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TIPO_VIA': 'TIPO_VIA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_DRENAJE_SENCILLO_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE_GEO': 'NOMBRE_GEO', 'ESTADO_DRE': 'ESTADO_DRE', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_FALLAS_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Tipo': 'Tipo', 'NombreFall': 'NombreFall', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_CURVAS_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ALTURA_SOB': 'ALTURA_SOB', 'TIPO_CURVA': 'TIPO_CURVA', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Datos_estacion_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_UC': 'FID_UC', 'Shape_Leng': 'Shape_Leng', 'SimboloUC': 'SimboloUC', 'Descripcio': 'Descripcio', 'Edad': 'Edad', 'UGIntegrad': 'UGIntegrad', 'Comentario': 'Comentario', 'FID_AreasD': 'FID_AreasD', 'PLA_NUMR_P': 'PLA_NUMR_P', 'RULEID': 'RULEID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'ORIG_FID': 'ORIG_FID', 'Azimuth': 'Azimuth', 'Buzamiento': 'Buzamiento', });
lyr_precipitacion_1.set('fieldImages', {'precipitac': 'TextEdit', });
lyr_Administrativo_P_2.set('fieldImages', {'OBJECTID': '', 'NOMBRE_GEOGRAFICO': '', 'CODIGO_NOMBRE': '', 'PROYECTO': '', 'FECHA': '', 'x': '', 'y': '', });
lyr_GEOLOGIA_POLIGONO_AREA_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SimboloUC': 'TextEdit', 'Descripcio': 'TextEdit', 'Edad': 'TextEdit', 'UGIntegrad': 'TextEdit', 'Comentario': 'TextEdit', });
lyr_VIA_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'TIPO_VIA': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_DRENAJE_SENCILLO_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'ESTADO_DRE': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'TextEdit', 'DISPERSION': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_FALLAS_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Tipo': 'TextEdit', 'NombreFall': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_CURVAS_7.set('fieldImages', {'OBJECTID': '', 'ALTURA_SOB': '', 'TIPO_CURVA': '', 'PROYECTO': '', 'FECHA': '', 'SHAPE_Leng': '', });
lyr_Datos_estacion_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_UC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'SimboloUC': 'TextEdit', 'Descripcio': 'TextEdit', 'Edad': 'TextEdit', 'UGIntegrad': 'TextEdit', 'Comentario': 'TextEdit', 'FID_AreasD': 'TextEdit', 'PLA_NUMR_P': 'TextEdit', 'RULEID': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Azimuth': 'TextEdit', 'Buzamiento': 'TextEdit', });
lyr_precipitacion_1.set('fieldLabels', {'precipitac': 'no label', });
lyr_Administrativo_P_2.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'CODIGO_NOMBRE': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_GEOLOGIA_POLIGONO_AREA_3.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SimboloUC': 'no label', 'Descripcio': 'no label', 'Edad': 'no label', 'UGIntegrad': 'no label', 'Comentario': 'no label', });
lyr_VIA_4.set('fieldLabels', {'OBJECTID': 'no label', 'TIPO_VIA': 'no label', 'NOMBRE_GEO': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_DRENAJE_SENCILLO_5.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE_GEO': 'no label', 'ESTADO_DRE': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'DISPERSION': 'no label', 'SHAPE_Leng': 'no label', });
lyr_FALLAS_6.set('fieldLabels', {'OBJECTID': 'no label', 'Tipo': 'no label', 'NombreFall': 'no label', 'SHAPE_Leng': 'no label', });
lyr_CURVAS_7.set('fieldLabels', {'OBJECTID': 'no label', 'ALTURA_SOB': 'no label', 'TIPO_CURVA': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Datos_estacion_8.set('fieldLabels', {'OBJECTID': 'no label', 'FID_UC': 'no label', 'Shape_Leng': 'no label', 'SimboloUC': 'no label', 'Descripcio': 'no label', 'Edad': 'no label', 'UGIntegrad': 'no label', 'Comentario': 'no label', 'FID_AreasD': 'no label', 'PLA_NUMR_P': 'no label', 'RULEID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', 'ORIG_FID': 'no label', 'Azimuth': 'no label', 'Buzamiento': 'no label', });
lyr_Datos_estacion_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});