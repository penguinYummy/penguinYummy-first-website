```javascript
// 단어 데이터
const words = [
    {
        word: "tree",
        meaning: "나무"
    }
];

// 현재 상태
let currentIndex = 0;
let score = 0;

// 화면 요소
const question = document.getElementById("history-question-text");
const answerInput = document.getElementById("history-answer-input");
const resultMessage = document.getElementById("history-result-message");

// 퀴즈 시작
function startWordQuiz() {
    currentIndex = 0;
    score = 0;

    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("history-quiz-view").classList.remove("hidden");

    showQuestion();
}

// 문제 표시
function showQuestion() {
    const currentWord = words[currentIndex];

    question.textContent = currentWord.word;
    answerInput.value = "";
    resultMessage.textContent = "";

    answerInput.focus();
}

// 정답 확인
function checkAnswer() {
    const currentWord = words[currentIndex];
    const userAnswer = answerInput.value.trim();

    if (userAnswer === currentWord.meaning) {
        score++;
        resultMessage.textContent = "정답!";
        resultMessage.className = "mt-4 text-2xl text-green-400";
    } else {
        resultMessage.textContent = `오답! 정답은 ${currentWord.meaning}`;
        resultMessage.className = "mt-4 text-2xl text-red-400";
    }

    currentIndex++;

    if (currentIndex >= words.length) {
        setTimeout(() => {
            alert(`퀴즈 종료! ${score} / ${words.length}`);
            document.getElementById("history-quiz-view").classList.add("hidden");
            document.getElementById("main-menu").classList.remove("hidden");
        }, 1000);
    } else {
        setTimeout(showQuestion, 1000);
    }
}

// 기존 HTML의 함수 이름과 연결
function checkHistoryAnswer() {
    checkAnswer();
}
```
