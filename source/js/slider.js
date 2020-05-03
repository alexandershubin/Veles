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
      dots: false,
      navText: ['Предыдущая', 'Следующая']
    }
  }
});

$('.slider__list--gallery').owlCarousel({
  loop:true,
  margin:10,
  responsive:{
    0:{
      items:1,
      nav: false
    },
    768:{
      margin:30,
      items: 3,
      nav: true,
      dots: false,
      center: true,
      navText: ['&#9658;\t', '&#9658;\t']
    },
    1200:{
      margin:30,
      items: 4,
      nav: true,
      dots: false
    }
  }
});
