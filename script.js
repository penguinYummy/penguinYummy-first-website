// --- 1. 데이터 정의 ---
events = [
    { name: "5.10 총선거", year: 1948, month: 5, day: 10, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "제헌 헌법 공포", year: 1948, month: 7, day: 17, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "대한민국 정부 수립 선포", year: 1948, month: 8, day: 15, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "농지 개혁법 제정", year: 1949, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "귀속 재산 처리법", year: 1949, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "반민특위 피습 사건", year: 1949, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "6.25 전쟁 시작", year: 1950, month: 6, day: 25, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "인천 상륙 작전", year: 1950, month: 9, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "1.4 후퇴", year: 1951, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "정전 협정 체결", year: 1953, month: 7, day: 27, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "발췌 개헌", year: 1952, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "부산 정치 파동", year: 1952, month: 5, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "사사오입 개헌", year: 1954, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "북한의 제 1차 5개년 계획", year: 1957, month: 0, day: 0, endYear: 1961, endMonth: 0, endDay: 0 },
    { name: "3.15 부정선거", year: 1960, month: 3, day: 15, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "4.19 혁명", year: 1960, month: 4, day: 19, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "대학교수단의 시국 선언", year: 1960, month: 4, day: 25, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "5.16 군사정변", year: 1961, month: 5, day: 16, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "제1차 경제 개발 5개년 계획", year: 1962, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "6.3 시위", year: 1964, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "베트남 파병", year: 1964, month: 0, day: 0, endYear: 1973, endMonth: 0, endDay: 0 },
    { name: "브라운 각서", year: 1966, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "제2차 경제 개발 5개년 계획", year: 1967, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "3선 개헌", year: 1969, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "새마을 운동", year: 1970, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "전태일 분신", year: 1970, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "광주 대단지 사건", year: 1971, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "제 3 4차 경제 개발 5개년 계획", year: 1972, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "남북 공동 성명", year: 1972, month: 7, day: 4, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "제 1차 석유 파동", year: 1973, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "미니스커트와 장발 단속", year: 1973, month: 0, day: 0, endYear: 1980, endMonth: 0, endDay: 0 },
    { name: "김급 조치 1호", year: 1974, month: 1, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "민청학련", year: 1974, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "인민 혁명단 재건 위원회 조작 사건", year: 1975, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "3.1 민주구국 선언", year: 1976, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "함평 고구마 사건", year: 1976, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "수출 100억 달러 달성", year: 1977, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "제 2차 석유 파동", year: 1978, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "부마 민주 항쟁", year: 1979, month: 10, day: 16, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "10.26 사태", year: 1979, month: 10, day: 26, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "12.12 군사 반란", year: 1979, month: 12, day: 12, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "서울의 봄", year: 1980, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "환경청 설치", year: 1980, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "5.18 민주화 운동", year: 1980, month: 5, day: 18, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "4.13 호헌 조치", year: 1987, month: 4, day: 13, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "이한열 최루탄 피격", year: 1987, month: 6, day: 9, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "국민 대회", year: 1987, month: 6, day: 10, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "면동 성당 농성", year: 1987, month: 6, day: 10, endYear: 1987, endMonth: 6, endDay: 15 },
    { name: "국민 평화 대행진", year: 1987, month: 6, day: 26, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "6.29 민주화 선언 발표", year: 1987, month: 6, day: 29, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "낙동강 페놀 오염 사건", year: 1991, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
    { name: "국가 환경 선언문", year: 1992, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
];	

const historyQuestions = [
    // 난이도 '하'
    { name: "제헌 국회가 계승한 이곳의 이름은?", answer: "대한민국 임시 정부", difficulty: "하" },
    { name: "반민 특위를 주도하던 일부 국회 의원이 공산당과 내통한다는 구실로 구속된 사건의 이름은?", answer: "국회 프락치 사건", difficulty: "하" },
    { name: "대한 민국 정부 수립 때 대통령인 이승만과 같이 뽑힌 부통령의 이름은?", answer: "이시영", difficulty: "하" },
    { name: "농지 개혁을 실시하고 한 가구당 몇 정보 이상의 농지 소유를 금지하였나요? (숫자만 입력)", answer: "3", difficulty: "하" },
    { name: "이승만 정부가 조봉암을 간첩죄와 국가 보안법으로 사형 시킨 사건의 이름은?", answer: "진보당 사건", difficulty: "하" },
    { name: "1968년 1월 미국 해군 장교와 민간인 등 80여명을 태운 미국 첩보함 푸에블로호가 북한에 사로잡힌 사건은?", answer: "푸에블로호 나포 사건", difficulty: "하"},
    { name: "미국과 핑퐁 외교를 한 나라는? ", answer: "중국", difficulty: "하" },
    { name: "유신 헌법은 국회 별관에 모여 박정희 정부가 단독으로 통과 시켰다.(o/x)", answer: "x", difficulty: "하"},
    { name: "박정희가 김재규 정보부장에게 피살된 사건은?", answer: "10.26 사태", difficulty: "하"},
    { name: "전두환 정부의 계엄군의 무자비한 진압에 분노한 광주시민이 조직하여 계엄군에 맞선 것은?", answer: "시민군", difficulty: "하"},
    { name: "계엄군이 광주 시민들과 혐상을 거부하고 5월 27일 탱크를 세워 진격한 곳은?", answer: "전남도청", difficulty: "하"},
    // 난이도 '중'
    { name: "1948년에 공포된 대한민국의 최초 헌법은?", answer: "제헌 헌법", difficulty: "중" },
    { name: "광복 당시 농민들은 어떤 원칙에 따라 토지를 개혁하기를 원했나요?", answer: "경자 유전의 원칙", difficulty: "중" },
    { name: "1952년 이승만 대통령의 재선을 위해 직선제와 양원제를 혼합하여 변칙적으로 개헌한 사건은?", answer: "발췌 개헌", difficulty: "중" },
    { name: "이승만 정부가 임시 수도인 부산에 비상 계엄령을 선포하고 야당 의원들을 공산당 혐의로 몰아 구속한 사건은?", answer: "부산 정치 파동", difficulty: "중" },
    { name: "6.25 전쟁 중 지휘관들의 비리로 군수품 보급이 제대로 이루어지지 않아 군인 수만명이 죽은 사건은?", answer: "국민 방위군 사건", difficulty: "중" },
    { name: "박정희를 중심으로한 신 군부가 정권을 장악하고 어떤곳을 기반으로 군정을 실시 하였나요?", answer: "국가 재건 최고 회의", difficulty: "중" },
    { name: "국가 정보를 장악하고 주요 인사를 감시하며 현재는 국가 정보원으로 불리는 이곳은?", answer: "중앙 정보부", difficulty: "중" },
    { name: "일본에서 유신 체제 반대 운동을 하던 김대중이 납치된 후 시위가 벌어지고 민간에서 실행한 서명 운동의 이름은?", answer: "개헌 청원 100만 인 서명 운동", difficulty: "중"},
    { name: "인민 혁명당 재건 위원회 조작 사건의 계기가 되는 사건의 이름은?", answer: "민청학련 사건", difficulty: "중"},
    { name: "유신체제 반대 운동 중 재야인사들이 발표한 것은?", answer: "3.1 민주 구국 선언", difficulty: "중"},
    // 난이도 '상'
    { name: "오랫동안 사법 살인이라 불리며 박정희 정부가 8명에게 사형을 선거한 사건은?", answer: "인민 혁명당 재건 위원회 조작 사건", difficulty: "상"},
    { name: "천주교 신부들이 유신체제 반대 운동을 위한 조직한 곳의 이름은?", answer: "천주교 정의 구현 전국 사제단", difficulty: "상"},
    { name: "박정희 정부가 부정 선거에 대한 비난이 거세지자 중앙 정보부가 일부 유럽 유학생과 교민이 간첩활동을 했다고 발표한 사건은?", answer: "동백림 간첩단 사건", difficulty: "상"},
    { name: "1. 반공을 국시의 제일의로 삼고 지금까지 형식적이고 구호에 그친 반공 태세를 재정비 강화 한다. 4. 이와 같은 우리의 과업이 성취되면 참신하고도 양심적인 정치인들에게는 언제든지 정권을 이양하고 우리 들은 본연의 임무에 복귀할 준비를 갖춘다 이 내용이 담긴 것의 이름은?", answer: "혁명 공약", difficulty: "상" },
    { name: "5.16 군사 정변 이후 계엄령을 선포하고 군부 세력이 어떤 곳을 설치고 혁명 공약을 발표하였나요?", answer: "군사 혁명 위원회", difficulty: "상" },
    { name: "조봉암이 진보당을 창당하며 주장한 이론의 이름은?", answer: "평화 통일론", difficulty: "상" },
    { name: "신인희, 장면 등은 개헌에 반대하며 이승만 정부와 자유당에 저항 하기 위해 창당한 당의 이름은?", answer: "민주당", difficulty: "상" },
    { name: "제헌 헌법 공포 때 대통령의 임기를 4년, 1회에 한하여 중임할 수 있음을 명시한 체제는?", answer: "대통령 중심제", difficulty: "상" },
    { name: "1979년 김영삼 의원 제명에 반발하여 부산과 마산 지역에서 발생한 대규모 반유신 독재 민주화 운동은?", answer: "부마 민주 항쟁", difficulty: "상" },
    { name: "남반구의 추운 해안 지역과 섬들에 주로 서식하는 한 조류가 있다. 이 동물은 종에 따라 몸무게가 약 1~40kg, 몸길이가 40cm에서 120cm 정도까지 다양하며, 두꺼운 지방층과 촘촘한 깃털로 낮은 기온을 견딘다. 날개는 하늘을 나는 데 쓰이지 않지만, 물속에서 마치 지느러미처럼 사용해 매우 빠르게 유영할 수 있다. 육지에서는 뒤뚱거리며 걷거나 배로 미끄러지는 특징적인 움직임을 보이며, 주로 크릴과 작은 물고기를 먹는다. 검은 등과 흰 배의 선명한 대비가 특징인 이 동물은 무엇인가?", answer: "펭귄", difficulty: "상" }
    ];


// --- 2. 상태 관리 ---
let state = {
    screen: 'menu',
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    wrongCounts: {},
    wrongOnly: false,
    isYearQuiz: true, 
    selectedDifficulties: []
};


// --- 3. DOM 요소 캐싱 ---
const screens = {
    menu: document.getElementById('main-menu'),
    timeline: document.getElementById('timeline-view'),
    yearSelection: document.getElementById('year-selection-view'),
    quiz: document.getElementById('quiz-view'), // 연도 퀴즈
    finalScore: document.getElementById('final-score-view'),
    wrongAnswers: document.getElementById('wrong-answers-view'),
    historyQuiz: document.getElementById('history-quiz-view'), // 단답형 퀴즈
    difficultySelection: document.getElementById('difficulty-selection-view')
};

// 연도 퀴즈 입력 필드
const startYearInput = document.getElementById('start-year-input');
const startMonthInput = document.getElementById('start-month-input');
const startDayInput = document.getElementById('start-day-input');
const endYearInput = document.getElementById('end-year-input');
const endMonthInput = document.getElementById('end-month-input');
const endDayInput = document.getElementById('end-day-input');
const durationSeparator = document.getElementById('duration-separator');
const endDatePart = document.getElementById('end-date-part');
const startYearDot = document.getElementById('start-year-dot');
const startMonthDot = document.getElementById('start-month-dot');
const endYearDot = document.getElementById('end-year-dot');
const endMonthDot = document.getElementById('end-month-dot');
// 단답형 퀴즈 입력 필드
const historyAnswerInput = document.getElementById('history-answer-input');


// --- 4. 유틸리티 함수 ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function saveWrongCounts() {
    localStorage.setItem('wrongCounts', JSON.stringify(state.wrongCounts));
}

function loadWrongCounts() {
    const storedCounts = localStorage.getItem('wrongCounts');
    state.wrongCounts = storedCounts ? JSON.parse(storedCounts) : {};
}

function formatEventDate(event) {
    if (event.endYear > 0) {
        const start = `${event.year}` + (event.month > 0 ? `.${event.month}` : '') + (event.day > 0 ? `.${event.day}` : '');
        const end = `${event.endYear}` + (event.endMonth > 0 ? `.${event.endMonth}` : '') + (event.endDay > 0 ? `.${event.endDay}` : '');
        return `${start} ~ ${end}`;
    }
    let date = `${event.year}`;
    if (event.month > 0) date += `.${event.month}`;
    if (event.day > 0) date += `.${event.day}`;
    return date;
}

function showMessage(message) {
    document.getElementById('message-text').textContent = message;
    document.getElementById('message-box').classList.remove('hidden');
}

function hideMessage() {
    document.getElementById('message-box').classList.add('hidden');
}


// --- 5. 화면 관리 함수 ---
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.add('hidden');
    });
    if (screens[screenName]) screens[screenName].classList.remove('hidden');

    if (screenName === 'timeline') {
        document.getElementById('timeline-search').value = '';
        renderTimeline();
    } else if (screenName === 'wrongAnswers') {
        renderWrongAnswers();
    } else if (screenName === 'quiz') {
        // startYearInput.focus(); // 퀴즈 시작 시 renderQuestion에서 포커스 처리
    } else if (screenName === 'historyQuiz') {
        // historyAnswerInput.focus(); // 퀴즈 시작 시 renderQuestion에서 포커스 처리
    } else if (screenName === 'difficultySelection') {
        updateDifficultyButtons();
    }
}


