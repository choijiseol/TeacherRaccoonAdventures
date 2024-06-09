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

window.onload = function () {
    // 배경 확대 애니메이션 적용
    var harborGround = document.querySelector('.harborGround');
    var harborSky = document.querySelector('.harborSky');
    harborGround.classList.add('enlarge');
    harborSky.classList.add('enlarge');

    setTimeout(function () {
        var dialogue = document.getElementById('dialogueChat');
        var dialogueCharacter = document.getElementById('dialogueCharacter');
        var characterCaptain = document.querySelector('.characterCaptain');
        var characterRaccon = document.querySelector('.characterRaccon');
        
        dialogue.style.visibility = 'visible';

        // 여러 텍스트의 경우
        var texts = [
            { text: '항구에 도착했다!!', speed: 70 },
            { text: '음...오리 선장의 배를 타면 된다고 했는데..', speed: 110 },
            { text: '오! 저기있다.', speed: 60 },
            { text: '안녕하세요! 오리선장님. 루시 아일랜드로 출발하는 배 언제 도착하나요?', speed: 110, character: '너구리선생' },
            { text: '이제 옵니다. 이번시간 표가 남았는데 표 먼저 구매해주세요~', speed: 100, character: '오리선장' },
            { text: '네! 지금 구매할게요.', speed: 45, character: '너구리선생' }
        ];

        // 하나씩 나타나게
        function typeNextText(index) {
            if (index < texts.length) {
                if (texts[index].character) {
                    dialogueCharacter.textContent = texts[index].character;
                    dialogueCharacter.style.visibility = 'visible'; // 캐릭터 이름이 정의된 경우 표시

                    // 캐릭터 이미지 표시 및 애니메이션 클래스 추가
                    characterCaptain.classList.add('fade-in');
                    characterRaccon.classList.add('fade-in');
                    characterCaptain.style.visibility = 'visible'; 
                    characterRaccon.style.visibility = 'visible'; 
                }
                typeWriter(dialogue, texts[index].text, texts[index].speed, function() {
                    setTimeout(function() {
                        typeNextText(index + 1); 
                    }, 1000); // 텍스트 간의 간격
                });
            } else {
                // 다음 페이지로 이동
                setTimeout(function() {
                    // window.location.href = 'introScenePackingBag.html';
                }, 1000); 
            }
        }

        typeNextText(0);
    }, 3000); // 3초 후에 시작
};
