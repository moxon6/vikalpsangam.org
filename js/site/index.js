
async function renderMap(id) {
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

  const markers = L.markerClusterGroup();

  coordinates.forEach((coordinate) => {
    const marker = L.marker([coordinate.latitude, coordinate.longitude]);
    marker.bindPopup(`<a href="${coordinate.url}">${coordinate.title}</a>`);
    markers.addLayer(marker);
  });
  map.addLayer(markers);
}

window.renderMap = renderMap;

const setupForm = () => {
  const commentTextarea = document.querySelector('textarea#comment')
  if (commentTextarea) {
    commentTextarea.setAttribute("rows", 4)
    commentTextarea.setAttribute("placeholder", "Your comment")  
    autosize(commentTextarea);
  }
  
  const author = document.querySelector('input#author')
  if (author) {
    author.setAttribute("placeholder", "Name *")
  }
  
  const email = document.querySelector('input#email')
  if (email) {
    email.setAttribute("placeholder", "Email *")
  }

  const commentForm = document.querySelector("form#commentform");

  commentForm.onsubmit = async (e) => {
    e.preventDefault();
    
    await fetch('/wp-comments-post.php', {
      method: 'POST',
      body: new FormData(commentForm)
    });

    commentForm.reset()
    
    updateFormComments();
    return false;
  };
}

async function updateFormComments() {
  const postId = document.querySelector(".post").id.split("-")[1]
  const response = await wp.apiRequest({ path: `/vikalpsangam/v1/comments/${postId}`})

  diff.outerHTML(
    document.querySelector("#article-comments"),
    new DOMParser().parseFromString(response, 'text/html').body.innerHTML
  )
  setupForm();
}

jQuery(window).ready(setupForm)