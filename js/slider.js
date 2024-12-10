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


// document.addEventListener('DOMContentLoaded', () => {
//     const slides = document.querySelectorAll('.swiper-slide');
//     const prevButton = document.querySelector('.tab-prev');
//     const nextButton = document.querySelector('.tab-next');
//     let currentIndex = 0;

//     // 초기 슬라이드 활성화
//     slides[currentIndex].classList.add('active');

//     // 슬라이드를 업데이트하는 함수
//     const updateSlide = (newIndex) => {
//         slides[currentIndex].classList.remove('active'); // 현재 슬라이드 비활성화
//         currentIndex = newIndex; // 인덱스 업데이트
//         slides[currentIndex].classList.add('active'); // 새 슬라이드 활성화
//     };

//     // 이전 슬라이드로 이동
//     prevButton.addEventListener('click', () => {
//         const newIndex = (currentIndex - 1 + slides.length) % slides.length; // 이전 슬라이드로 순환
//         updateSlide(newIndex);
//     });

//     // 다음 슬라이드로 이동
//     nextButton.addEventListener('click', () => {
//         const newIndex = (currentIndex + 1) % slides.length; // 다음 슬라이드로 순환
//         updateSlide(newIndex);
//     });
// });

// ===============================
// product slide =================



// document.addEventListener('DOMContentLoaded', () => {
//     const nextBtn = document.querySelector('.tab-next');
//     const prevBtn = document.querySelector('.tab-prev');
//     const contents = document.querySelectorAll('.cont');
//     let currentIndex = 0;

//     // 초기 활성화
//     contents[currentIndex].classList.add('active');

//     // 콘텐츠 업데이트 함수
//     const updateContent = (newIndex) => {
//         contents[currentIndex].classList.remove('active'); // 현재 콘텐츠 비활성화
//         currentIndex = newIndex; // 새로운 인덱스로 업데이트
//         contents[currentIndex].classList.add('active'); // 새 콘텐츠 활성화
//     };

//     // 다음 콘텐츠로 이동
//     nextBtn.addEventListener('click', () => {
//         const newIndex = (currentIndex + 1) % contents.length; // 다음 인덱스 계산
//         updateContent(newIndex);
//     });

//     // 이전 콘텐츠로 이동
//     prevBtn.addEventListener('click', () => {
//         const newIndex = (currentIndex - 1 + contents.length) % contents.length; // 이전 인덱스 계산
//         updateContent(newIndex);
//     });
// });









// const slides = document.querySelectorAll('.swiper-slide');

// slides.forEach((tab, index) => {
//     tab.addEventListener('click', function () {
//         slides.forEach(t => t.classList.remove('active'));
//         tabArrows.forEach(arrow => arrow.classList.remove('show'));

//         this.classList.add('active');
//         tabArrows[index].classList.add('show');

//         contents.forEach(content => content.style.display = 'none');

//         const tabId = this.getAttribute('data-tab');
//         const activeTab = document.getElementById(tabId);
//         activeTab.style.display = 'flex';

//         if (tabId === 'tab-1') {
//             nextBtn.style.display = 'block';
//             prevBtn.style.display = 'block';
//         } else {
//             nextBtn.style.display = 'none';
//             prevBtn.style.display = 'none';
//         }
//     });
// });

// tabLis[0].classList.add('active');
// tabArrows[0].classList.add('show');
// contents.forEach(content => content.style.display = 'none');
// document.getElementById('tab-1').style.display = 'flex';
// nextBtn.style.display = 'block';
// prevBtn.style.display = 'block';




































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
