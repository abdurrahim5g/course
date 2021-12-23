$(document).ready(function () {
  // Mixit Up js
  var mixer = mixitup(".project-filter");

  // testmonial slider
  $("#testmonial-slider").slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "20%",
    infinite: true,
    // cssEase: "linear",
    speed: 500,
    prevArrow: "<img src='../assets/images/arrow-left.png'>",
    nextArrow:
      "<img src='../assets/images/arrow-right.png' class='arrow-right'>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerPadding: "10%",
        },
      },
    ],
  });
});
