const navBar = document.querySelector('#mega-menu-wrap-header-menu');
const input = document
  .querySelector('.search-box-input');

const submitButton = document
  .querySelector('.search-box-submit-button');

submitButton
  .addEventListener('click', (e) => {
    if (!navBar.hasAttribute('menu-open')) {
      e.preventDefault();
      navBar.setAttribute('menu-open', 'true');
      input.focus();
    }
  });

input
  .addEventListener('blur', (e) => {
    if (e.relatedTarget !== submitButton) {
      navBar.removeAttribute('menu-open');
    }
  });
