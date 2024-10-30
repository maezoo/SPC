// var happySwiper = new Swiper(".Happy_mySwiper", {
//     // effect: "fade",
//     // pagination: {
//     //     el: ".swiper-pagination",
//     //     type: "fraction",
//     // },
//     navigation: {
//         nextEl: ".happy_btn_next",
//         prevEl: ".happy_btn_prev",
//     },
//     loop: true,
// });

var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,

});


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
