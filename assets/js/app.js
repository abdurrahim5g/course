$(document).ready(function () {
  // Mixit Up js
  var mixer = mixitup(".project-filter");

  // Mobile Menu control
  $("#mobile-menu-icon").click(function () {
    $("#menu").toggleClass("active");
    $(this).toggleClass("cross");
  });

  // testmonial slider
  $("#testmonial-slider").slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "20%",
    infinite: true,
    // cssEase: "linear",
    speed: 500,
    prevArrow: "<img src='assets/images/arrow-left.png'>",
    nextArrow: "<img src='assets/images/arrow-right.png' class='arrow-right'>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerPadding: "10%",
        },
      },
    ],
  });

  // Typed js
  var typed = new Typed("#text-animation", {
    strings: ["Web Designer", "Trainer", "YouTubar", "WordPress Developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    fade: true,
    smartBackspace: true,
    cursorChar: ".",
    backDelay: 2000,
    startDelay: 200,
  });

  // smooth sctoll
  $("#menu ul li a, .actio-btn a").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    var fromTop = $(id).offset().top - 115;

    $("html").animate({
      scrollTop: fromTop,
    });

    // togge active menu
    $("#menu ul li a").removeClass("active");
    $(this).addClass("active");
    $("#menu").removeClass("active");
    $("#mobile-menu-icon").removeClass("cross");
  });

  $("#to_top").click(function () {
    // console.log("hello");
    $("html").animate({
      scrollTop: 0,
    });
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
      $("#to_top").addClass("to_top_show");
    } else {
      $("#to_top").removeClass("to_top_show");
    }
  });
});
