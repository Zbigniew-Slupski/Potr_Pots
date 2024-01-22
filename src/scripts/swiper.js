'use strict';

const swiper = new Swiper('.image-slider', {
  navigation: {
    nextE1: 'swiper-button-next',
    prevE1: 'swiper-button-prev',
  },
  pagination: {
	  el: '.swiper-pagination'
  },
});
