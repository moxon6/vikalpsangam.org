

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
