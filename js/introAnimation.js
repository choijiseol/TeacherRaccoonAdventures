window.onload = function () {
    var outsideHouse = document.querySelector('.outsideHouse');
    outsideHouse.classList.add('show'); //첫번째 보여줌
};

// 텍스트 보드 이벤트
function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.textContent = ''; // 텍스트 초기화
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
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

setTimeout(function () {
    var image = document.getElementById('imageDiv');
    var dialogue = document.getElementById('dialogue');
    image.src = './img/introSceneImg/intro_viewTv2.png';
    image.style.width = '91%';
    image.style.height = 'auto';

    // 텍스트 여러개인 경우
    var texts = [
        { text: '음?? 이게 뭐징', speed: 50 },
        { text: '오! 루시 아일랜드...전설의 베이스!!!', speed: 100 },
        { text: '갖고싶다... 한번 가볼까?', speed: 70 },
        { text: '그래!!! 찾으러 여행을 떠나는거야!', speed: 70 },
        { text: '먼저 필요한 짐부터 싸야겠당', speed: 100 }
    ];

    //하나씩 나타나게
    function typeNextText(index) {
        if (index < texts.length) {
            typeWriter(dialogue, texts[index].text, texts[index].speed, function() {
                setTimeout(function() {
                    typeNextText(index + 1); 
                }, 1000); // 테스트 간의 초 간격
            });
        }
    }

    // Start typing the first text
    typeNextText(0);
}, 14000);