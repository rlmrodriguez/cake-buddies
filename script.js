$("document").ready(function () {
  function toggleScroll() {
    if ($(".menu-toggle").hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }
  }
  /* Navbar Menu Toggle */
  $(".menu-toggle").on("click", () => {
    $(".menu-toggle").toggleClass("active");
    toggleScroll();
  });

  $(".js-scroll-trigger").on("click", () => {
    $(".navbar-collapse").collapse("hide");
    $(".menu-toggle").removeClass("active");
    toggleScroll();
  });

  $(".info-box").on("mouseover", function () {
    $(".info-box:nth-child(1)").removeClass("active");
    $(this).addClass("active");
  });

  /* Owl Carousel */
  $(".creations-carousel").owlCarousel({
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
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });
});
