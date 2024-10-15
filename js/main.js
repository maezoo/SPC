

// // // =================
// // // row2 =========
// const buttons = {
//     eat: document.querySelector('.sl_eat'),
//     drink: document.querySelector('.sl_drink'),
//     enjoy: document.querySelector('.sl_enjoy'),
// };

// const images = {
//     eat: document.querySelector('.eatImage'),
//     drink: document.querySelector('.drinkImage'),
//     enjoy: document.querySelector('.enjoyImage'),
// };

// const slides = {
//     eat: document.querySelector('.br_01'),
//     drink: document.querySelector('.br_02'),
//     enjoy: document.querySelector('.br_03'),
// };



// // // spc_now  ==============================
// const newsBtn = document.querySelector('.sl_news');
// const magazineBtn = document.querySelector('.sl_magazine');
// const snsBtn = document.querySelector('.sl_sns');

// const newsSlide = document.querySelector('.now_01');
// const magazineSlide = document.querySelector('.now_02');
// const snsSlide = document.querySelector('.now_03');

// function hideAllTexts() {
//     newsBtn.classList.remove('active');
//     magazineBtn.classList.remove('active');
//     snsBtn.classList.remove('active');
// }

// function hideAllSlides() {
//     newsSlide.classList.remove('move');
//     magazineSlide.classList.remove('move');
//     snsSlide.classList.remove('move');
// }

// window.addEventListener('load', function () {
//     newsBtn.classList.add('active');
//     newsSlide.classList.remove('move');
// });

// newsBtn.addEventListener('click', function () {
//     hideAllTexts();
//     hideAllSlides();
//     newsBtn.classList.add('active');
//     newsSlide.classList.add('move');
// });

// magazineBtn.addEventListener('click', function () {
//     hideAllTexts();
//     hideAllSlides();
//     magazineBtn.classList.add('active');
//     magazineSlide.classList.add('move');
// });

// snsBtn.addEventListener('click', function () {
//     hideAllTexts();
//     hideAllSlides();
//     snsBtn.classList.add('active');
//     snsSlide.classList.add('move');
// });

// // // =================
// // // =================
// // // =================
// // // =================
// // // =================
// // // =================
// const eatBtn = document.querySelector('.sl_eat');
// const drinkBtn = document.querySelector('.sl_drink');
// const enjoyBtn = document.querySelector('.sl_enjoy');

// const img_eat = document.querySelector('.eatImage');
// const img_drink = document.querySelector('.drinkImage');
// const img_enjoy = document.querySelector('.enjoyImage');

// const eatSlide = document.querySelector('.br_01');
// const drinkSlide = document.querySelector('.br_02');
// const enjoySlide = document.querySelector('.br_03');

// function hideAllImages() {
//     img_eat.classList.remove('show');
//     img_drink.classList.remove('show');
//     img_enjoy.classList.remove('show');
// }
// function hideAllTexts() {
//     eatBtn.classList.remove('active');
//     drinkBtn.classList.remove('active');
//     enjoyBtn.classList.remove('active');
// }
// function hideAllSlides() {
//     eatSlide.classList.remove('move');
//     drinkSlide.classList.remove('move');
//     enjoySlide.classList.remove('move');
// }
// window.addEventListener('load', function () {
//     img_eat.classList.add('show');
//     eatBtn.classList.add('active');
//     eatSlide.classList.remove('move');
// });

// eatBtn.addEventListener('click', function () {
//     hideAllImages();
//     hideAllTexts();
//     hideAllSlides();
//     img_eat.classList.add('show');
//     eatBtn.classList.add('active');
//     eatSlide.classList.add('move');
// });

// drinkBtn.addEventListener('click', function () {
//     hideAllImages();
//     hideAllTexts();
//     hideAllSlides();
//     img_drink.classList.add('show');
//     drinkBtn.classList.add('active');
//     drinkSlide.classList.add('move');
// });

// enjoyBtn.addEventListener('click', function () {
//     hideAllImages();
//     hideAllTexts();
//     hideAllSlides();
//     img_enjoy.classList.add('show');
//     enjoyBtn.classList.add('active');
//     enjoySlide.classList.add('move');
// });

// // // =================
// // //푸터 패밀리 =========
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
