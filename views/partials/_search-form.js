const navBar = document.querySelector('#mega-menu-wrap-header-menu');
const input = document
  .querySelector('.search-box-input');

document
  .querySelector('.search-box-submit-button')
  .addEventListener('click', (e) => {
    if (!navBar.hasAttribute('menu-open')) {
      e.preventDefault();
      navBar.setAttribute('menu-open', 'true');
      input.focus();
    }
  });

input
  .addEventListener('blur', () => {
    navBar.removeAttribute('menu-open');
  });
