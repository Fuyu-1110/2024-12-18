// ベースマップ
let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
});
let gsi = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    attribution: '&copy; 地理院地図'
});

// let sucontents = "川口オートレース場です。<br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kawaguchi_auto1.jpg/300px-Kawaguchi_auto1.jpg' width='300' height='375'>"
      //ポップアップオブジェクトを作成
// let popup1 = L.popup({ maxWidth: 550 }).setContent(sucontents);
// let popup2 = L.popup().setContent("川口西口公園(リリアパーク)です<br><img src='https://www.pref.saitama.lg.jp/images/190707/img_5518.jpg' width='300' height='375'>");
// let popup3 = L.popup().setContent("SKIPシティです。<br><img src='https://www.skipcity.jp/assets/img/about/photo_about_main.jpeg' width='300' height='375'>");
// let popup4 = L.popup().setContent("川口グリーンセンターです。<br><img src='https://www.s-rail.co.jp/area/lifeinfo/images/greencenter_1.jpg' width='300' height='375'>");
// let popup5 = L.popup().setContent("ゴリラ公園です。<br><img src='https://www.city.kawaguchi.lg.jp/material/images/group/121/121.jpg' width='300' height='375'>");
// let popup6 = L.popup().setContent("道の駅「川口・あんぎょう」です。<br><img src='https://www.michi-no-eki.jp/sites/default/files/styles/stations_main/public/stations/db81e3a629c2e8b8be35076ca7911e62.JPG?itok=UZSjR3_B' width='300' height='375'>");

      //マーカーにポップアップを紐付けする。同時にbindTooltipでツールチップも追加
// let kawaguchi_o = L.marker(mpoint, { draggable: true }).bindPopup(popup1).bindTooltip("川口オートレース場").addTo(map);
// let nisiguchi_park = L.marker([35.8026479, 139.716103]).bindPopup(popup2).bindTooltip("リリアパーク").addTo(map);
// let kawaguchi_skip = L.marker([35.8277062,139.7180543]).bindPopup(popup3).bindTooltip("SKIPシティ").addTo(map);
// let kawaguchi_green =L.marker([35.8458354,139.727664]).bindPopup(popup4).bindTooltip("川口グリーンセンター").addTo(map);
// let gorilla_park = L.marker([35.8393129,139.6790586]).bindPopup(poppup5).bindTooltip("ゴリラ公園").addTo(map);
// let angyo_jilian = L.marker([35.8480163,139.7656756]).bindPopup(popup6).bindTooltip("川口緑化センター樹里安 道の駅「川口・あんぎょう」").addTo(map);
// ピン
let kawaguchi_o = L.marker([35.8190692,139.7245734]).bindPopup("川口オートレース場です。<br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kawaguchi_auto1.jpg/300px-Kawaguchi_auto1.jpg' width='300' height='375'>");
let kawaguchi_skip = L.marker([35.8269316, 139.7205505]).bindPopup("SKIPシティです。<br><img src='https://www.skipcity.jp/assets/img/about/photo_about_main.jpeg' width='300' height='375'>");
let kawaguchi_nisipark = L.marker([35.8026479, 139.716103]).bindPopup("川口西口公園(リリアパーク)です<br><img src='https://www.pref.saitama.lg.jp/images/190707/img_5518.jpg' width='300' height='375'>");
let kawaguchi_green = L.marker([35.8458354,139.727664]).bindPopup("川口グリーンセンターです。<br><img src='https://www.s-rail.co.jp/area/lifeinfo/images/greencenter_1.jpg' width='300' height='375'>");
let gorilla_park = L.marker([35.8393129,139.6790586]).bindPopup("ゴリラ公園です。<br><img src='https://www.city.kawaguchi.lg.jp/material/images/group/121/121.jpg' width='300' height='375'>");
let angyo_julian = L.marker([35.8480163,139.7656756]).bindPopup("道の駅「川口・あんぎょう」です。<br><img src='https://www.michi-no-eki.jp/sites/default/files/styles/stations_main/public/stations/db81e3a629c2e8b8be35076ca7911e62.JPG?itok=UZSjR3_B' width='300' height='375'>");
let kawaguchi = L.marker([35.8019116,139.7175674]).bindPopup("川口駅です。<br><img src='https://www.aeras-group.jp/wp-content/themes/aeras/thumb.php?src=s3://prod-aeras-corporate-site-system-data/wp-content/uploads/2021/09/3_3_1_13857012.jpg&w=750' width='300' height='375'>");
let higashi_kawaguchi = L.marker([35.8751453,139.7441413]).bindPopup("東川口駅です。<br><img src='https://image.space.rakuten.co.jp/d/strg/ctrl/9/a796bfd6bd8e067681acdd2e0f8936d0c03c7006.13.9.9.3.jpeg' width='300' height='375'>");
let nishi_kawaguchi = L.marker([35.8154779,139.7045912]).bindPopup("西川口駅です。<br><img src='https://www.chintaistyle.jp/article/wp-content/uploads/2022/04/nishikawaguchi.jpg' width='300' height='375'>");
let kawaguchi_motogo = L.marker([35.8003904,139.7300724]).bindPopup("川口元郷駅(埼玉高速鉄道)です。<br><img src='https://www.s-rail.co.jp/line/img/kawaguchimotogo/img_01.jpg' width='300' height='375'>");
let hatogaya = L.marker([35.8308981,139.7359813]).bindPopup("鳩ケ谷駅(埼玉高速鉄道)です。<br><img src='https://www.s-rail.co.jp/line/img/hatogaya/img_01.jpg' width='300' height='375'>");
let minami_hatogaya = L.marker([35.8162378,139.7359395]).bindPopup("南鳩ヶ谷駅(埼玉高速鉄道)です。<br><img src='https://www.s-rail.co.jp/line/img/minamihatogaya/img_01.jpg' width='300' height='375'>");
let araijuku = L.marker([35.8429897,139.7380838]).bindPopup("新井宿駅(埼玉高速鉄道)です。<br><img src='https://www.s-rail.co.jp/line/img/araijuku/img_01.jpg' width='300' height='375'>");
let toduka_angyo = L.marker([35.8586617,139.7535539]).bindPopup("戸塚安行駅(埼玉高速鉄道)です。<br><img src='https://jice.homemate-research.com/pubuser1/pubuser_facility_img/0/2/8/46000000000000008820/0000063568/46000000000000008820_0000063568_2.jpg' width='300' height='375'>");

