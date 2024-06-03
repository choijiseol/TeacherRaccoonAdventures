window.onload = function () {
    var outsideHouse = document.querySelector('.outsideHouse');
    outsideHouse.classList.add('show'); // 첫 번째 애니메이션 적용
};

// 텍스트 타이핑 효과
function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = ''; // 기존 텍스트 초기화
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

setTimeout(function () {
    var image = document.getElementById('imageDiv');
    var dialogue = document.getElementById('dialogue');
    image.src = './img/introSceneImg/intro_insideHouse1.png';
    image.style.width = '91%';
    image.style.height = 'auto';
    typeWriter(dialogue, '주말인데 할 일이 없네ㅠㅠ. 티비나 봐야겠담!', 50);
    dialogue.style.visibility = 'visible'; // 대사 보이게

    setTimeout(function () {
        typeWriter(dialogue, '리모컨이... 여기있다!', 50);
    }, 3000);
}, 5000);

setTimeout(function () {
    var image = document.getElementById('imageDiv');
    var dialogue = document.getElementById('dialogue');
    image.src = './img/introSceneImg/intro_insideHouse2.png';
    image.style.width = '91%';
    image.style.height = 'auto';
    typeWriter(dialogue, '음...티비에서 뭐 하려나', 50);
}, 10000);

setTimeout(function () {
    var image = document.getElementById('imageDiv');
    var dialogue = document.getElementById('dialogue');
    image.src = './img/introSceneImg/intro_viewTv1.png';
    image.style.width = '91%';
    image.style.height = 'auto';
    typeWriter(dialogue, '오~ 홈쇼핑 원피스 이쁘다', 50);
}, 12000);