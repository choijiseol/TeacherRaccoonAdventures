document.addEventListener('DOMContentLoaded', function() {
    const tickets = document.querySelectorAll('.ticketDiv img');
    const mainExplanation = document.querySelector('.mainExplanation');
    const subExplanation = document.querySelector('.subExplanation');

    tickets.forEach(ticket => {
        ticket.addEventListener('click', function() {
            // 모든 티켓에서 active 클래스를 제거합니다.
            tickets.forEach(t => t.classList.remove('active'));
            // 클릭된 티켓에 active 클래스를 추가합니다.
            this.classList.add('active');

            // 메인 문구와 서브 문구를 변경합니다.
            switch (this.id) {
                case 'ticket1':
                    mainExplanation.textContent = '이 티켓은 유효하지 않아!';
                    subExplanation.textContent = '이 티켓은 LOCY로 가는 티켓이야. 이곳은 관광지라서 보물이 없어.';
                    break;
                case 'ticket2':
                    mainExplanation.textContent = '이 티켓은 유효하지 않아!';
                    subExplanation.textContent = '이 티켓은 RUCY로 가는 티켓이야. 여기에는 R 도적들이 살고 있어! 위험해.';
                    break;
                case 'ticket3':
                    mainExplanation.textContent = '잘 선택했어! 우리는 LUCY아일랜드로 가야 해.';
                    subExplanation.textContent = '자, 이제 출발하자!';
                    setTimeout(function() {
                        window.location.href = 'introSceneHarborBeforTicket.html';
                    }, 1000);
                    break;
                case 'ticket4':
                    mainExplanation.textContent = '이 티켓은 유효하지 않아!';
                    subExplanation.textContent = '이 티켓은 LUCE로 가는 티켓이야. 여기에는 음식이 많지만, 보물은 없어.';
                    break;
                default:
                    mainExplanation.textContent = '우리가 가야했던 아일랜드를 고르자!';
                    subExplanation.textContent = '올바른 티켓을 선택해야 배를 탈 수 있어';
                    break;
            }
        });
    });
});
