window.onload = function () {
    var outsideHouse = document.querySelector('.outsideHouse');
    outsideHouse.classList.add('show'); // 첫 번째 애니메이션 적용
};

//3초 후 이미지 바뀜
setTimeout(function() {
    var image = document.getElementById('house');
    image.src = './img/introSceneImg/intro_insideHouse1.png'; 
    image.style.width = '91%'; 
    image.style.height = 'auto'; 

}, 4100); 
