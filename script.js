$('document').ready(function () {
  /* Navbar Menu Toggle */
  $('.menu-toggle').on('click', () => {
    $('.menu-toggle').toggleClass('active');
  });

  $('.js-scroll-trigger').on('click', () => {
    $('.navbar-collapse').collapse('hide');
    $('.menu-toggle').removeClass('active');
  });

  /* Owl Carousel */
  $('.products-crsl').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });

  //Scroll to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
});