// --- 6. 연표 및 오답 목록 관련 함수 ---
function renderTimeline(searchTerm = '') {
    const timelineList = document.getElementById('timeline-list');
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    let eventsToRender = events;

    if (normalizedSearchTerm) {
        eventsToRender = events.filter(event => {
            const eventName = event.name.toLowerCase();
            const eventDate = formatEventDate(event);
            return eventName.includes(normalizedSearchTerm) || eventDate.includes(normalizedSearchTerm);
        });
    }

    // 연도 순서로 정렬
    eventsToRender.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        if (a.month !== b.month) return a.month - b.month;
        return a.day - b.day;
    });

    timelineList.innerHTML = eventsToRender.length === 0
        ? `<p class="text-center text-gray-400">검색 결과가 없습니다.</p>`
        : eventsToRender.map(event => {
            const date = formatEventDate(event);
            // 오답 횟수 표시
            const wrongCount = state.wrongCounts[event.name] || 0;
            const wrongDisplay = wrongCount > 0 ? `<span class="text-red-400 ml-2">(틀린 횟수: ${wrongCount})</span>` : '';

            return `<div class="p-2 bg-gray-700 rounded-lg"><p class="font-bold">${event.name}</p><p class="text-sm text-gray-400">${date}${wrongDisplay}</p></div>`;
        }).join('');
}

