const randomColor = () => '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

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

const icons = Array(20).fill(0).map(_ => colorIcon(randomColor()))

const randomIcon = () => icons[Math.floor(Math.random()*icons.length)];


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

  const markers = coordinates.map((coordinate) => {
    const marker = L.marker([coordinate.latitude, coordinate.longitude], { icon: randomIcon() });
    marker.bindPopup(`<a href="${coordinate.url}">${coordinate.title}</a>`);
    return marker
  });
  // map.addLayer(L.layerGroup(markers));
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
