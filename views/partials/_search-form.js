const navBar = document.querySelector('#mega-menu-wrap-header-menu');
const input = document
  .querySelector('.search-box-input');

const button = document
  .querySelector('search-box-submit-button');

document
  .querySelector('.search-box-submit-button')
  .addEventListener('click', (e) => {
    if (!navBar.hasAttribute('menu-open')) {
      e.preventDefault();
      navBar.setAttribute('menu-open', 'true');
      input.focus();
    }
  });

const form = document.querySelector('.search-box');

button.addEventListener('click', () => {
  if (navBar.hasAttribute('menu-open')) {
    form.submit();
  }
});

input.addEventListener('blur', () => {
  navBar.removeAttribute('menu-open');
});
