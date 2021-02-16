
const getBounds = (coordinates) => new L.LatLngBounds([
    [Math.min(...coordinates.map((x) => x.latitude)), Math.min(...coordinates.map((x) => x.longitude))],
    [Math.max(...coordinates.map((x) => x.latitude)), Math.max(...coordinates.map((x) => x.longitude))],
]);

async function renderMap() {

    Vue.component('l-map', window.Vue2Leaflet.LMap);
    Vue.component('l-tile-layer', window.Vue2Leaflet.LTileLayer);
    Vue.component('l-marker', window.Vue2Leaflet.LMarker);
    Vue.component('l-popup', window.Vue2Leaflet.LPopup);

    const responseJson = await wp.apiRequest({ path: `vikalpsangam/v2/map` });
    
    const categories = _
        .chain(responseJson.categories)
        .map(category => ({
            ...category,
            icon: L.divIcon({
                className: "story-marker-icon",
                html: `<div style='background-color: ${category.color}'></div>`
            })
        }))
        .indexBy("cat_ID")
        .value()
    
    const coordinates = Object.values(responseJson.coordinates)
    
    window.app = new Vue({
        el: '#large-map',
        data: {
            message: 'Hello Vue!',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 6,
            center: getBounds(coordinates).getCenter(),
            coordinates,
            categories,
            selectedCategory: null
        },
        computed: {
            visibleMarkers: function() {
                if (!this.selectedCategory) return this.coordinates
                return this.coordinates.filter(
                    coordinate => coordinate.categories.includes(this.selectedCategory)
                )
            }
        },
        methods: {
            getIcon(coordinate) {
                if (this.selectedCategory) {
                    return categories[this.selectedCategory].icon
                } else {
                    return categories[coordinate.categories[0]].icon
                }
            },
        }
    })
}
