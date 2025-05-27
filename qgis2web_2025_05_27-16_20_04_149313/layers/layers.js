var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_bangunansmrng_2 = new ol.format.GeoJSON();
var features_bangunansmrng_2 = format_bangunansmrng_2.readFeatures(json_bangunansmrng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunansmrng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunansmrng_2.addFeatures(features_bangunansmrng_2);
var lyr_bangunansmrng_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunansmrng_2, 
                style: style_bangunansmrng_2,
                popuplayertitle: 'bangunan smrng',
                interactive: true,
                title: '<img src="styles/legend/bangunansmrng_2.png" /> bangunan smrng'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_bangunansmrng_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_bangunansmrng_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', });
lyr_bangunansmrng_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'leisure': 'leisure', 'branch': 'branch', 'alt_name': 'alt_name', 'wikidata': 'wikidata', 'studio': 'studio', 'layer': 'layer', 'atm': 'atm', 'constructi': 'constructi', 'tower_type': 'tower_type', 'tower_cons': 'tower_cons', 'man_made': 'man_made', 'reservatio': 'reservatio', 'air_condit': 'air_condit', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'image': 'image', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'descriptio': 'descriptio', 'operator': 'operator', 'addr_subdi': 'addr_subdi', 'stars': 'stars', 'official_n': 'official_n', 'beauty': 'beauty', 'cuisine': 'cuisine', 'religion': 'religion', 'smoking': 'smoking', 'addr_distr': 'addr_distr', 'school_typ': 'school_typ', 'office': 'office', 'admin_leve': 'admin_leve', 'year_of_co': 'year_of_co', 'website': 'website', 'tourism': 'tourism', 'start_date': 'start_date', 'rooms': 'rooms', 'phone': 'phone', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'email': 'email', 'brand_wiki': 'brand_wiki', 'brand_id': 'brand_id', 'brand_en': 'brand_en', 'brand': 'brand', 'architect': 'architect', 'addr_provi': 'addr_provi', 'addr_house': 'addr_house', 'operator_t': 'operator_t', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'shop': 'shop', 'name': 'name', 'height': 'height', 'capacity_p': 'capacity_p', 'building_s': 'building_s', 'building_r': 'building_r', 'building_m': 'building_m', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'backup_gen': 'backup_gen', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'access_roo': 'access_roo', 'type': 'type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', });
lyr_bangunansmrng_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'leisure': '', 'branch': '', 'alt_name': '', 'wikidata': '', 'studio': '', 'layer': '', 'atm': '', 'constructi': '', 'tower_type': '', 'tower_cons': '', 'man_made': '', 'reservatio': '', 'air_condit': '', 'wheelchair': '', 'opening_ho': '', 'image': '', 'healthcare': '', 'healthca_1': '', 'descriptio': '', 'operator': '', 'addr_subdi': '', 'stars': '', 'official_n': '', 'beauty': '', 'cuisine': '', 'religion': '', 'smoking': '', 'addr_distr': '', 'school_typ': '', 'office': '', 'admin_leve': '', 'year_of_co': '', 'website': '', 'tourism': '', 'start_date': '', 'rooms': '', 'phone': '', 'internet_a': '', 'internet_1': '', 'email': '', 'brand_wiki': '', 'brand_id': '', 'brand_en': '', 'brand': '', 'architect': '', 'addr_provi': '', 'addr_house': '', 'operator_t': '', 'amenity': '', 'addr_stree': '', 'addr_postc': '', 'shop': '', 'name': '', 'height': '', 'capacity_p': '', 'building_s': '', 'building_r': '', 'building_m': '', 'building_l': '', 'building_f': '', 'building_c': '', 'backup_gen': '', 'addr_full': '', 'addr_city': '', 'access_roo': '', 'type': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', });
lyr_bangunansmrng_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'leisure': 'no label', 'branch': 'no label', 'alt_name': 'no label', 'wikidata': 'no label', 'studio': 'no label', 'layer': 'no label', 'atm': 'no label', 'constructi': 'no label', 'tower_type': 'no label', 'tower_cons': 'no label', 'man_made': 'no label', 'reservatio': 'no label', 'air_condit': 'no label', 'wheelchair': 'no label', 'opening_ho': 'no label', 'image': 'no label', 'healthcare': 'no label', 'healthca_1': 'no label', 'descriptio': 'no label', 'operator': 'no label', 'addr_subdi': 'no label', 'stars': 'no label', 'official_n': 'no label', 'beauty': 'no label', 'cuisine': 'no label', 'religion': 'no label', 'smoking': 'no label', 'addr_distr': 'no label', 'school_typ': 'no label', 'office': 'no label', 'admin_leve': 'no label', 'year_of_co': 'no label', 'website': 'no label', 'tourism': 'no label', 'start_date': 'no label', 'rooms': 'no label', 'phone': 'no label', 'internet_a': 'no label', 'internet_1': 'no label', 'email': 'no label', 'brand_wiki': 'no label', 'brand_id': 'no label', 'brand_en': 'no label', 'brand': 'no label', 'architect': 'no label', 'addr_provi': 'no label', 'addr_house': 'no label', 'operator_t': 'no label', 'amenity': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'shop': 'no label', 'name': 'no label', 'height': 'no label', 'capacity_p': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_m': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'backup_gen': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'access_roo': 'no label', 'type': 'no label', });
lyr_bangunansmrng_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});