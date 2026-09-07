/* =========================
   공용 유틸 함수
========================= */

// 배열을 무작위로 섞어서 새 배열처럼 반환한다 (원본 배열 변형)
function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
            [array[j], array[i]];
    }

    return array;
}
