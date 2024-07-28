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
    const text = "배를 타고 이동해 루시아일랜드에 도착한 너구리선생. 지도를 구하기 위해 시장으로 간다.";
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
            { text: '어떻게...구해주지...아! 사이렌 소리를 들려주자', speed: 110 },
            { text: '외용 외용 외용 외용', speed: 60},
            { text: '오! 갔다. 괜찮은지 확인하러 가볼까', speed: 70,},  //이미지 변경
            { text: '저기..괜찮아?', speed: 45, character: '너구리선생' },  //이미지 변경
            { text: '네 괜찮아요. 혹시..사이렌소리로 도와주신건가요?', speed: 100, character: '???' },
            { text: '응ㅎㅎ 괜찮아서 다행이다.', speed: 50, character: '너구리선생' },
            { text: '감사해요! 혹시 제가 도와드릴 일이 있을까요?', speed: 90, character: '???' },
            { text: '그..내가 보물을 찾으려고 지도를 찾고 있는데...', speed: 100, character: '너구리선생' },
            { text: '!! 혹시 베이스 보물을 찾는 지도인가요? 그 지도 저한테 있어요!', speed: 115, character: '???' },
            { text: '저도 보물을 찾고있었거든요. 혹시 같이 가도 될까요? ', speed: 100, character: '???' },
            { text: '제가 지도를 빌려드릴게요! ', speed: 30, character: '???' },
            { text: '그렇다면 나는 좋지! 같이 가자. 근데 너는 이름이 뭐야?', speed: 95, character: '너구리선생' },
            { text: '제 이름은 왈왈이라고해요. 그럼 출발할까요? ', speed: 80, character: '왈왈이' },
            { text: '좋아! 출발하자 ', speed: 30, character: '너구리선생' },
            { text: '다음으로 가야할 장소는 어디야?', speed: 50, character: '너구리선생' },   
            { text: '지도를 보니까 계곡으로 가는게 가장 빨라요!', speed: 60, character: '왈왈이' },
            { text: '좋아! 바로 출발하자!', speed: 25, character: '너구리선생' }//이미지 변경, 시간 차 두고
        ];

        // 하나씩 나타나게
        function typeNextText(index) {
            if (index < texts.length) {
                if (texts[index].character) {
                    dialogueCharacter.textContent = texts[index].character;
                    dialogueCharacter.style.visibility = 'visible'; // 캐릭터 이름 표시
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
                }else if(index === 6){
                    // document.getElementById('background-img').src = './img/secondSceneImg/goHarborBackground01.png';
                }else if(index === 7){
                    // document.getElementById('background-img').src = './img/secondSceneImg/goHarborBackground01.png';
                    // 캐릭터 이미지 표시 및 애니메이션 클래스 추가
                    // characterCaptain.classList.add('fade-in');
                    // characterRaccon.classList.add('fade-in');
                    // characterCaptain.style.visibility = 'visible'; 
                    // characterRaccon.style.visibility = 'visible'; 
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