function renderWrongAnswers() {
    loadWrongCounts();
    const wrongList = document.getElementById('wrong-list');
    
    // historyQuestions은 오답 기록하지 않으므로 events만 필터링
    let wrongEvents = events.filter(event => state.wrongCounts[event.name] > 0);

    if (wrongEvents.length === 0) {
        wrongList.innerHTML = `<p class="text-center text-gray-400">틀린 연도 문제가 없습니다!</p>`;
        return;
    }

    wrongEvents = wrongEvents.map(event => ({ ...event, wrongCount: state.wrongCounts[event.name] }));
    wrongEvents.sort((a, b) => b.wrongCount - a.wrongCount); // 많이 틀린 순서

    wrongList.innerHTML = wrongEvents.map(event => {
        const date = formatEventDate(event);
        return `<div class="p-2 bg-gray-600 rounded-lg"><p class="font-bold">${event.name}</p><p class="text-sm text-gray-300">정답: ${date} - 틀린 횟수: ${event.wrongCount}</p></div>`;
    }).join('');
}

function showWrongAnswers() {
    showScreen('wrongAnswers');
}

function resetWrongCounts() {
    state.wrongCounts = {};
    saveWrongCounts();
    renderWrongAnswers();
    showMessage('틀린 연도 기록이 모두 초기화되었습니다!');
}


