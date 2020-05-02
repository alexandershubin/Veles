$('.slider__list--subheader').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:1,
      nav: false
    },
    768:{
      items: 1,
      nav: true,
      dots: false
    }
  }
})