document.addEventListener('DOMContentLoaded', function () {
    localStorage.removeItem('selectedItems');  // localhost 값 지우기

    var items = document.querySelectorAll('.itemDiv img');
    var selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];

    // 엘리먼트 가져옴
    var mainExplanation = document.querySelector('.mainExplanation');
    var subExplanation = document.querySelector('.subExplanation');

    selectedItems.forEach(function (id) {
        var item = document.getElementById(id);
        if (item) {
            item.style.transform = 'scale(1)';
            item.classList.add('clicked');
        }
    });

    items.forEach(function (item) {
        item.addEventListener('click', function () {
            if (!this.classList.contains('clicked') && selectedItems.length < 3) {
                this.style.transform = 'scale(1.5)';
                this.classList.add('clicked');
                selectedItems.push(this.id);
                localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
                console.log('Selected Items:', selectedItems);

                // 다 고른 경우
                if (selectedItems.length === 3) {
                    mainExplanation.textContent = "다 골랐구나! 이제 출발해볼까?";
                    subExplanation.textContent = ' ';

                    // 다음 페이지로 이동
                    setTimeout(function () {
                        window.location.href = 'introSceneGoHarbor.html';
                    }, 2000); // 1초 후에 페이지 이동
                }
            }
        });
    });
});