// --- 7. 연도 퀴즈 함수 ---
function showQuizYearSelection(wrongOnly) {
    state.wrongOnly = wrongOnly;
    showScreen('yearSelection');
}

function showQuizWrongAnswers() {
    loadWrongCounts();
    const wrongEvents = events.filter(event => state.wrongCounts[event.name] > 0);
    if (wrongEvents.length === 0) {
        showMessage('틀린 연도 문제가 없습니다!');
        return;
    }
    state.wrongOnly = true;
    startQuiz(wrongEvents, true);
}

function startQuizFromSelection() {
    const startYear = parseInt(document.getElementById('startYear').value); // 예: 1940
    const endYearInclusive = parseInt(document.getElementById('endYear').value); // 예: 2009

    if (endYearInclusive < startYear) {
        showMessage('끝 연도 선택은 시작 연도보다 이후여야 합니다.');
        return;
    }

    let filteredEvents = events.filter(event => event.year >= startYear && event.year <= endYearInclusive);

    if (state.wrongOnly) {
        filteredEvents = filteredEvents.filter(event => state.wrongCounts[event.name] > 0);
    }

    if (filteredEvents.length === 0) {
        showMessage(`선택된 연도(${startYear}년 ~ ${endYearInclusive}년)에 맞는 문제가 없습니다.`);
        return;
    }

    startQuiz(filteredEvents, true);
}

