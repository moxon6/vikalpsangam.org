import Vue from 'vue/dist/vue';
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LControl,
} from 'vue2-leaflet';
import L from 'leaflet';
import VueLazyload from 'vue-lazyload';

import 'leaflet/dist/leaflet.css';
import './stories-map.scss';
import 'leaflet-fullscreen';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
Vue.component('l-control', LControl);

const setVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
setVh();
window.addEventListener('resize', setVh);

const getCenter = (coordinates) => [
  [
    Math.min(...coordinates.map((x) => x.latitude)),
    Math.min(...coordinates.map((x) => x.longitude)),
  ],
  [
    Math.max(...coordinates.map((x) => x.latitude)),
    Math.max(...coordinates.map((x) => x.longitude)),
  ],
];

const center = [21.6, 82.5];

async function renderMap(el) {
  Vue.use(VueLazyload);

  const onMobile = el.clientWidth <= 767;

  const zoom = (
    // eslint-disable-next-line no-nested-ternary
    el.clientWidth > 767 ? 6
      : el.clientWidth > 600 ? 5
        : 4
  );

  const app = new Vue({
    el,
    data: {
      message: 'Hello Vue!',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom,
      center,
      coordinates: [],
      categories: [],
      selectedCategory: null,
    },
    mounted() {
      const map = this.$refs.map.mapObject;
      map.addControl(new L.Control.Fullscreen({ position: 'topright' }));
    },
    computed: {
      visibleMarkers() {
        return this.selectedCategory
          ? this.coordinates.filter((c) => c.categories.includes(this.selectedCategory))
          : this.coordinates;
      },
    },
    methods: {
      onMapReady() {
        if (onMobile) {
          jQuery(this.$refs.categories).collapse();
        }
      },
      getIcon(coordinate) {
        return this.selectedCategory
          ? this.categories[this.selectedCategory].icon
          : this.categories[coordinate.categories[0]].icon;
      },
      selectCategory(category) {
        this.selectedCategory = this.selectedCategory !== category.cat_ID ? category.cat_ID : null;
      },
      showMarker(coordinate) {
        return !this.selectedCategory || coordinate.categories.includes(this.selectedCategory);
      },
      async fetchData() {
        const response = await wp.apiRequest({ path: 'vikalpsangam/v2/map' });

        this.categories = _
          .chain(response.categories)
          .map((category) => ({
            ...category,
            icon: L.divIcon({
              className: 'story-marker-icon',
              html: `<div style='background-color: ${category.color}'></div>`,
            }),
            menuItemStyle: {
              '--bullet-color': category.color,
            },
          }))
          .indexBy('cat_ID')
          .value();

        this.coordinates = Object.values(response.coordinates);
        this.center = new L.LatLngBounds(getCenter(this.coordinates)).getCenter();
      },
    },
  });

  app.fetchData();
}

window.renderMap = renderMap;
