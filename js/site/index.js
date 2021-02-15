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


async function renderMap(id) {

  async function fetchCoordinates() {
    const response = await fetch('/wp-json/vikalpsangam/v1/map');
    const coordinatesMap = await response.json();
    return Object.values(coordinatesMap);
  }

  const INITIAL_ZOOM_LEVEL = 6;
  const coordinates = await fetchCoordinates();

  const bounds = new L.LatLngBounds([
    [ Math.min(...coordinates.map(x => x.latitude)), Math.min(...coordinates.map(x => x.longitude)) ],
    [ Math.max(...coordinates.map(x => x.latitude)), Math.max(...coordinates.map(x => x.longitude)) ]
  ])

  const map = L.map(id, {
    center: bounds.getCenter(),
    zoom: INITIAL_ZOOM_LEVEL
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);


	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

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

  const markers = L.markerClusterGroup({
    maxClusterRadius: 0
  });

  coordinates.forEach((coordinate) => {
    const marker = L.marker([coordinate.latitude, coordinate.longitude], { icon: randomIcon() });
    marker.bindPopup(`<a href="${coordinate.url}">${coordinate.title}</a>`);
    marker.addTo(map)
  });
  //  map.addLayer(markers);

}

window.renderMap = renderMap;

const parseHTMLEntities = (str) => jQuery('<textarea/>').html(str).text();

const setupForm = () => {
  jQuery('#article-comments').removeClass('loading');

  const commentTextarea = document.querySelector('textarea#comment');
  if (commentTextarea) {
    commentTextarea.setAttribute('rows', 4);
    commentTextarea.setAttribute('placeholder', 'Your comment');
    commentTextarea.onkeydown = () => commentTextarea.setCustomValidity('');
    autosize(commentTextarea);
  }

  const author = document.querySelector('input#author');
  if (author) {
    author.setAttribute('placeholder', 'Name *');
  }

  const email = document.querySelector('input#email');
  if (email) {
    email.setAttribute('placeholder', 'Email *');
  }

  const commentForm = document.querySelector('form#commentform');
  const submitMessage = document.querySelector('#submit-message');

  commentForm.onsubmit = async (e) => {
    submitMessage.style.display = 'none';

    jQuery('#article-comments').addClass('loading');

    e.preventDefault();

    const formValues = Object.fromEntries(new FormData(commentForm));

    const comments = new wp.api.collections.Comments();

    await comments.create({
      content: formValues.comment,
      parent: formValues.comment_parent,
      post: formValues.comment_post_ID,
      author_name: formValues.author,
      author_email: formValues.email,
    }, {
      error(model, response) {
        jQuery('#article-comments').removeClass('loading');
        commentTextarea.setCustomValidity(parseHTMLEntities(response.responseJSON.message));
        commentTextarea.reportValidity();
      },
      success(model, response) {
        commentForm.reset();

        if (response.status === 'approved') {
          updateFormComments(); // eslint-disable-line no-use-before-define
        } else {
          submitMessage.style.display = 'unset';
          submitMessage.innerText = 'Comment submitted successfully, pending moderation';
        }
      },
    });

    return false;
  };
};

async function updateFormComments() {
  const postId = document.querySelector('.post').id.split('-')[1];
  const response = await wp.apiRequest({ path: `/vikalpsangam/v1/comments/${postId}` });

  diff.outerHTML(
    document.querySelector('#article-comments'),
    new DOMParser().parseFromString(response, 'text/html').body.innerHTML,
  );
  setupForm();
}

jQuery(() => {
  if (jQuery('form#commentform').length) {
    setupForm();
  }
});

jQuery(() => {
  if (jQuery('#mainSlider').length) {
    jQuery('#mainSlider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      mobileFirst: true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }
});