// 퀴즈 시작 공통 함수
function startQuiz(filteredQuestions, isYearQuiz) {
    state.questions = [...filteredQuestions];
    shuffleArray(state.questions);
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.isYearQuiz = isYearQuiz;
    
    // UI 업데이트 분기
    if (isYearQuiz) {
        document.getElementById('total-questions').textContent = state.questions.length;
        document.getElementById('correct-count').textContent = state.score;
        showScreen('quiz');
        renderQuestion(true);
    } else {
        document.getElementById('history-total-questions').textContent = state.questions.length;
        document.getElementById('history-correct-count').textContent = state.score;
        showScreen('historyQuiz');
        renderQuestion(false);
    }
}

// script.js (renderQuestion 함수)

// 문제 렌더링 공통 함수
function renderQuestion(isYearQuiz) {
    const prefix = isYearQuiz ? '' : 'history-';

    if (state.currentQuestionIndex >= state.questions.length) {
        showFinalScore();
        return;
    }

    const currentQuestion = state.questions[state.currentQuestionIndex];
    
    // 1. 헤더 업데이트
    document.getElementById(`${prefix}current-question`).textContent = state.currentQuestionIndex + 1;

    // 2. 난이도 표시 추가 (단답형 퀴즈에만 적용)
    if (!isYearQuiz) {
        const difficulty = currentQuestion.difficulty;
        let difficultyClass = '';
        if (difficulty === '하') difficultyClass = 'text-green-400';
        else if (difficulty === '중') difficultyClass = 'text-yellow-400';
        else if (difficulty === '상') difficultyClass = 'text-red-400';

        // history-quiz-header에 난이도 표시를 추가 (기존 점수 옆에)
        const header = document.getElementById('history-quiz-header');
        
        // 기존 헤더 내용을 유지하고 난이도만 추가/업데이트
        let difficultySpan = document.getElementById('history-difficulty-display');
        if (!difficultySpan) {
            difficultySpan = document.createElement('span');
            difficultySpan.id = 'history-difficulty-display';
            difficultySpan.className = 'ml-4 text-xl font-bold';
            header.appendChild(difficultySpan);
        }
        
        difficultySpan.innerHTML = `난이도: <span class="${difficultyClass}">${difficulty}</span>`;
    }


    // 3. 문제 본문 업데이트
    const questionTextElement = document.getElementById(isYearQuiz ? 'event-name' : 'history-question-text');
    
    if (isYearQuiz) {
        questionTextElement.innerHTML = currentQuestion.name; // 연도 퀴즈
    } else {
        questionTextElement.innerHTML = currentQuestion.name; // 단답형 퀴즈
    }

    // 4. 입력 필드 및 결과 메시지 초기화
    document.getElementById(`${prefix}result-message`).textContent = '';
    document.getElementById(`${prefix}result-message`).classList.remove('text-green-400', 'text-red-400', 'font-bold');
    
    const quizActions = document.getElementById(`${prefix}quiz-actions`);
    const existingNextBtn = document.getElementById(`${prefix}next-question-btn`);
    if (existingNextBtn) existingNextBtn.remove();
    
    quizActions.innerHTML = `<button class="btn btn-primary text-lg" onclick="${isYearQuiz ? 'checkAnswer()' : 'checkHistoryAnswer()'}">답안 확인</button>`;

    if (isYearQuiz) {
        startYearInput.value = startMonthInput.value = startDayInput.value = '';
        endYearInput.value = endMonthInput.value = endDayInput.value = '';
        
        const isDurationEvent = currentQuestion.endYear > 0;
        durationSeparator.classList.toggle('hidden', !isDurationEvent);
        endDatePart.classList.toggle('hidden', !isDurationEvent);

        startMonthInput.classList.toggle('hidden', currentQuestion.month === 0);
        startDayInput.classList.toggle('hidden', currentQuestion.day === 0);
        startYearDot.classList.toggle('hidden', currentQuestion.month === 0);
        startMonthDot.classList.toggle('hidden', currentQuestion.day === 0);

        if (isDurationEvent) {
            endMonthInput.classList.toggle('hidden', currentQuestion.endMonth === 0);
            endDayInput.classList.toggle('hidden', currentQuestion.endDay === 0);
            endYearDot.classList.toggle('hidden', currentQuestion.endMonth === 0);
            endMonthDot.classList.toggle('hidden', currentQuestion.endDay === 0);
        }
        startYearInput.focus();
    } else {
        historyAnswerInput.value = '';
        historyAnswerInput.focus();
    }
}

