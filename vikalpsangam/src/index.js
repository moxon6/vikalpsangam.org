import * as L from 'leaflet';
import MarkerCluster from 'leaflet.markercluster';
import 'bootstrap/js/transition';
import 'bootstrap/js/carousel';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.scss';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

async function renderMap(id) {
  const customIcon = new L.Icon({
    iconUrl,
    shadowUrl,
  });

  const mean = (arr) => arr.reduce((x, y) => x + y, 0) / arr.length;

  async function fetchCoordinates() {
    const response = await fetch('/wp-json/vikalpsangam/v1/map');
    const coordinatesMap = await response.json();
    return Object.values(coordinatesMap);
  }

  const INITIAL_ZOOM_LEVEL = 5;
  const coordinates = await fetchCoordinates();

  const map = L.map(id).setView([
    mean(coordinates.map((x) => x.latitude)),
    mean(coordinates.map((x) => x.longitude)),
  ], INITIAL_ZOOM_LEVEL);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const markers = new MarkerCluster.MarkerClusterGroup();

  coordinates.forEach((coordinate) => {
    const marker = L.marker([coordinate.latitude, coordinate.longitude], { icon: customIcon });
    marker.bindPopup(`<a href="${coordinate.url}">${coordinate.title}</a>`);
    markers.addLayer(marker);
  });
  map.addLayer(markers);
}

function fixCarouselHeight() {
  if ($('.featured-list').length > 0 && $('.featured-list').offset().left > 200) {
    const featureListHeight = $('.featured-list').innerHeight();
    $('.fill-image').css('height', featureListHeight);
  }
}

$(window).load(() => {
  fixCarouselHeight();
  $('.carousel').carousel({
    interval: 5000,
  });
});

window.renderMap = renderMap;
