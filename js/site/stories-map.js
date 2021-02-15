const randomColor = () => colors[Math.floor(Math.random()*colors.length)];

const colorIcon = (color) => {

  const styles = `
    background-color: ${color};
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 50%;
    display: block;`
  
  return L.divIcon({

    html: `<span style="${styles}" />`
  })

}

const categories = [
  "ECONOMICS AND TECHNOLOGIES",
  "ENERGY",
  "ENVIRONMENT AND ECOLOGY",
  "FOOD AND WATER",
  "HEALTH AND HYGIENE",
  "LEARNING AND EDUCATION",
  "LIVELIHOODS",
  "POLITICS",
  "SETTLEMENTS AND TRANSPORT",
  "SOCIETY, CULTURE AND PEACE",
  "OTHERS"
]

const colors = [
  "#a6cee3",
  "#1f78b4",
  "#b2df8a",
  "#33a02c",
  "#fb9a99",
  "#e31a1c",
  "#fdbf6f",
  "#ff7f00",
  "#cab2d6",
  "#6a3d9a",
  "#dddddd",
]

const icons = colors.map(color => colorIcon(color))

const randomIcon = () => icons[Math.floor(Math.random()*icons.length)];

async function fetchCoordinates() {
  const response = await fetch('/wp-json/vikalpsangam/v2/map');
  const coordinatesMap = await response.json();
  return Object.values(coordinatesMap);
}

const INITIAL_ZOOM_LEVEL = 6;

const getBounds = coordinates => new L.LatLngBounds([
  [ Math.min(...coordinates.map(x => x.latitude)), Math.min(...coordinates.map(x => x.longitude)) ],
  [ Math.max(...coordinates.map(x => x.latitude)), Math.max(...coordinates.map(x => x.longitude)) ]
])

function addAttribution(map) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

function addLegend(map) {

	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function () {
    const div = L.DomUtil.create('div')
    const labels = categories.map((category, i) => 
      `<li class="category" style="--bullet-color: ${colors[i]}">
        <div class="bullet"></div>
        ${category}
      </li>
      `
    )

    div.innerHTML = `<ul class="category-list">
      ${labels.join("")}
    </ul>`

		return div;
	};

	legend.addTo(map);
}

async function renderMap(id) {

  const coordinates = await fetchCoordinates();

  const map = L.map(id, {
    center: getBounds(coordinates).getCenter(),
    zoom: INITIAL_ZOOM_LEVEL
  });

  addAttribution(map)
  addLegend(map)


  coordinates.forEach((coordinate) => {
    const marker = L.marker([coordinate.latitude, coordinate.longitude], { icon: randomIcon() });
    marker.bindPopup(`<a href="${coordinate.url}">${coordinate.title}</a>`);
    marker.addTo(map)
  });
  window.themap = map
}

window.renderMap = renderMap;