// 연도 퀴즈 정답 확인
function checkAnswer() {
    const currentEvent = state.questions[state.currentQuestionIndex];
    const isDurationEvent = currentEvent.endYear > 0;

    const sY = parseInt(startYearInput.value) || 0;
    const sM = parseInt(startMonthInput.value) || 0;
    const sD = parseInt(startDayInput.value) || 0;

    let eY = 0, eM = 0, eD = 0;
    if (isDurationEvent) {
        eY = parseInt(endYearInput.value) || 0;
        eM = parseInt(endMonthInput.value) || 0;
        eD = parseInt(endDayInput.value) || 0;
    }
    
    // 이미 답안을 확인한 상태라면 리턴 (Enter 반복 방지)
    if (document.getElementById('next-question-btn')) return;

    if (sY === 0) {
        showMessage("시작 연도를 숫자로 입력해주세요.");
        return;
    }

    let isCorrect;

    const startCorrect = sY === currentEvent.year &&
                         (currentEvent.month === 0 || sM === currentEvent.month) &&
                         (currentEvent.day === 0 || sD === currentEvent.day);

    if (isDurationEvent) {
        const endCorrect = eY === currentEvent.endYear &&
                           (currentEvent.endMonth === 0 || eM === currentEvent.endMonth) &&
                           (currentEvent.endDay === 0 || eD === currentEvent.endDay);
        isCorrect = startCorrect && endCorrect;
    } else {
        isCorrect = startCorrect;
    }

    displayResult(isCorrect, currentEvent.name, formatEventDate(currentEvent), 'quiz');
}


