// =================
// row2 ver_2 =========

// const buttons = [
//     { btn: document.querySelector('.sl_news'), img: document.querySelector('.newsImage'), slide: document.querySelector('.br_01') },
//     { btn: document.querySelector('.sl_magazine'), img: document.querySelector('.magazineImage'), slide: document.querySelector('.br_02') },
//     { btn: document.querySelector('.sl_sns'), img: document.querySelector('.snsImage'), slide: document.querySelector('.br_03') }
// ];

// function resetAll() {
//     buttons.forEach(({ img, btn, slide }) => {
//         img.classList.remove('show');
//         btn.classList.remove('active');
//         slide.classList.remove('move');
//     });
// }

// window.addEventListener('load', function () {
//     buttons[0].img.classList.add('show');
//     buttons[0].btn.classList.add('active');
//     buttons[0].slide.classList.remove('move');
// });

// buttons.forEach(({ btn, img, slide }) => {
//     btn.addEventListener('click', function () {
//         resetAll();
//         img.classList.add('show');
//         btn.classList.add('active');
//         slide.classList.add('move');
//     });
// });

// =================
// row2 ver_1 =========
const eatBtn = document.querySelector('.sl_eat');
const drinkBtn = document.querySelector('.sl_drink');
const enjoyBtn = document.querySelector('.sl_enjoy');

const img_eat = document.querySelector('.eatImage');
const img_drink = document.querySelector('.drinkImage');
const img_enjoy = document.querySelector('.enjoyImage');

const eatSlide = document.querySelector('.br_01');
const drinkSlide = document.querySelector('.br_02');
const enjoySlide = document.querySelector('.br_03');

function hideAllImages() {
    img_eat.classList.remove('show');
    img_drink.classList.remove('show');
    img_enjoy.classList.remove('show');
}
function hideAllTexts() {
    eatBtn.classList.remove('active');
    drinkBtn.classList.remove('active');
    enjoyBtn.classList.remove('active');
}
function hideAllSlides() {
    eatSlide.classList.remove('move');
    drinkSlide.classList.remove('move');
    enjoySlide.classList.remove('move');
}
window.addEventListener('load', function () {
    img_eat.classList.add('show');
    eatBtn.classList.add('active');
    eatSlide.classList.remove('move');
});

eatBtn.addEventListener('click', function () {
    hideAllImages();
    hideAllTexts();
    hideAllSlides();
    img_eat.classList.add('show');
    eatBtn.classList.add('active');
    eatSlide.classList.add('move');
});

drinkBtn.addEventListener('click', function () {
    hideAllImages();
    hideAllTexts();
    hideAllSlides();

    img_drink.classList.add('show');
    drinkBtn.classList.add('active');
    drinkSlide.classList.add('move');
});

enjoyBtn.addEventListener('click', function () {
    hideAllImages();
    hideAllTexts();
    hideAllSlides();

    img_enjoy.classList.add('show');
    enjoyBtn.classList.add('active');
    enjoySlide.classList.add('move');
});



// spc_now  ==============================


const newsBtn = document.querySelector('.sl_news');
const magazineBtn = document.querySelector('.sl_magazine');
const snsBtn = document.querySelector('.sl_sns');

const newsSlide = document.querySelector('.now_01');
const magazineSlide = document.querySelector('.now_02');
const snsSlide = document.querySelector('.now_03');



function hideAllImages() {
    newsSlide.classList.remove('show');
    magazineSlide.classList.remove('show');
    snsSlide.classList.remove('show');
}

// function hideAllTexts() {
//     newsBtn.classList.remove('active');
//     magazineBtn.classList.remove('active');
//     snsBtn.classList.remove('active');
// }

function hideAllSlides() {
    newsSlide.classList.remove('move');
    magazineSlide.classList.remove('move');
    snsSlide.classList.remove('move');
}


// ============
window.addEventListener('load', function () {
    newsSlide.classList.add('show'); // 처음에 newsSlide 보여주기
    newsBtn.classList.add('active');
    newsSlide.classList.remove('move');
});

// newsBtn 클릭 이벤트
newsBtn.addEventListener('click', function () {
    hideAllImages();
    hideAllTexts();
    hideAllSlides();
    newsSlide.classList.add('show');
    newsBtn.classList.add('active');
    newsSlide.classList.add('move');
});

// magazineBtn 클릭 이벤트
magazineBtn.addEventListener('click', function () {
    hideAllImages();
    hideAllTexts();
    hideAllSlides();
    magazineSlide.classList.add('show');
    magazineBtn.classList.add('active');
    magazineSlide.classList.add('move');
});

// snsBtn 클릭 이벤트
snsBtn.addEventListener('click', function () {
    hideAllImages();
    hideAllTexts();
    hideAllSlides();
    snsSlide.classList.add('show');
    snsBtn.classList.add('active');
    snsSlide.classList.add('move');
});














// =================
//푸터 패밀리 =========
const plusBtn = document.querySelector('.select');
const selectBox = document.querySelector('.select_wrap');
const verticalStick = document.querySelector('.ver_rod');

function familySite() {
    plusBtn.addEventListener('click', function () {
        const stickVisible = selectBox.classList.toggle('show');
        verticalStick.style.display = stickVisible ? 'none' : 'block';
    });
}
familySite();