let tourism = L.layerGroup([kawaguchi_o, kawaguchi_skip, kawaguchi_green]);
let park = L.layerGroup([kawaguchi_nisipark, gorilla_park]);
let stations = L.layerGroup([angyo_julian, kawaguchi, higashi_kawaguchi, nishi_kawaguchi, kawaguchi_motogo, hatogaya, minami_hatogaya, araijuku, toduka_angyo]);

// 地図セットアップ
map = L.map('map', {
    center: [35.8269316, 139.7205505],
    zoom: 13,
    layers: [osm, tourism, park, stations]
});

let baseMaps = {
    "OpenStreetMap": osm,
    "地理院地図": gsi
};

let overlayMaps = {
    "観光": tourism,
    "公園": park,
    "駅": stations
};

let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


async function fetchGeoJson(filename) {
    let response = await fetch(filename);
    return await response.json();
}

async function add_layer() {
    let my_geo_json = await fetchGeoJson("my_geojson_data.json");

    // GeoJSONレイヤーを追加
    let my_geo_json_layer = L.geoJSON(my_geo_json, {
        onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.name) {
                layer.bindPopup(feature.properties.name);
            }
        },
        style: function (feature) {
            switch (feature.geometry.type) {
                case 'Point': return {color: "#ff0000"};
                case 'LineString': return {color: "#0000ff"};
                case 'Polygon': return {color: "#00ff00"};
            }
        },
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 8,
                fillColor: "#ff0000",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        }
    }).addTo(map);

    my_geo_json_layer_group = L.layerGroup([my_geo_json_layer]);
    layerControl.addOverlay(my_geo_json_layer_group, "GeoJSONレイヤー")

    // 道路を追加
    let road_feature = await fetchGeoJson("N01-07L-2K-13_Road.json");
    let road_layer = L.geoJSON(road_feature, {
        style: function (feature) {
            return {color: "#ff00ff"};
        }
    }).addTo(map);

    road_layer_group = L.layerGroup([road_layer]);
    layerControl.addOverlay(road_layer_group, "道路")
}
add_layer();
