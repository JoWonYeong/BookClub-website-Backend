

$(document).ready(function () {
    clickEvent();
});

function clickEvent() {
    $('#submit2').click(function () {
        if (bookCount() > 3) {
            alert('책은 3권까지 대여 가능합니다.');
        }
        else if (bookCount() == 0) {
            alert('책을 선택해 주세요.');
        }
        else {
            alert(`대여 예약되었습니다.`);
            window.location.replace('/');
        }
    });
}
function bookCount() {
    var count = $('input:checkbox[name=book]:checked').length;
    return count;
}