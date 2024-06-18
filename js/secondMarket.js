// 타이핑 효과 함수
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

document.addEventListener("DOMContentLoaded", function() {
    // 시작할 때 타이핑 효과
    const movingText = document.getElementById('moving-text');
    const text = "배를 타고 이동해 루시아일랜드에 도착한 너구리선생님. 지도를 구하기 위해 시장으로 간다.";
    const speed = 100;
    typeWriter(movingText, text, speed, function() {
        animateBlackScreenAndStartDialogue();
    });

    // 검은 화면 애니메이션과 대화 시작
    function animateBlackScreenAndStartDialogue() {
        setTimeout(function() {
            var blackScreen = document.getElementById('black-screen');
            blackScreen.style.opacity = '0'; // 검은 화면 사라짐

            setTimeout(function() {
                var dialogueChat = document.getElementById('dialogueChat');
                dialogueChat.style.visibility = 'visible'; // 대화창 표시

                startDialogue();
            }, 1000); // 1초 후에 대화창 표시
        }, 700); // 검은 화면이 사라지는 시간
    }

    // 대화 시작 함수
    function startDialogue() {
        var dialogueCharacter = document.getElementById('dialogueCharacter');
        var dialogueChat = document.getElementById('dialogueChat');

        dialogueChat.style.visibility = 'visible';
        var texts = [
            { text: '와! 시장 엄청크다.', speed: 50 },
            { text: '이제 지도를 구해야 하는데.. 어디서 구하지ㅜㅜ', speed: 110 },
            { text: '헉! 저게 뭐야', speed: 42 },  // 이미지 변경
            { text: '헐...저 강아지 괴롭힘을 당하고 있잖아!', speed: 90},
            { text: '안녕하세요! 오리선장님. 루시 아일랜드로 ', speed: 110, character: '너구리선생' },
            { text: '이제 옵니다. 이번시간 표가 남았는데 표 먼저 구매해주세요~', speed: 100, character: '오리선장' },
            { text: '네! 지금 구매할게요.', speed: 45, character: '너구리선생' }
        ];

        // 하나씩 나타나게
        function typeNextText(index) {
            if (index < texts.length) {
                if (texts[index].character) {
                    dialogueCharacter.textContent = texts[index].character;
                    dialogueCharacter.style.visibility = 'visible'; // 캐릭터 이름 표시
                    // 캐릭터 이미지 표시 및 애니메이션 클래스 추가
                    // characterCaptain.classList.add('fade-in');
                    // characterRaccon.classList.add('fade-in');
                    // characterCaptain.style.visibility = 'visible'; 
                    // characterRaccon.style.visibility = 'visible'; 
                }
                dialogueChat.textContent = ''; // 이전 텍스트 초기화
                typeWriter(dialogueChat, texts[index].text, texts[index].speed, function() {
                    setTimeout(function() {
                        typeNextText(index + 1); 
                    }, 1000); // 텍스트 간의 간격
                });

                // 이미지 변경
                if (index === 2) {
                    document.getElementById('background-img').src = './img/secondSceneImg/goHarborBackground01.png';
                }
            } else {
                // 다음 페이지로 이동
                setTimeout(function() {
                    // window.location.href = 'introSceneHarborByTicket.html';
                }, 500); 
            }
        }

        typeNextText(0);
    }
});
