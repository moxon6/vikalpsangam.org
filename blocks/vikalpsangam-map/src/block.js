async function fetchCoordinates() {
  const response = await fetch('/wp-json/vikalpsangam/v1/map');
  const coordinatesMap = await response.json();
  return Object.values(coordinatesMap);
}

const mean = (arr) => arr.reduce((x, y) => x + y, 0) / arr.length;

const averageLocation = coordinates => [
  mean(coordinates.map((x) => x.latitude)),
  mean(coordinates.map((x) => x.longitude)),
]

const INITIAL_ZOOM_LEVEL = 5;

async function renderVikalpsangamMap(mapNode) {  
    const coordinates = await fetchCoordinates();
  
    if (mapNode.querySelector(".loader")) {
      mapNode.querySelector(".loader").remove()
    }

    const map = L.map(mapNode).setView(
      averageLocation(coordinates), 
      INITIAL_ZOOM_LEVEL
    );
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  
    const markers = L.markerClusterGroup();
  
    coordinates.forEach((coordinate) => {
      const marker = L.marker([coordinate.latitude, coordinate.longitude]);
      marker.bindPopup(`<a href="${coordinate.url}">${coordinate.title}</a>`);
      markers.addLayer(marker);
    });
    map.addLayer(markers);
}

window.onload = () => document.querySelectorAll(".vikalp-leaflet-block")
  .forEach(renderVikalpsangamMap)