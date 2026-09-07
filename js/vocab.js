/* =========================
   상태 변수
========================= */

let currentQuestion = 0;
let score = 0;
let questions = [];
let answered = false;


/* =========================
   퀴즈 시작
========================= */

function startQuiz() {

    questions = shuffle([...VOCAB_DATA]);

    currentQuestion = 0;
    score = 0;

    document.querySelector(".question-label").textContent =
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

    /* 단어 / 읽는 법 */

    document.getElementById("wordKanji").textContent =
        question.word;

    document.getElementById("wordReading").textContent =
        question.reading;

    /* 입력창 초기화 */

    const input =
        document.getElementById("answerInput");

    input.value = "";
    input.disabled = false;
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

    const isCorrect =
        question.meaning.some(
            m => m.trim() === userAnswer
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
   엔터 키 처리

   - 아직 답을 입력하지 않은 상태: 엔터 -> 정답 확인
   - 이미 답을 확인한 상태: 엔터 -> 다음 문제
========================= */

function handleInputKeydown(event) {

    if (event.key !== "Enter") {
        return;
    }

    event.preventDefault();

    if (answered) {

        nextQuestion();

    }

    else {

        checkAnswer();

    }

}


/* =========================
   결과 화면
========================= */

function showFinish() {

    document.querySelector(".question-label").textContent =
        "퀴즈 완료";

    document.getElementById("wordDisplay").innerHTML =
        `<div>
            <div class="finish-title">최종 점수</div>
            <div class="finish-score">
                ${score} / ${questions.length}
            </div>
        </div>`;

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

    nextBtn.onclick =
        () => {

            document.getElementById("inputArea").style.display =
                "flex";

            startQuiz();

        };

}


/* =========================
   실행
========================= */

document.getElementById("submitBtn").addEventListener(
    "click", checkAnswer
);

document.getElementById("answerInput").addEventListener(
    "keydown", handleInputKeydown
);

document.getElementById("nextBtn").addEventListener(
    "click", nextQuestion
);

startQuiz();
