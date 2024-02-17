 // 배경화면 커지는 애니메이션
 window.onload = function() {
    resetBackgroundSize();
};

function resetBackgroundSize() {
    var homeBackground = document.querySelector('.homeBackground');
    homeBackground.style.transition = 'none'; // 애니메이션 제거
    homeBackground.style.transform = 'scale(1)'; // 이미지 크기 원래대로

    // 애니메이션 적용
    setTimeout(function() {
        homeBackground.style.transition = 'transform 8s ease'; 
        homeBackground.style.transform = 'scale(1.15)'; 
    }, 100);
}