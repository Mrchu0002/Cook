const $btn = document.querySelectorAll('#main2>#course>.button>ul>li>a');
const $mainSlide = document.querySelectorAll('#main>div');
const $subSlide = document.querySelectorAll('#main2>#course>.cos>div');
const $moveSlideTop = document.querySelector('body>p.top>a')
const $moveSlideBottom = document.querySelector('body>p.bottom>a')

console.log($mainSlide);


let nowIdx = 0; // 현재 보여지고 있는 슬라이드의 인덱스 번호
let oldIdx = nowIdx; // 직전



const arrTopVal = []; //메인 슬라이드
console.log('arrTopVal =', arrTopVal);
$mainSlide.forEach(($mainSlide,idx)=>{
	//어떤 요소의 top 값(body로부터 떨어진 거리)을 구하는 $DOM.offsetTop 속성
	arrTopVal[idx] = $mainSlide.offsetTop; 
});

//위로버튼
$moveSlideTop.addEventListener("click", function (evt) {
    evt.preventDefault();
    
});


const arrLeftVal = [];  //메인2 슬라이드
console.log('arrLeftVal =', arrLeftVal);
$subSlide.forEach(($article,idx)=>{
	arrLeftVal[idx] = $article.offsetLeft; 
});







