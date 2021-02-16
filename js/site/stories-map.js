const categories = [
  'ECONOMICS AND TECHNOLOGIES',
  'ENERGY',
  'ENVIRONMENT AND ECOLOGY',
  'FOOD AND WATER',
  'HEALTH AND HYGIENE',
  'LEARNING AND EDUCATION',
  'LIVELIHOODS',
  'POLITICS',
  'SETTLEMENTS AND TRANSPORT',
  'SOCIETY, CULTURE AND PEACE',
  'OTHERS',
];

const colors = [
  '#a6cee3',
  '#1f78b4',
  '#b2df8a',
  '#33a02c',
  '#fb9a99',
  '#e31a1c',
  '#fdbf6f',
  '#ff7f00',
  '#cab2d6',
  '#6a3d9a',
  '#dddddd',
];

const colorIcon = (color) => {
  const styles = `
    background-color: ${color};
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 50%;
    display: block;`;

  return L.divIcon({

    html: `<span style="${styles}" />`,
  });
};

const icons = colors.map((color) => colorIcon(color));

const randomIcon = () => icons[Math.floor(Math.random() * icons.length)];


const INITIAL_ZOOM_LEVEL = 6;

const getBounds = (coordinates) => new L.LatLngBounds([
  [Math.min(...coordinates.map((x) => x.latitude)), Math.min(...coordinates.map((x) => x.longitude))],
  [Math.max(...coordinates.map((x) => x.latitude)), Math.max(...coordinates.map((x) => x.longitude))],
]);

function addAttribution(map) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

function addLegend(map, categories, selectCategory) {

	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function () {
    const div = L.DomUtil.create('div')
    debugger
    const labels = categories.map((category, i) => `
    <li data-category=${category.cat_ID} class="category" style="--bullet-color: ${colors[i]}">
        <div class="bullet"></div>
        ${category.name}
    </li>
    `
    )

    div.innerHTML = `<ul class="category-list">
      ${labels.join("")}
    </ul>`

    div.querySelectorAll(".category").forEach(category => {
      category.addEventListener("click", (e) => {
        e.preventDefault()
        const categoryId = category.dataset.category;
        console.log("Toggling category " + categoryId)
      })
    })


		return div;
	};

	legend.addTo(map);
}

function filterCategories (activateCategories, categories) {
  return []
}

async function renderMap(id) {

  const response = await fetch('/wp-json/vikalpsangam/v2/map');
  const responseJson = await response.json();
  const coordinates = Object.values(responseJson.coordinates);
  const categories = responseJson.categories;

  
  function selectCategory(selectedCategory) {
    for (const marker of this.markers) {
      const { categories } = marker.coordinate
      if (!selectedCategory || categories.includes(selectedCategory)) {
        marker.addTo(map)
      } else {
        try {
          marker.remove()  
        } catch (e) {
        }
      }
    }
  }
  
  

  const map = L.map(id, {
    center: getBounds(coordinates).getCenter(),
    zoom: INITIAL_ZOOM_LEVEL,
  });

  addAttribution(map);
  addLegend(map, categories, selectCategory);

  const markers = coordinates.map(
    (coordinate) => {
      const icon = randomIcon()
      const marker = L.marker([coordinate.latitude, coordinate.longitude], { icon });
      marker.coordinate = coordinate
      marker.bindPopup(`<a href="${coordinate.url}">${coordinate.title}</a>`);
      return marker;
    },
  );

  for (const marker of markers) {
    marker.addTo(map);
  }

  window.themap = map;
  window.markers = markers
}

window.renderMap = renderMap;
