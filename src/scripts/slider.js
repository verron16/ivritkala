let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1
        },
        560: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1
        },
        1180: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 3
        }
    }
  });