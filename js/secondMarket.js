// 타이핑 효과
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
    // 타이핑 효과 시작
    const movingText = document.getElementById('moving-text');
    const text = '이 동 중';
    const speed = 300; // 타이핑 속도 (ms)
    typeWriter(movingText, text, speed, function() {
        // 타이핑 완료 후 실행될 코드
        animateBlackScreen();
    });

    // 검은 화면 애니메이션 함수
    function animateBlackScreen() {
        setTimeout(function() {
            var blackScreen = document.getElementById('black-screen');
            blackScreen.style.opacity = '0'; // 검은 화면 사라지기
        }, 700); // 1초 후에 검은 화면 사라지도록 설정
    }
});