// --- 8. 단답형 퀴즈 함수 ---

function showHistoryDifficultySelection() {
    state.selectedDifficulties = []; // 난이도 선택 화면 진입 시 초기화
    showScreen('difficultySelection');
    updateDifficultyButtons();
}

function updateDifficultyButtons() {
    ['하', '중', '상'].forEach(difficulty => {
        const btn = document.getElementById(`diff-btn-${difficulty}`);
        if (state.selectedDifficulties.includes(difficulty)) {
            btn.classList.add('bg-blue-500', 'hover:bg-blue-600');
            btn.classList.remove('bg-gray-600', 'hover:bg-gray-700');
        } else {
            btn.classList.add('bg-gray-600', 'hover:bg-gray-700');
            btn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        }
    });

    const startBtn = document.getElementById('difficulty-start-btn');
    if (state.selectedDifficulties.length === 0) {
        startBtn.disabled = true;
        startBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        startBtn.disabled = false;
        startBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

function selectHistoryDifficulty(difficulty) {
    const index = state.selectedDifficulties.indexOf(difficulty);

    if (index > -1) {
        state.selectedDifficulties.splice(index, 1);
    } else {
        state.selectedDifficulties.push(difficulty);
    }
    
    updateDifficultyButtons();
}

function startQuizByDifficulty() {
    if (state.selectedDifficulties.length === 0) {
        showMessage('하나 이상의 난이도를 선택해 주세요.');
        return;
    }

    let filteredQuestions = historyQuestions.filter(q => 
        state.selectedDifficulties.includes(q.difficulty)
    );

    if (filteredQuestions.length === 0) {
        showMessage(`선택된 난이도에 해당하는 문제가 없습니다.`);
        return;
    }

    startQuiz(filteredQuestions, false);
}

function checkHistoryAnswer() {
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const userAnswer = historyAnswerInput.value.trim();

    if (document.getElementById('history-next-question-btn')) return;

    // 띄어쓰기 및 대소문자 무시 (정확도 향상)
    const normalizedUserAnswer = userAnswer.toLowerCase().replace(/\s/g, '');
    const normalizedCorrectAnswer = currentQuestion.answer.toLowerCase().replace(/\s/g, '');

    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;

    displayResult(isCorrect, currentQuestion.name, currentQuestion.answer, 'historyQuiz');
}


// --- 9. 결과 표시 및 다음 문제 로직 (통합) ---

function displayResult(isCorrect, eventName, correctAnswer, quizType) {
    const prefix = quizType === 'quiz' ? '' : 'history-';
    const resultMessage = document.getElementById(`${prefix}result-message`);
    const correctCountElement = document.getElementById(`${prefix}correct-count`);
    const quizActions = document.getElementById(`${prefix}quiz-actions`);
    const nextBtnId = `${prefix}next-question-btn`;

    resultMessage.classList.remove('text-green-400', 'text-red-400', 'font-bold');

    if (isCorrect) {
        state.score++;
        correctCountElement.textContent = state.score;
        resultMessage.textContent = '정답입니다.';
        resultMessage.classList.add('text-green-400', 'font-bold');
    } else {
        // 오답 메시지에서는 정답 표시
        resultMessage.innerHTML = quizType === 'quiz'
            ? `오답입니다.<br>정답: <strong>${correctAnswer}</strong>`
            : `오답입니다. 정답: <strong>${correctAnswer}</strong>`;
        resultMessage.classList.add('text-red-400', 'font-bold');

        if (quizType === 'quiz') {
             state.wrongCounts[eventName] = (state.wrongCounts[eventName] || 0) + 1;
             saveWrongCounts();
        }
    }

    // 다음 문제 버튼 생성
    quizActions.innerHTML = '';
    const nextBtn = document.createElement('button');
    nextBtn.id = nextBtnId;
    // Enter나 Spacebar로 바로 넘어갈 수 있도록 안내
    nextBtn.className = 'btn btn-primary text-lg';
    nextBtn.textContent = (state.currentQuestionIndex + 1) < state.questions.length ? '다음 문제' : '결과 보기';
    nextBtn.onclick = () => {
        state.currentQuestionIndex++;
        renderQuestion(state.isYearQuiz);
    };
    quizActions.appendChild(nextBtn);
    nextBtn.focus(); // 버튼에 포커스 이동
}

function showFinalScore() {
    const finalScoreText = document.getElementById('final-score-text');
    const totalQuestions = state.questions.length;
    const quizType = state.isYearQuiz ? '연도 퀴즈' : '단답형 퀴즈';

    finalScoreText.innerHTML = `
        ${quizType} 종료! <br>
        총 ${totalQuestions} 문제 중 <strong>${state.score} 문제</strong>를 맞췄습니다.
    `;
    showScreen('finalScore');
}

// --- 10. 키보드 이벤트 핸들러 ---
function moveToNextInput(currentInput) {
    const currentEvent = state.questions[state.currentQuestionIndex];
    const isDurationEvent = currentEvent.endYear > 0;
    
    // 입력된 값이 1자리 이상일 때만 다음으로 이동
    if (currentInput.value.length === 0) return;

    if (currentInput === startYearInput) {
        if (!startMonthInput.classList.contains('hidden')) startMonthInput.focus();
        else if (!startDayInput.classList.contains('hidden')) startDayInput.focus();
        else if (isDurationEvent) endYearInput.focus();
        else checkAnswer();
    } else if (currentInput === startMonthInput) {
        if (!startDayInput.classList.contains('hidden')) startDayInput.focus();
        else if (isDurationEvent) endYearInput.focus();
        else checkAnswer();
    } else if (currentInput === startDayInput) {
        if (isDurationEvent) endYearInput.focus();
        else checkAnswer();
    } else if (currentInput === endYearInput) {
        if (!endMonthInput.classList.contains('hidden')) endMonthInput.focus();
        else if (!endDayInput.classList.contains('hidden')) endDayInput.focus();
        else checkAnswer();
    } else if (currentInput === endMonthInput) {
        if (!endDayInput.classList.contains('hidden')) endDayInput.focus();
        else checkAnswer();
    } else if (currentInput === endDayInput) {
        checkAnswer();
    }
}

document.addEventListener('keydown', function(event) {
    const isQuizActive = !screens.quiz.classList.contains('hidden');
    const isHistoryQuizActive = !screens.historyQuiz.classList.contains('hidden');
    const nextBtnQuiz = document.getElementById('next-question-btn');
    const nextBtnHistory = document.getElementById('history-next-question-btn');
    const activeElement = document.activeElement;

    // 1. 스페이스바 (다음 문제 버튼 클릭)
    if (event.key === ' ') {
        if (nextBtnQuiz || nextBtnHistory) {
            event.preventDefault();
            (nextBtnQuiz || nextBtnHistory).click();
        }
    }

    // 2. 엔터 키 (답안 확인 및 포커스 이동)
    if (event.key === 'Enter') {
        event.preventDefault(); // 기본 Enter 동작 방지

        // 1순위: '다음 문제' 버튼이 있으면 클릭
        if (nextBtnQuiz || nextBtnHistory) {
            (nextBtnQuiz || nextBtnHistory).click();
            return;
        }

        if (isQuizActive) {
            if (activeElement.tagName === 'INPUT' && activeElement.type === 'number') {
                moveToNextInput(activeElement); // 연도 입력 필드 간 이동
            } else {
                checkAnswer(); // 마지막 필드에서 확인
            }
        } 
        else if (isHistoryQuizActive) {
            if (activeElement === historyAnswerInput) {
                checkHistoryAnswer();
            }
        }
    }
});

// 연표 검색 이벤트 리스너
document.getElementById('timeline-search').addEventListener('input', (e) => {
    renderTimeline(e.target.value);
});


// --- 11. 초기화 및 시작 ---
loadWrongCounts();
showScreen('menu');

