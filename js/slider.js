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

var swiper = new Swiper(".brand-swiper", {
    effect: "fade",
    // pagination: {
    //     el: ".swiper-pagination",
    //     type: "fraction",
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    loop: true,
    keyboard: true,

});


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.swiper-slide');
    const prevButton = document.querySelector('.tab-prev');
    const nextButton = document.querySelector('.tab-next');
    let currentIndex = 0;

    // 초기 슬라이드 활성화
    slides[currentIndex].classList.add('active');

    // 슬라이드를 업데이트하는 함수
    const updateSlide = (newIndex) => {
        slides[currentIndex].classList.remove('active'); // 현재 슬라이드 비활성화
        currentIndex = newIndex; // 인덱스 업데이트
        slides[currentIndex].classList.add('active'); // 새 슬라이드 활성화
    };

    // 이전 슬라이드로 이동
    prevButton.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length; // 이전 슬라이드로 순환
        updateSlide(newIndex);
    });

    // 다음 슬라이드로 이동
    nextButton.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % slides.length; // 다음 슬라이드로 순환
        updateSlide(newIndex);
    });
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
