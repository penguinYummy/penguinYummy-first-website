/* =========================
   상태 변수
========================= */

let currentQuestion = 0;
let score = 0;
let questions = [];
let answered = false;
let currentCategory = "all";
let quizFinished = false;


/* =========================
   카테고리 선택
========================= */

function selectCategory(category) {

    currentCategory = category;

    const filtered =
        category === "all"
            ? VOCAB_DATA
            : VOCAB_DATA.filter(item => item.category === category);

    /* 해당 카테고리에 문제가 하나도 없으면 안내 후 중단 */

    if (filtered.length === 0) {

        alert("아직 이 유형의 단어가 없습니다.");

        return;

    }

    document.getElementById("categoryScreen").style.display =
        "none";

    document.getElementById("quizScreen").style.display =
        "block";

    document.getElementById("progressContainer").style.display =
        "block";

    document.getElementById("categoryChangeLink").style.display =
        "inline-block";

    startQuiz(filtered);

}


/* =========================
   카테고리 다시 선택
========================= */

function showCategoryScreen() {

    document.getElementById("categoryScreen").style.display =
        "block";

    document.getElementById("quizScreen").style.display =
        "none";

    document.getElementById("progressContainer").style.display =
        "none";

    document.getElementById("categoryChangeLink").style.display =
        "none";

    document.getElementById("progress").textContent = "";

}


/* =========================
   퀴즈 시작
========================= */

function startQuiz(data) {

    /* 퀴즈 완료 화면에서 재사용한 wordKanji/wordReading 내용 복구 */

    document.getElementById("wordKanji").innerHTML = "";
    document.getElementById("wordReading").innerHTML = "";

    questions = shuffle([...data]);

    currentQuestion = 0;
    score = 0;
    quizFinished = false;

    document.getElementById("quizQuestionLabel").textContent =
        "이 단어의 뜻은 무엇일까요?";

    showQuestion();
}


/* =========================
   문제 출력
========================= */

