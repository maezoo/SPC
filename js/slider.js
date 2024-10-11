// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     autoplay: {
//         delay: 1000, // 3초마다 자동 재생
//         disableOnInteraction: false // 사용자 상호 작용 후에도 자동 재생 유지
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     keyboard: true,
// });

var swiper = new Swiper(".mySwiper", {
    keyboard: true,
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

var swiper = new Swiper(".mySwiper_2", {
    keyboard: true,
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