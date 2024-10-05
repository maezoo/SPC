// ===========================
//푸터 패밀리 =========
const pop_btn = document.querySelector('.top_zone_btn');
const pop = document.querySelector('.top_pop_up');
const btnSpan = pop_btn.querySelector('span');
const zoneDown = document.querySelector('.down_zone');
const popupHeight = 226;

function top_Popup() {
    pop_btn.addEventListener('click', function () {
        pop.classList.toggle('show');

        if (pop.classList.contains('show')) {
            btnSpan.textContent = '팝업존 닫기'; moveDown();
        } else {
            btnSpan.textContent = '팝업존 열기'; moveUp();
        }
    });
}
function moveDown() {
    zoneDown.style.marginTop = `${popupHeight}px`;
}

function moveUp() {
    zoneDown.style.marginTop = '';
}

top_Popup();