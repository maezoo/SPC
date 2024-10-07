// ===========================
//푸터 패밀리 =========
const plusBtn = document.querySelector('.select');
const selectBox = document.querySelector('.select_wrap');
const verticalStick = document.querySelector('.ver_rod');

function familySite() {
    plusBtn.addEventListener('click', function () {
        // selectBox의 'show' 클래스 토글
        const stickVisible = selectBox.classList.toggle('show'); // show 클래스를 토글하고 그 결과를 isVisible에 저장

        // isVisible이 true일 경우 verticalStick 숨기기, false일 경우 보이기
        verticalStick.style.display = stickVisible ? 'none' : 'block';
    });
}
familySite();
