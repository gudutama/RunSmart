// Slider
$(".slider__wrapper").slick({
  /* autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  fade: false,
  infinite: true,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true, */
  prevArrow:
    "<button type='button' class='slick-prew'><img src='img/slider/left.png' alt=''/></button>",
  nextArrow:
    "<button type='button' class='slick-next'><img src='img/slider/right.png' alt=''/></button>",
  responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
});

// Toggle card
function toggleCard(className) {
  $(className).each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".catalog__item-front").eq(i).toggleClass("catalog__item-front_active");
      $(".catalog__item-back").eq(i).toggleClass("catalog__item-back_active");
    });
  });
}

toggleCard(".catalog__item-link");
toggleCard(".catalog__item-link-back");

// Tabs
$(".catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
  $(this)
    .addClass("catalog__tab_active")
    .siblings()
    .removeClass("catalog__tab_active")
    .closest(".catalog__wrapper")
    .find(".catalog__content")
    .removeClass("catalog__content_active")
    .eq($(this).index())
    .addClass("catalog__content_active");
});

// Modals
$("[data-modal=modal-consultation]").on("click", function () {
  $(".overlay, #modal-consultation").fadeIn();
  $("body").addClass("no-scroll");
});

$("[data-modal=modal-buy]").on("click", function () {
  $(".overlay, #modal-buy").fadeIn();
  $("body").addClass("no-scroll");
});

$(".modal__close").on("click", function () {
  $(".overlay, .modal").fadeOut();
  $("body").removeClass("no-scroll");
});

$(document).mouseup(function (e) {
  var div = $(".modal, .modal__close");
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    $(".overlay, .modal").fadeOut();
    $("body").removeClass("no-scroll");
  }
});
