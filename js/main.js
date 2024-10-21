
// // // =================
// // // brand ===========
const eatBtn = document.querySelector('.sl_eat');
const drinkBtn = document.querySelector('.sl_drink');
const enjoyBtn = document.querySelector('.sl_enjoy');

const img_eat = document.querySelector('.eatImage');
const img_drink = document.querySelector('.drinkImage');
const img_enjoy = document.querySelector('.enjoyImage');

const eatSlide = document.querySelector('.br_01');
const drinkSlide = document.querySelector('.br_02');
const enjoySlide = document.querySelector('.br_03');

function hideAllTexts() {
    eatBtn.classList.remove('active');
    drinkBtn.classList.remove('active');
    enjoyBtn.classList.remove('active');
}

function hideAllImages() {
    img_eat.classList.remove('show');
    img_drink.classList.remove('show');
    img_enjoy.classList.remove('show');
}

function hideAllSlides() {
    eatSlide.classList.remove('move');
    drinkSlide.classList.remove('move');
    enjoySlide.classList.remove('move');
}

window.addEventListener('load', function () {
    eatBtn.classList.add('active');
    img_eat.classList.add('show');
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
// // =================
// // spc_now  ========
const newsBtn = document.querySelector('.sl_news');
const magazineBtn = document.querySelector('.sl_magazine');
const snsBtn = document.querySelector('.sl_sns');

const newsSlide = document.querySelector('.now_01');
const magazineSlide = document.querySelector('.now_02');
const snsSlide = document.querySelector('.now_03');

newsBtn.classList.add('active');
newsSlide.classList.add('move');

function showSlide(slideToShow, btnToActivate) {
    [newsBtn, magazineBtn, snsBtn].forEach((btn) => {
        btn.classList.toggle('active', btn === btnToActivate);
    });

    [newsSlide, magazineSlide, snsSlide].forEach((slide) => {
        slide.classList.toggle('move', slide === slideToShow);
    });
}

newsBtn.addEventListener('click', () => showSlide(newsSlide, newsBtn));
magazineBtn.addEventListener('click', () => showSlide(magazineSlide, magazineBtn));
snsBtn.addEventListener('click', () => showSlide(snsSlide, snsBtn));




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
