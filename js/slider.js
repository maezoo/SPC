var happySwiper = new Swiper(".Happy-swiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".happy_btn_next",
        prevEl: ".happy_btn_prev",
        clickable: true,
    },
    loop: true,
    autoplay: true,

});
// ================================================

var swiper = new Swiper(".brand-swiper", {
    effect: "fade",
    navigation: {
        nextEl: '.tab-next',
        prevEl: '.tab-prev',
        clickable: true,
    },
    loop: true,
});

// ================================================
var swiper_2 = new Swiper(".mySwiper_2", {
    effect: "fade",
    pagination: {
        el: ".pagination_btn",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
    loop: true,
});
