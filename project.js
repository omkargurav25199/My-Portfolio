var swiper = new Swiper(".slide-content", {
    slidesPerView:3,
    spaceBetween:30,
    slidesPerGroup:3,
    loop: true,
    loopFillGroupWithBlank: true,
    pegination: {
        el: ".swiper-pegination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

