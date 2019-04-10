import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
const header = document.querySelector('.header');

Vue.use(VueScrollTo, {
  container: "body",
  duration: 2000,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: function(){
    header.classList.remove('header__active');
  },
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  el: '#scroll--header',
  methods: {
  }
});

new Vue({
  el: '#scroll--arrow',
  methods: {
  }
});

new Vue({
  el: '#scroll--footer',
  methods: {
  }
});
