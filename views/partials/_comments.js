import autosize from 'https://esm.sh/autosize';
import diff from 'https://esm.sh/diffhtml';

const parseHTML = (str) => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = str;
  return textarea.innerText;
};

/**
 * @param {HTMLFormElement} form
 */
function setupForm(form) {
  const commentTextarea = form.querySelector('textarea');
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

  const submitMessage = document.querySelector('.comments__submit-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitMessage.style.display = 'none';

    const formValues = Object.fromEntries(new FormData(form));
    const comments = new wp.api.collections.Comments();

    await comments.create({
      content: formValues.comment,
      parent: formValues.comment_parent,
      post: formValues.comment_post_ID,
      author_name: formValues.author,
      author_email: formValues.email,
    }, {
      error(model, response) {
        commentTextarea.setCustomValidity(parseHTML(response.responseJSON.message));
        commentTextarea.reportValidity();
      },
      success(model, response) {
        form.reset();

        if (response.status === 'approved') {
          updateFormComments(form); // eslint-disable-line no-use-before-define
        } else {
          submitMessage.style.display = 'unset';
          submitMessage.innerText = 'Comment submitted successfully, pending moderation';
        }
      },
    });

    return false;
  });
}

async function updateFormComments(form) {
  const postId = document.querySelector('.post').id.split('-')[1];
  const response = await wp.apiRequest({ path: `/vikalpsangam/v1/comments/${postId}` });

  diff.outerHTML(
    document.querySelector('.comments'),
    new DOMParser().parseFromString(response, 'text/html').body.innerHTML,
  );
  setupForm(form);
}

const form = document.querySelector('form#commentform');

if (form) {
  setupForm(form);
}
