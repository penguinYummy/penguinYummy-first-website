/* =========================
   상태 변수
========================= */

let currentQuestion = 0;
let score = 0;
let questions = [];


/* =========================
   퀴즈 시작
========================= */

function startQuiz() {

    questions = shuffle([...KATAKANA_DATA]);

    currentQuestion = 0;
    score = 0;

    document.querySelector(".question-label").textContent =
        "이 문자의 발음은 무엇일까요?";

    showQuestion();
}


/* =========================
   문제 출력
========================= */

function showQuestion() {

    const question =
        questions[currentQuestion];

    /* 진행률 */

    document.getElementById("progress").textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    const progressPercent =
        (currentQuestion / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        `${progressPercent}%`;

    /* 가타카나 */

    document.getElementById("kana").textContent =
        question.kana;

    /* 결과 초기화 */

    document.getElementById("result").textContent = "";

    /* 다음 버튼 숨기기 */

    document.getElementById("nextBtn").style.display =
        "none";

    /* 선택지 */

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";

    /* 정답 */

    let choices = [
        question.answer
    ];

    /* 오답 */

    const wrongAnswers = KATAKANA_DATA
        .filter(item =>
            item.answer !== question.answer
        )
        .map(item =>
            item.answer
        );

    shuffle(wrongAnswers);

    choices.push(
        wrongAnswers[0],
        wrongAnswers[1],
        wrongAnswers[2]
    );

    shuffle(choices);

    /* 버튼 생성 */

    choices.forEach(choice => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent = choice;

        button.onclick = () =>
            checkAnswer(button, choice);

        answers.appendChild(button);

    });

}


/* =========================
   정답 확인
========================= */

function checkAnswer(button, choice) {

    const correctAnswer =
        questions[currentQuestion].answer;

    const buttons =
        document.querySelectorAll(".answer");

    /* 중복 클릭 방지 */

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    /* 정답 */

    if (choice === correctAnswer) {

        button.classList.add("correct");

        document.getElementById("result").textContent =
            "정답입니다.";

        document.getElementById("result").style.color =
            "var(--correct)";

        score++;

    }

    /* 오답 */

    else {

        button.classList.add("wrong");

        document.getElementById("result").textContent =
            `정답은 「${correctAnswer}」입니다.`;

        document.getElementById("result").style.color =
            "var(--wrong)";

        buttons.forEach(btn => {

            if (btn.textContent === correctAnswer) {

                btn.classList.add("correct");

            }

        });

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
   결과 화면
========================= */

function showFinish() {

    document.querySelector(".question-label").textContent =
        "퀴즈 완료";

    document.getElementById("kana").innerHTML =
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

    document.getElementById("answers").innerHTML =
        "";

    document.getElementById("result").textContent =
        "";

    const nextBtn =
        document.getElementById("nextBtn");

    nextBtn.textContent =
        "다시 시작";

    nextBtn.style.display =
        "block";

    nextBtn.onclick =
        startQuiz;

}


/* =========================
   실행
========================= */

startQuiz();
