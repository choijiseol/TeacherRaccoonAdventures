let isMovingRight = false;
let isMovingLeft = false;
let isRaccoonMovingRight = false;
let isRaccoonMovingLeft = false;

const moveSpeed = 5; //배경 스피트
const raccoonSpeed = 3.8; // 캐릭터 스피드
let xTranslate = 0;
let raccoonTranslateX = 0;
const maxTranslateX = -window.innerWidth; 
const minTranslateX = 0; 

// 연속되는 캐릭터 이미지
const leftImages = ['img/teacherRacconImg/teacherRacconWalk01.png', 'img/teacherRacconImg/teacherRacconWalk02.png', 'img/teacherRacconImg/teacherRacconWalk03.png', 'img/teacherRacconImg/teacherRacconWalk04.png'];
const rightImages = ['img/teacherRacconImg/teacherRacconWalk05.png', 'img/teacherRacconImg/teacherRacconWalk06.png', 'img/teacherRacconImg/teacherRacconWalk07.png', 'img/teacherRacconImg/teacherRacconWalk08.png'];

let currentImageIndex = 0;
let isMoving = false;

// 캐릭터 이동
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        isMovingRight = true;
        isRaccoonMovingRight = true;
        isRaccoonMovingLeft = false; 
        isMoving = true;
    } else if (event.key === 'ArrowLeft') {
        isMovingLeft = true;
        isRaccoonMovingLeft = true;
        isRaccoonMovingRight = false; 
        isMoving = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowRight') {
        isMovingRight = false;
        isRaccoonMovingRight = false;
        isMoving = false;
    } else if (event.key === 'ArrowLeft') {
        isMovingLeft = false;
        isRaccoonMovingLeft = false;
        isMoving = false;
    }
});

// 배경 이동
function moveImages() {
    const imageContainer = document.getElementById('image-container');
    const raccoon = document.getElementById('raccoon');

    if (isMovingRight && xTranslate > maxTranslateX) {
        xTranslate -= moveSpeed;
    }
    if (isMovingLeft && xTranslate < minTranslateX) {
        xTranslate += moveSpeed;
    }

    imageContainer.style.transform = `translateX(${xTranslate}px)`;

    const raccoonMargin = 20;

    if (isRaccoonMovingRight) {
        raccoonTranslateX += raccoonSpeed;
    }
    if (isRaccoonMovingLeft && raccoonTranslateX > raccoonMargin) {
        raccoonTranslateX -= raccoonSpeed;
    }

    if (raccoonTranslateX < raccoonMargin) {
        raccoonTranslateX = raccoonMargin;
    }

    raccoon.style.transform = `translateX(${raccoonTranslateX}px)`;

    requestAnimationFrame(moveImages);
}

// 캐릭터 이동 이미지 바뀜
function updateRaccoonImage() {
    const raccoon = document.getElementById('raccoon');
    if (isMoving) {
        if (isRaccoonMovingRight) {
            raccoon.src = rightImages[currentImageIndex];
        } else if (isRaccoonMovingLeft) {
            raccoon.src = leftImages[currentImageIndex];
        }
        currentImageIndex = (currentImageIndex + 1) % leftImages.length;
    }
    setTimeout(updateRaccoonImage, 200); //0.2초
}

// 다음 페이지로 이동
function checkRaccoonPosition() {
    const raccoon = document.getElementById('raccoon');
    const raccoonRect = raccoon.getBoundingClientRect();

    // 화면 벗어남
    if (raccoonRect.right < 0 || raccoonRect.left > window.innerWidth) {
        setTimeout(function() {
            window.location.href = 'introSceneHarbor.html';
        },500); 
    }
}

setInterval(checkRaccoonPosition, 100);  //캐릭터 위치 확인
moveImages();
updateRaccoonImage();