import Vue from 'vue';
import App from './App.vue';

window.renderMap = (el) => new Vue({
  render: (createElement) => createElement(App),
}).$mount(el);