function showQuestion() {

    const question =
        questions[currentQuestion];

    answered = false;

    /* 진행률 */

    document.getElementById("progress").textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    const progressPercent =
        (currentQuestion / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        `${progressPercent}%`;

    /* 단어 / 유형 */

    document.getElementById("wordKanji").textContent =
        question.word;

    document.getElementById("wordReading").textContent =
        `[${question.category}]`;

    /* 입력창 초기화 */

    const input =
        document.getElementById("answerInput");

    input.disabled = false;
    input.value = "";
    input.classList.remove("correct", "wrong");

    input.focus();

    /* 제출 버튼 초기화 */

    const submitBtn =
        document.getElementById("submitBtn");

    submitBtn.disabled = false;
    submitBtn.textContent = "확인";

    /* 결과 초기화 */

    document.getElementById("result").textContent = "";

    /* 다음 버튼 숨기기 */

    document.getElementById("nextBtn").style.display =
        "none";

}


/* =========================
   정답 비교용 정규화

   - 띄어쓰기 전부 제거
   - 문장부호(쉼표, 마침표, 물음표, 느낌표) 제거
   - 문장 형태 정답도 띄어쓰기 없이 입력하면 정답 처리되도록 함
========================= */

function normalizeAnswer(text) {

    return text
        .trim()
        .replace(/\s+/g, "")
        .replace(/[,.!?？！。、]/g, "");

}


/* =========================
   정답 확인
========================= */

function checkAnswer() {

    if (answered) {
        return;
    }

    const input =
        document.getElementById("answerInput");

    const userAnswer =
        input.value.trim();

    if (userAnswer === "") {
        return;
    }

    const question =
        questions[currentQuestion];

    const normalizedUserAnswer =
        normalizeAnswer(userAnswer);

    const isCorrect =
        question.meaning.some(
            m => normalizeAnswer(m) === normalizedUserAnswer
        );

    answered = true;

    input.disabled = true;

    document.getElementById("submitBtn").disabled = true;

    const correctAnswerText =
        question.meaning.join(", ");

    /* 정답 */

    if (isCorrect) {

        input.classList.add("correct");

        document.getElementById("result").textContent =
            "정답입니다.";

        document.getElementById("result").style.color =
            "var(--correct)";

        score++;

    }

    /* 오답 */

    else {

        input.classList.add("wrong");

        document.getElementById("result").textContent =
            `정답은 「${correctAnswerText}」입니다.`;

        document.getElementById("result").style.color =
            "var(--wrong)";

    }

    /* 다음 버튼 */

    document.getElementById("nextBtn").style.display =
        "block";

}


/* =========================
   다음 문제
========================= */

function nextQuestion() {

    currentQuestion++;

    /* 마지막 */

    if (currentQuestion >= questions.length) {

        showFinish();

    }

    /* 다음 문제 */

    else {

        showQuestion();

    }

}


/* =========================
   입력창 엔터 키 처리 (정답 제출용)
========================= */

function handleInputKeydown(event) {

    if (event.key !== "Enter") {
        return;
    }

    if (answered) {
        return;
    }

    event.preventDefault();

    checkAnswer();

}


/* =========================
   엔터로 다음 문제 / 다시 시작

   입력창이 비활성화된 상태에서는 입력창 자체가 keydown 이벤트를
   받지 못하므로, document 레벨에서 엔터를 감지한다.
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key !== "Enter") {
        return;
    }

    const quizScreenVisible =
        document.getElementById("quizScreen").style.display !== "none";

    const nextBtn =
        document.getElementById("nextBtn");

    if (quizScreenVisible && nextBtn.style.display === "block") {

        event.preventDefault();

        handleNextClick();

    }

});


/* =========================
   결과 화면

   주의: wordDisplay 전체가 아니라 그 안의 wordKanji/wordReading의
   내용만 바꾼다. wordDisplay를 통째로 교체하면 wordKanji/wordReading
   요소 자체가 사라져서, 다시 시작할 때 해당 id를 찾지 못해
   오류가 나고 화면이 멈추는 문제가 있었다.
========================= */

function showFinish() {

    quizFinished = true;

    document.getElementById("quizQuestionLabel").textContent =
        "퀴즈 완료";

    document.getElementById("wordKanji").innerHTML =
        `<div class="finish-title">최종 점수</div>
        <div class="finish-score">
            ${score} / ${questions.length}
        </div>`;

    document.getElementById("wordReading").textContent =
        "";

    document.getElementById("progress").textContent =
        "완료";

    document.getElementById("progressBar").style.width =
        "100%";

    document.getElementById("inputArea").style.display =
        "none";

    document.getElementById("result").textContent =
        "";

    const nextBtn =
        document.getElementById("nextBtn");

    nextBtn.textContent =
        "다시 시작";

    nextBtn.style.display =
        "block";

}


/* =========================
   다음 버튼(엔터 포함) 클릭 처리

   - 퀴즈 진행 중: 다음 문제로 이동
   - 퀴즈 완료 후: 같은 카테고리로 다시 시작
========================= */

function handleNextClick() {

    if (quizFinished) {

        document.getElementById("inputArea").style.display =
            "flex";

        const filtered =
            currentCategory === "all"
                ? VOCAB_DATA
                : VOCAB_DATA.filter(
                    item => item.category === currentCategory
                );

        startQuiz(filtered);

    }

    else {

        nextQuestion();

    }

}


/* =========================
   실행
========================= */

document.querySelectorAll("#categoryList .answer").forEach(btn => {

    btn.addEventListener("click", () => {

        selectCategory(btn.dataset.category);

    });

});

document.getElementById("categoryChangeLink").addEventListener(
    "click", (event) => {

        event.preventDefault();

        showCategoryScreen();

    }
);

document.getElementById("submitBtn").addEventListener(
    "click", checkAnswer
);

document.getElementById("answerInput").addEventListener(
    "keydown", handleInputKeydown
);

document.getElementById("nextBtn").addEventListener(
    "click", handleNextClick
);
