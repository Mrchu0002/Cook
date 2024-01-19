const $btn = document.querySelectorAll('#main2>#course>.button>ul>li>a');
const $mainSlide = document.querySelectorAll('#main>div');
const $subSlide = document.querySelectorAll('#main2 #course .cos div');
const $moveSlideTop = document.querySelector('body>p.top>a')
const $moveSlideBottom = document.querySelector('body>p.bottom>a')
const $screen =document.querySelector('#main');


let nowIdx = 0; // 현재 보여지고 있는 슬라이드의 인덱스 번호
let oldIdx = nowIdx; // 직전

console.log($mainSlide);

const arrTopval = [];
$mainSlide.forEach(($mainSlide,idx)=>{
    arrTopval[idx] = $mainSlide.offsetTop;
})
const arrleftval= [];
$subSlide.forEach(($subSlide,idx)=>{
    arrleftval[idx] = $subSlide.offsetleft;
})


//아래로버튼
$moveSlideBottom.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (nowIdx < $mainSlide.length - 1) {
        nowIdx++;
    } else {
        nowIdx = 0; // 맨 아래 도달 시 첫 번째 슬라이드로 이동
    }
    $screen.style.top = `-${arrTopval[nowIdx]}px`;
});
// 위로 버튼
$moveSlideTop.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (nowIdx > 0) {
        nowIdx--;
    } else {
        nowIdx = $mainSlide.length - 1; // 맨 위 도달 시 마지막 슬라이드로 이동
    }
    $screen.style.top = `-${arrTopval[nowIdx]}px`;
});

/*
$btn.forEach((btn, index) => {
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();

        // 현재 클릭한 버튼에 'on' 클래스 추가
        btn.parentElement.classList.add('on');

        // 이전에 활성화된 버튼에서 'on' 클래스 제거
        document.querySelectorAll('#main2 .button ul li.on').forEach((prevBtn) => {
            if (prevBtn !== btn.parentElement) {
                prevBtn.classList.remove('on');
            }
        });
    });
}); */


  document.addEventListener('DOMContentLoaded', function () {
            const cosContainer = document.getElementById('course');
            const btnList = document.querySelectorAll('.button ul li');
            const cosItems = document.querySelectorAll('.cos div');

            btnList.forEach((btn, index) => {
                btn.addEventListener('click', (evt) => {
                    evt.preventDefault();

                    // 모든 버튼에서 'on' 클래스 제거
                    btnList.forEach((button) => {
                        button.classList.remove('on');
                    });

                    // 클릭한 버튼에 'on' 클래스 추가
                    btn.classList.add('on');

                    // 슬라이드를 이동할 거리 계산
                    const distanceToMove = index * -100; // 각 슬라이드의 가로 폭이 100%로 가정

                    // 각 cos div에 transform 속성을 사용하여 슬라이드 이동 적용
                    cosItems.forEach((item) => {
                        item.style.transform = `translateX(${distanceToMove}%)`;
                    });
                });
            });
        });
  










// 마우스 휠 이벤트 핸들러
function preventZoom(event) {
    if (event.ctrlKey === true) {
        event.preventDefault();
    }
}

// 이벤트 리스너 등록
document.addEventListener('wheel', preventZoom,{ passive: false });








