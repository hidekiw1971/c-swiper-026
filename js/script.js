jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  const xxSwiperMain = new Swiper(".xxSwiperMain", {
    loop: "true",
    loopedSlides: 9,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
    },
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const xxSwiperThumbs = new Swiper(".xxSwiperThumbs", {
    spaceBetween: 1,
    loop: true,
    loopedSlides: 9,
    slidesPerView: 8,
    centeredSlides: true,
    thumbs: {},
  });
  xxSwiperMain.controller.control = xxSwiperThumbs;
  xxSwiperThumbs.controller.control = xxSwiperMain;

  // ↓削除不可
});
