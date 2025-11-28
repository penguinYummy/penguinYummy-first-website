// --- 1. 데이터 정의 ---
events = [
  { name: "5.10 총선거", year: 1948, month: 5, day: 10, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제헌 헌법 공포", year: 1948, month: 7, day: 17, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "대한민국 정부 수립 선포", year: 1948, month: 8, day: 15, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "북조선 인민 위원회 조직", year: 1947, month: 2, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "조선 민주주의 인민 공화국", year: 1948, month: 9, day: 9, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "농지 개혁법 제정", year: 1949, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "귀속 재산 처리법", year: 1949, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "반민특위 피습 사건", year: 1949, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "6.25 전쟁 시작", year: 1950, month: 6, day: 25, endYear: 1953, endMonth: 7, endDay: 27 },
  { name: "인천 상륙 작전", year: 1950, month: 9, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "1.4 후퇴", year: 1951, month: 1, day: 4, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "정전 회담 시작", year: 1951, month: 7, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "정전 협정 체결", year: 1953, month: 7, day: 27, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제2대 국회 구성", year: 1950, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "1차 개헌(발췌 개헌)", year: 1952, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "부산 정치 파동", year: 1952, month: 5, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "2차 개헌 (사사오입 개헌)", year: 1954, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제 3대 대통령 선거", year: 1956, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "진보당 사건", year: 1959, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "8월 전원 회의 사건", year: 1956, month: 8, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "북한의 제 1차 5개년 계획", year: 1957, month: 0, day: 0, endYear: 1961, endMonth: 0, endDay: 0 },
  { name: "천리마 운동", year: 1956, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "3.15 부정선거", year: 1960, month: 3, day: 15, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "4.19 혁명", year: 1960, month: 4, day: 19, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "대학교수단의 시국 선언", year: 1960, month: 4, day: 25, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "5.16군사정변", year: 1961, month: 5, day: 16, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "혁명 공약", year: 1961, month: 5, day: 16, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제5대 대통령 선거", year: 1963, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "6.3 시위", year: 1964, month: 6, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "한일협정 체결", year: 1965, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "베트남 파병", year: 1964, month: 0, day: 0, endYear: 1973, endMonth: 0, endDay: 0 },
  { name: "브라운 각서", year: 1966, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제 6대 대통령 선거", year: 1967, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "푸에블로호 나포 사건", year: 1968, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "6차 개헌(3선 개헌)", year: 1969, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "7차 개헌 (유신 선포)", year: 1972, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제 7대 대통령 선거", year: 1971, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "7.4 남북 공동 성명", year: 1972, month: 7, day: 4, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "박정희 대통령의 비상계엄(국회 해산)", year: 1972, month: 10, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제 8대 대통령 선거", year: 1972, month: 12, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "긴급 조치 1호", year: 1974, month: 1, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "민청학련", year: 1974, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "인민 혁명단 재건 위원회 조작 사건", year: 1975, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "3.1 민주구국 선언", year: 1976, month: 3, day: 1, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제9대 대통령 선거", year: 1978, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "부마 민주 항쟁", year: 1979, month: 10, day: 16, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "10 26 사태", year: 1979, month: 10, day: 26, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "부마 민주 항쟁", year: 1979, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제10대 대통령 선거", year: 1979, month: 12, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "12 12 군사 반란", year: 1979, month: 12, day: 12, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "서울의 봄", year: 1980, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "5 18 민주화 운동", year: 1980, month: 5, day: 18, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "전두환 정부 수립", year: 1981, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "4 13 호헌 조치", year: 1987, month: 4, day: 13, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "이한열 최루탄 피격", year: 1987, month: 6, day: 9, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "국민 대회", year: 1987, month: 6, day: 10, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "명동 성당 농성", year: 1987, month: 6, day: 10, endYear: 1987, endMonth: 6, endDay: 15 },
  { name: "국민 평화 대행진", year: 1987, month: 6, day: 26, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "6 29 민주화 선언 발표", year: 1987, month: 6, day: 29, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제1차 경제 개발 5개년 계획", year: 1962, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제2차 경제 개발 5개년 계획", year: 1967, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제 3 4차 경제 개발 5개년 계획", year: 1972, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제 1차 석유 파동", year: 1973, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "수출 100억 달러 달성", year: 1977, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제 2차 석유 파동", year: 1978, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "광주 대단지 사건", year: 1971, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "새마을 운동", year: 1970, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "함평 고구마 사건", year: 1976, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "전태일 분신", year: 1970, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "낙동강 페놀 오염 사건", year: 1991, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "환경청 설치", year: 1980, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "국가 환경 선언문", year: 1992, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "미니스커트 등장(OO년대)", year: 1960, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "청바지와 티셔츠 청년 문화(OO년대)", year: 1970, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "경범죄 처벌법", year: 1973, month: 0, day: 0, endYear: 1980, endMonth: 0, endDay: 0 },
  { name: "삼백 산업 발달(OO년대)", year: 1950, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "혼,분식 장려 운동(OO년대)", year: 1960, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "전기 구이 통닭(OO년대)", year: 1960, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "후라이드 치킨(OO년대)", year: 1970, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "양념 통닭(OO년대)", year: 1980, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "중학교 이상의 교육 받은 인구 증가(OO년대)", year: 1960, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "무즙 파동", year: 1964, month: 12, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "고교 평준화 제도(OO년대)", year: 1970, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "대학생 수 증가와 고등 교육 대중화(OO년대)", year: 1980, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "라디오 보급(OO년대)", year: 1950, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "텔레비전 보급(OO년대)", year: 1960, month: 0, day: 0, endYear: 1970, endMonth: 0, endDay: 0 },
  { name: "컬러텔레비전 보급(OO년대)", year: 1980, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "프로레슬링과 권투(OO년대)", year: 1960, month: 0, day: 0, endYear: 1970, endMonth: 0, endDay: 0 },
  { name: "고교 야구(OO년대)", year: 1970, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "서울 아시안 게임", year: 1986, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "서울 올림픽 대회", year: 1988, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "대중가요에 대한 심의(OO년대)", year: 1960, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "긴급조치9호", year: 1975, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "3당 합당", year: 1990, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "금융 실명제", year: 1993, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "외환 위기 극복", year: 2001, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "노태우 정부", year: 1988, month: 0, day: 0, endYear: 1993, endMonth: 0, endDay: 0 },
  { name: "김영삼 정부", year: 1993, month: 0, day: 0, endYear: 1998, endMonth: 0, endDay: 0 },
  { name: "김대중 정부", year: 1998, month: 0, day: 0, endYear: 2003, endMonth: 0, endDay: 0 },
  { name: "노무현 정부", year: 2003, month: 0, day: 0, endYear: 2008, endMonth: 0, endDay: 0 },
  { name: "이명박 정부", year: 2008, month: 0, day: 0, endYear: 2013, endMonth: 0, endDay: 0 },
  { name: "박근혜 정부", year: 2013, month: 0, day: 0, endYear: 2017, endMonth: 0, endDay: 0 },
  { name: "문재인 정부", year: 2017, month: 0, day: 0, endYear: 2022, endMonth: 0, endDay: 0 },
  { name: "윤석열 정부", year: 2022, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "광우병 파동", year: 2008, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "세월호 참사", year: 2014, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "국정 농단", year: 2016, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제헌 헌법에 지방 자치 규정", year: 1948, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "최초의 지방 의회 선거", year: 1952, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "유신 헌법에서 통일까지 지방 의회 유보", year: 1972, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "개정 헌법에서 통일까지 지방 자치 다시 규정", year: 1987, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "지방 의회 선거 실시", year: 1991, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "지방 자치 단체장 선거와 지방 의회 선거 동시 실시", year: 1995, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "교육감 직선제 도입", year: 2007, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "노동자 대투쟁", year: 1987, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "우루과이 라운드(OO년대)", year: 1990, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "자유 무역 협정", year: 2004, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "호주제 폐지", year: 2008, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "한보 그룹과 같은 대기업의 부도", year: 1997, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "국제 통화 기금에 구제 금융 지원 요청", year: 1997, month: 11, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "국민 기초 생활 보장법 제정", year: 1999, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "최저 임금제 확대 적용", year: 2000, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "고용 보험 대상자 확대", year: 2004, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "근로 장려 세제 도입", year: 2007, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "기초 연금 제도 실시", year: 2014, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "북한 이탈 주민의 보호 및 정착 지원에 관한 법률", year: 1997, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "주체 사상(OO년대)", year: 1950, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "사회주의 헌법", year: 1972, month: 12, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제6차 조선 노동당 대회", year: 1980, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "김일성 사망", year: 1994, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "합작 회사 경영법", year: 1984, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "고난의 행군(OO년대)", year: 1990, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "7.1 경제 관리 개선 조치", year: 2002, month: 7, day: 1, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "최초의 이산가족 상봉", year: 1984, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "이산가족 고향 방문단과 공연 예술단 방문", year: 1985, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "남북 기본 합의서", year: 1991, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "북한의 핵확산 금지 조약 탈퇴", year: 1993, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "6.15 남북 공동 선언", year: 2000, month: 6, day: 15, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제2차 남북 정상 회담", year: 2007, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "북미 정상 회담", year: 2018, month: 6, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "4.27 판문점 선언", year: 2018, month: 4, day: 27, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "한일 청구권 협정", year: 1965, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "김학순 할머니의 피해 사실 증언", year: 1991, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "고노 담화", year: 1993, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "동북공정", year: 2002, month: 0, day: 0, endYear: 2007, endMonth: 0, endDay: 0 },
  { name: "소련과 국교 수립(북방 외교)", year: 1990, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "남북 유엔 동시 가입", year: 1991, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "중국과 국교 수립(북방외교)", year: 1992, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "조선 총독부 청사 철거", year: 1995, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "경제 협력 개발 기구 가입", year: 1996, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "외환 위기", year: 1997, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제1차 남북 정상 회담", year: 2000, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "한일 월드컵 대회 개최", year: 2002, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "G20 서울 정상 회의", year: 2010, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "제3차 남북 정상 회담", year: 2018, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "3차 개헌(내각 책임제, 국회 양원제)", year: 1960, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "4차 개헌(3.15 부정 선거 관련자 처벌)", year: 1960, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "5차 개헌(대통령 직선제)", year: 1962, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "8차 개헌(대통령 7년 단임제)", year: 1980, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "9차 개헌", year: 1987, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 },
  { name: "닉슨 독트린", year: 1969, month: 0, day: 0, endYear: 0, endMonth: 0, endDay: 0 }
];

const historyQuestions = [
    // 난이도 '하'
    { name: "제헌 국회가 계승한 이곳의 이름은?", answer: "대한민국 임시 정부", difficulty: "하" },
    { name: "대한 민국 정부 수립 때 대통령인 이승만과 같이 뽑힌 부통령의 이름은?", answer: "이시영", difficulty: "하" },
    { name: "농지 개혁을 실시하고 한 가구당 몇 정보 이상의 농지 소유를 금지하였나요? (숫자만 입력)", answer: "3", difficulty: "하" },
    { name: "이승만 정부가 조봉암을 간첩죄와 국가 보안법으로 사형 시킨 사건의 이름은?", answer: "진보당 사건", difficulty: "하" },
    { name: "1968년 1월 미국 해군 장교와 민간인 등 80여명을 태운 미국 첩보함 푸에블로호가 북한에 사로잡힌 사건은?", answer: "푸에블로호 나포 사건", difficulty: "하"},
    { name: "미국과 핑퐁 외교를 한 나라는? ", answer: "중국", difficulty: "하" },
    { name: "미군이 남한에 주둔함을 명시하여 남한에서의 미국의 영향력이 더욱 강해지게 된 조약의 이름은?", answer: "한미 상호 방위 조약", difficulty: "하"},
    { name: "박정희가 김재규 정보부장에게 피살된 사건은?", answer: "10.26 사태", difficulty: "하"},
    { name: "전두환 정부의 계엄군의 무자비한 진압에 분노한 광주시민이 조직하여 계엄군에 맞선 것은?", answer: "시민군", difficulty: "하"},
    { name: "계엄군이 광주 시민들과 혐상을 거부하고 5월 27일 탱크를 세워 진격한 곳은?", answer: "전남도청", difficulty: "하"},
    { name: "1948년에 공포된 대한민국의 최초 헌법은?", answer: "제헌 헌법", difficulty: "하" },
    { name: "북조선 인민 위원회가 제2차 미소 공동 위원회가 결렬된 직후 임시 헌법 초안을 확정하며 창설한 군대의 이름은?", answer: "조선 인민군", difficulty: "하"},
    { name: "신익희, 장면 등은 개헌에 반대하며 이승만 정부와 자유당에 저항 하기 위해 창당한 당의 이름은?", answer: "민주당", difficulty: "하" },
    { name: "광복 이전까지 일본인이 소유하던 한국 내 재산을 이승만 정부가 어떤 법을 제정하여 민간에 매각했나요?", answer: "귀속 재산 처리법", difficulty: "하"},
    { name: "1950년 9월 국군과 유엔군은 어떤 작전을 실시하여 전세를 역전하고 서울을 되찾았나요?", answer: "인천 상륙 작전", difficulty: "하"},
    { name: "경향 신문을 폐간하며 언론을 통제하며 독재 체제를 강화한 정부의 대통령은?", answer: "이승만", difficulty: "하"},
    { name: "북한에서 1956년부터 실시하여 대중의 정신력 강화와 노력 경쟁을 통해 노동 생산력을 높인 것의 이름은?", answer: "천리마 운동", difficulty: "하"},
    { name: "자유당의 부정 선거 움직임에 대해 시민들이 저항할 때 최류탄을 맞고 숨진 고등학생의 이름은?", answer: "김주열", difficulty: "하"},
    { name: "5.16 군사 정변 이후 박정희이 비밀리에 창당에 들어간 당의 이름은?", answer: "민주 공화당", difficulty: "하"},
    { name: "한국인과 베트남인 사이에서 태어난 아이를 부르는 명칭으로 베트남 파병 이후 문제가 된것은?", answer: "라이따이한", difficulty: "한"},
    { name: "베트남 파병 때 식물의 잎을 떨어뜨리기 위해 살포하는 제초제로 사용되어 한국군에게 후유증을 준 것의 이름은?", answer: "고엽제", difficulty: "하"},
    { name: "박종희 정부는 1972년 10월 비상계엄을 선포하며 헌정 질서를 중단시키며 이곳을 해산 시키며 모든 정치 활동을 금지했다", answer: "국회", difficulty: "하"},
    { name: "통일 주체 국민 회의의 간접 선거로 당선된 대통령의 임기는?(숫자만 입력)", answer: "6", difficulty: "하"},
    { name: "박정희가 유신체제를 뭐라 부르며 합리화했나요?", answer: "한국적 민주주의", difficulty: "하"},
    { name: "환경 보전을 위한 국제적 노력으로 오존층 보호를 위해 가입한 곳의 이름은?", answer: "빈 협약", difficulty: "하"},
    { name: "환경 보전을 위한 국제적 노력으로 바다 보호를 위해 가입한 곳의 이름은?", answer: "런던 협약", difficulty: "하"},
    { name: "박정희 정부가 입시 과열을 막기 위해 시행한 제도는?", answer: "중학교 무시험 추첨제", difficulty: "하"},
    { name: "전두환 정부가 대학생들의 호응을 얻기 위해 민속 문화에 대한 관심을 불러일으키겠다는 취지로 실행한 전통문화 관련 대규모 관제 행사는?", answer: "국풍 81", difficulty: "하"},
    { name: "1979년 동대문 평화시장의 한 공장에서 일하던 전태일은 어떤 법의 준수를 요구하며 분신하였나요?", answer: "근로 기준법", difficulty: "하"},
    { name: "정부에 의해 강제 이주한 서울 철거민들과 새로 이주한 빈민들이 정부의 무분별한 철거민 대책과 제대로 준비되지 않은 도시 행정에 반발해 경찰과 대치한 사건의 이름은?", answer: "광주 대단지 사건", difficulty: "하"},
    { name: "6.25 전쟁 이후 이승만 정부의 철도, 항만 등을 설치하는 산업을 이르는 말은?", answer: "기간산업", difficulty: "하"},
    { name: "장발하거나 미니스커트를 입은 사람을 경찰이 단속하게 한 법의 이름은?", answer: "경범죄 처벌법", difficulty: "하"},
    { name: "1980년대 중반부터 저금리, 저유가의 3저 호항이 나타났다. 이때 앞서 말한 두개를 제외한 한가지의 이름은? ", answer: "저달러", difficulty: "하"},
    { name: "1950년대 말 미국의 무상 원조가 감소하고 지원이 방식이 OO 차관으로 바뀌었다. OO에 들어갈 말은?", answer: "유상", difficulty: "하"},
    { name: "농협이 작물을 사겠다는 약속을 지키지 않아 농민들이 보상 투쟁을 벌여 1년 6개월여 만에 보상을 받아 낸 사건은?", answer: "함평 고구마 사건", difficulty: "하"},
    { name: "환경 문제에 대응하기 위해 대대적인 산림 녹화 선업을 추진해 성공을 거두고 국립 공원과 개발 제한 구역을 설정하였다.(o/x)", answer: "o", difficulty: "하"},
    { name: "소련과 같은 동유럽 사회 주의 국가를 상대로 적극적인 북방 외교에 나선 정부의 대통령은?", answer: "노태우", difficulty: "하"},
    { name: "5.18 민주화 운동의 진상과 전두환 정부의 비리를 규명하는 청문회를 연 정부의 대통령은?", answer: "노태우", difficulty: "하"},
    { name: "스스로를 문민정부라 부른 정부의 대통령은?", answer: "김영삼", difficulty: "하"},
    { name: "하나회를 숙청하고 전두환과 노태우를 구속한 정부의 대통령은?", answer: "김영삼", difficulty: "하"},
    { name: "IMF의 풀네임은?", answer: "국제 통화 기금", difficulty: "하"},
    { name: "금융실명제와 공직자 재산 공개를 시행한 정부의 대통령은?", answer: "김영삼", difficulty: "하"},
    { name: "대한민국 헌정 사상 최초의 여야 간 평화적 정권 교체를 이룬 대통령은?", answer: "김대중", difficulty: "하"},
    { name: "국민 기초 생활법을 제정한 정부의 대통령은?", answer: "김대중", difficulty: "하"},
    { name: "햇볕 정책이라는 이름으로 금강산 관광 등 대북 협력 정책을 추진한 정부의 대통령은?", answer: "김대중", difficulty: "하"},
    { name: "최초의 남북 정상 회담을 시행한 정부의 대통령은?", answer: "김대중", difficulty: "하"},
    { name: "주 5일제를 시행한 정부의 대통령은?", answer: "노무현", difficulty: "하"},
    { name: "기존의 규제를 완화하고 세금을 감면하고 4대강 살리기와 같은 토목 사업에 적극적이던 정부의 대통령은?", answer: "이명박", difficulty: "하"},
    { name: "천안함 사건과 연평도 포격이 일어나 남북 관계가 냉각된 시기의 정부의 대통령은?", answer: "이명박", difficulty: "하"},
    { name: "청탁 금지법을 제정한 정부의 대통령은?", answer: "박근혜", difficulty: "하"},
    { name: "국회 선진화법을 만든 정부의 대통령은?", answer: "박근혜", difficulty: "하"},
    { name: "1990년대 항일 유격대 전통을 앞세워 흔들리는 체제를 안정화하려 한 북한의 경제난을 비유한 말은?", answer: "고난의 행군", difficulty: "하"},
    { name: "1990년대 북한은 체제가 위협 받으며 심각한 경제 위기를 겪었다 이때 김정일을 비롯한 북한 지도자가 택한 군이 사회 전체를 이끄는 통치 방식은?", answer: "선군 정치", difficulty: "하"},
    { name: "1980년대 후반 시민운동이 본격화로 등장한 국민의 기본적인 인권을 보호하기 위한 기관은? ", answer: "국가 인권 위원회", difficulty: "하"},
    { name: "사회주의 체제가 위기에 빠지자 북한 전역에 등장한 주민들의 자유 시장은?", answer: "장마당", difficulty: "하"},
    { name: "2008년대 남성 가장을 중심으로 가족 구성원들의 출생 혼인 사망등을 기록하는 제도는?", answer: "호주제", difficulty: "하"},
    { name: "김일성이 만든 사상, 정치, 셩제, 군사 부분에서 주체성을 확보해야 생존이 가능하다는 사상 체계는?", answer: "주체사상", difficulty: "하"},
    // 난이도 '중'
    { name: "세계 무역을 확대하고 회원국 사이의 통상 분쟁을 해결하기 위해 1995년에 설립된 국제기구는? (한국어로)", answer: "세계 무역 기구", difficulty: "중"},
    { name: "유신 헌법은 국회 별관에 모여 박정희 정부가 단독으로 통과 시켰다.(o/x)", answer: "x", difficulty: "중"},
    { name: "북한이 시장 경제 요소를 부분적으로 도입하며 발표한 것은?", answer: "7.1 경제 관리 개선 조치", difficulty: "중"},
    { name: "1984년 북한의 서방 국가와 단순한 물자 교역을 넘어선 외국인 투자 유치 정책은?", answer: "합영법", difficulty: "중"},
    { name: "1972년 12월 북한의 김일성이 채택한 주체사상을 국가 활동의 지도 이념으로 공식 규정한 헌법은?", answer: "사회주의 헌법", difficulty: "중"},
    { name: "지방 자치를 부르는 말로 국민에게 골고루 영향을 미치는 기초적이고 대중적인 민주주의를 뜻하는 말은?", answer: "풀뿌리 민주주의", difficulty: "중"},
    { name: "미국과 FTA를 체결하며 발생한 사회적 논란으로 미국산 쇠고기의 수입 및 검역 조건을 완화했으나 이에대해 반대 시위가 일어난 사건은?", answer: "광우병 파동", difficulty: "중"},
    { name: "노무현 대통령이 국회의 탄핵을 받았지만 헌번 재판소에서 이를 기각하였다.(o/x)", answer: "o", difficulty: "중"},
    { name: "김영삼 대표가 임기 말 외환 위기를 맞아 IMF에 요청한 기업이나 국가 등이 파산하는 것을 막기 위해 금융 기관이 정책적으로 자금을 지원하는 것의 이름은?", answer: "구제 금융", difficulty: "중"},
    { name: "남한에서 대한민국 정부가 수립되자 북한도 총선거를 실시해 만든 남한의 국회에 해당하는 곳의 이름은?", answer: "최고 인민 위원회", difficulty: "중"},
    { name: "산업화가 진행되며 정부와 기업은 수출 경쟁력을 확보하기 위해 노동자의 권리를 제한하고 어떤 정책을 추진했나요?", answer: "저임금 정책", difficulty: "중"},
    { name: "광복 당시 농민들은 어떤 원칙에 따라 토지를 개혁하기를 원했나요?(OO의 원칙으로 입력)", answer: "경자 유전의 원칙", difficulty: "중" },
    { name: "1952년 이승만 대통령의 재선을 위해 직선제와 양원제를 혼합하여 변칙적으로 개헌한 사건은?", answer: "발췌 개헌", difficulty: "중" },
    { name: "박정희 정부가 시행한 농산물 가격을 낮게 유지하는 정책은?", answer: "저곡가 정책", difficulty: "중"},
    { name: "제2차 세계 대전 후 세계 무역 질서의 표준이 되었던 GATT 체제를 확대, 재편하기 위한 다자간 무역 협상은?", answer: "우루과이 라운드", difficulty: "중"},
    { name: "6월 민주 항쟁 이후 열악한 노동 환경에 처해 있던 노동자들이 일으킨 노동 운동은?", answer: "노동자 대투쟁", difficulty: "중"},
    { name: "우리나라가 2000년대 칠레를 시작으로 체결 된 무역 장벽을 철폐하여 마치 한 국가처럼 교역할 수 있는 협정은? (한국어로)", answer: "자유 무역 협정", difficulty: ""},
    { name: "어려워진 농촌 경제를 살리기위해 박정희 정부가 새마을 운동과 같이 시행한 제채는?", answer: "이중 곡가제", difficulty: "중"},
    { name: "중앙정보부장과 일본 외무대신 오히라 사이의 회담이 알려지며 1964년 6.3시위가 일어난 후 일본에서 한일 협정을 체결했다(o/x)", answer: "o", difficulty: "중"},
    { name: "이승만 정부가 임시 수도인 부산에 비상 계엄령을 선포하고 야당 의원들을 공산당 혐의로 몰아 구속한 사건은?", answer: "부산 정치 파동", difficulty: "중" },
    { name: "6.25 전쟁 중 지휘관들의 비리로 군수품 보급이 제대로 이루어지지 않아 군인 수만명이 죽은 사건은?", answer: "국민 방위군 사건", difficulty: "중" },
    { name: "박정희를 중심으로한 신 군부가 정권을 장악하고 어떤곳을 기반으로 군정을 실시 하였나요?", answer: "국가 재건 최고 회의", difficulty: "중" },
    { name: "국가 정보를 장악하고 주요 인사를 감시하며 현재는 국가 정보원으로 불리는 이곳은?", answer: "중앙 정보부", difficulty: "중" },
    { name: "일본에서 유신 체제 반대 운동을 하던 김대중이 납치된 후 시위가 벌어지고 민간에서 실행한 서명 운동의 이름은?", answer: "개헌 청원 100만 인 서명 운동", difficulty: "중"},
    { name: "인민 혁명당 재건 위원회 조작 사건의 계기가 되는 사건의 이름은?", answer: "민청학련 사건", difficulty: "중"},
    { name: "전두환 정부는 야간 통행금지를 실시하는 등 국민을 탄압하였다(o/x)", answer: "x", difficulty: "중"},
    { name: "전두환 정부는 제2차 석유 파동에 따른 경제 위기 상황에서 동일 산업에 중복 투자한 기업을 폐쇄하였다.(o/x)", answer: "x", difficulty: "중"},
    { name: "박정희 정부의 탄압에 맞서 언론인들이 벌인 것은?", answer: "자유 언론 수호 투쟁", difficulty: "중"},
    { name: "전두환이 유신 헌법에 따라 제11대 대통령으로 선출 된 후 몇년 단임의 대통령을 선출하도록 헌법을 개정했나요(숫자만 입력)", answer: "7", difficulty: "중"},
    { name: "전두환 정부의 박종철 고문 치사 사건에 대한 축소 은폐 사실을 밝힌 곳은?", answer: "천주교 정의 구현 사제단", difficulty: "중"},
    { name: "유신체제 반대 운동 중 재야인사들이 발표한 것은?", answer: "3.1 민주 구국 선언", difficulty: "중"},
    { name: "유신 헌법에서 대통령은 연임 제한이 완전히 사라져 종신 집권이 가능하고 전체 국회의 3분의 1을 임명할 수 있으며 대법관을 포함한 모든 법관의 임명권을 가졌고 긴급조치를 시행할 수 있었다(o/x)", answer: "o", difficulty: "중"},
    { name: "거창 민간인 희생 사건을 자행한 정부의 대통령은? ", answer: "이승만", difficulty: "중"},
    { name: "광복 직후 북한의 좌우익 세력이 함께 결성한 이곳의 이름은?", answer: "인민 위원회", difficulty: "중"},
    { name: "박정희 정부가 국회 의원 선거를 앞두고 고위 공무원에게 이것을 허용하는 등 여당에 유리하게 헌법을 바꿨다 이것의 이름은?", answer: "선거 운동", difficulty: "중"},
    { name: "정부가 1949년에 좌익 전향자들을 보호, 지도한다는 명분으로 조직한 단체의 이름은?", answer: "국민 보도 연맹", difficulty: "중"},
    { name: "인천 상륙 작전으로 서울을 되찾았지만 북한을 돕기 위해 참전한 중국군에 밀려 서울을 빼았긴 사건의 이름은?", answer: "1.4 후퇴", difficulty: "중"},
    { name: "닉슨 독트린은 국제적인 화해 분위기로 한반도에도 영향을 주어 남과 북 사이에 십자가 회담 및 고위층의 상호 비밀 방문이 성사 되었다(o/x)", answer: "x", difficulty: "중"},
    { name: "광주 시민들이 비상계엄의 철폐와 민주 정치 체제의 회복을 요구하기 위해 연 대회는?", answer: "민주 수호 범시민 궐기 대회", difficulty: "중"},
    { name: "박정희 정부가 임금 체불과 직장 폐쇄에 항의한 노동자를 폭력으로 탄압한 사건은?", answer: "YH무역사건", difficulty: "중"},
    { name: "3당 합당으로 생겨난 당의 이름은?", answer: "민주 자유당", difficulty: "중"},
    { name: "6.29 민주화 선언에 따라 몇년 단임의 대통령을 국민이 직접 선출하도록 헌법이 개정되었나요?(숫자만 입력)", answer: "5", difficulty: "중"},
    { name: "둘 중 더 먼저 일어난 사건을 고르시오(숫자만 입력) 1. 최규하 대통령 사퇴 2. 국가 보위 비상 대책 위원회 구성 ", answer: "2", difficulty: "중"},
    // 난이도 '상'
    { name: "조선 노동당에서 김일성의 후계자로 결정된 김정일이 공식 등장한 대회는?", answer: "제6차 조선 노동당 대회", difficulty: "상"},
    { name: "박정희 때 유신체제에 맞서 민주화 운동을 전개한 대학교수들이 시국 선언을 발표했다(O/X)", answer: "X", difficulty: "상"},
    { name: "경제난 등으로 북한 이탈 주민이 많아지자 이들을 돕기 위해 제정된 법은?", answer: "북한 이탈 주민의 보호 및 정착 지원에 관한 법률", difficulty: "상"},
    { name: "전두환 정부 때 민주화에 대한 열망으로 총선에서 제 1야당으로 떠오른 OO은 재야인사, 학생 등과 함께 대통령 직선제 개헌을 요구하는 OO을 펼쳤다. ex) 박정희, 광주 민주화 운동", answer: "신한 민주당, 개헌 청원 1천만 명 서명 운동", difficulty: "상"},
    { name: "유신체제를 강하게 비판하여 박정희 정부에 의해 국회의원에서 제명당한 인물은?", answer: "김영삼", difficulty: "상"},
    { name: "국회의 다수당이 행정부를 운영하는 정치 형태는?", answer: "내각 책임제", difficulty: "상"},
    { name: "1967년 박정희가 윤보선을 근소한 차이로 이기고 제6대 대통령에 당선되었다(O/X)", answer: "X", difficulty: "상"},
    { name: "박종철 고문 치사 사건 은폐를 규탄하고 호헌 철폐 철폐를 요구하는 국민 대회 전날 의식 불명 상태에 빠진 사람은?", answer: "이한열", difficulty: "상"},
    { name: "민의원과 참의원으로 구성된 국회는?", answer: "양원제 국회", difficulty: "상"},
    { name: "제 1차 경제 개발 5개년 계획: 차관 도입, 외화 수입 제 2차 경제 개발 5개년 계획: 수출 중심의 경제 정책, 경부 고속도로 건설  제 3,4차 경제 개발 5개년 계획: 포항, 울산 창원 등 대규모 산업 단지 조성(o/x)", answer: "x", difficulty: "상"},
    { name: "군사 원조: 한국에 있는 한국군의 현대화 계획을 위해 앞으로 수년 동안 상당량의 장비를제 공한다. 경제 원조: 이미 약속한 바 있는 1억 5천만 달러 규모의 차관에 덧붙여 한국의 경제 개발을 돕기 위한 추가 차관을 제공한다. 의 내용이 담긴 것의 이름은?", answer: "브라운 각서", difficulty: "상"},
    // { name: "전두환의 12.12 군사반란은 박정희 정부 때 일어났다", answer: "o", difficulty: "상"},
    { name: "근면,자조,협동 정신을 강조한 것의 이름은?", answer: "새마을 운동", difficulty: "상"},
    { name: "여소야대 구조를 벗어나오기 위해 3당 합당을 진행하였다. 이때 3당 합당에 참여한 당의 이름을 첫 음절의 초성의 자음 순서대로 적으시오 ex) 과당, 육탄당, 포도당 ", answer: "민주 정의당, 신민주 공화당, 통일 민주당", difficulty: "상"},
    { name: "1960년대 이래 급속히 진전되어 온 산업화와 도시화로 우리의 자연 환경과 생활 환경은 이제 더 이상 방치할 수 없을 정도로 악화 되었다. 지금 적절히 대처하지 아니하면 우리의 환경은 더욱 오염되어 품위 있고 건강한 삶의 유지는 물론 지속적인 국가 발전도 어렵게 될것임이 분명하다.의 내용이 담긴 것은?", answer: "국가 환경 선언문", difficulty: "상"},
    { name: "올바른 순서대로 숫자를 적으시오 1. 국가 환경 선언문, 2. 낙동강 페놀 오염 사건, 3. 환경청 설치", answer: "3 2 1", difficulty: ""},
    { name: "YH무역 사건으로 경찰의 진압으로 희생당한 피해자의 이름은?", answer: "김경숙", difficulty: "상"},
    { name: "순서에 따라 숫자만 쓰시오1. 최저임금제 확대 적용 2. 고용 보험 대상자 확대 3. 근로 장려 세제 도입 4. 기초 연금 제도 실시 5. 국민 기초 생활법 제정", answer: "5 1 2 3 4", difficulty: "상"},
    { name: "1956년 북한에서 김일성 개인숭배와 경제 정책을 비판하는 사건이 일어나자 김일성은 이를 구실로 비판 세력을 숙청하고 권력에서 몰아낸 사건은?", answer: "8월 전원 회의 사건", difficulty: "상"},
    { name: "북한이 각지의 인민 위원회를 통합하고 김일성을 위원장으로 선출한 곳의 이름은?", answer: "북조선 임시 인민 위원회", difficulty: "상"},
    { name: "애치슨 라인에서 태평양의 미국 방위선을 OO-OO-OO-OO을 잇는 선으로 정하였다. 이때 빈칸에 들어갈 이름을 순서대로 적으시오 ex) 한국, 중국, 미국", answer: "알류샨 열도, 일본, 오키나와, 필리핀", difficulty: "상"},
    { name: "오랫동안 사법 살인이라 불리며 박정희 정부가 8명에게 사형을 선고한 사건은?", answer: "인민 혁명당 재건 위원회 조작 사건", difficulty: "상"},
    { name: "천주교 신부들이 유신체제 반대 운동을 위한 조직한 곳의 이름은?", answer: "천주교 정의 구현 전국 사제단", difficulty: "상"},
    { name: "박정희 정부가 부정 선거에 대한 비난이 거세지자 중앙 정보부가 일부 유럽 유학생과 교민이 간첩활동을 했다고 발표한 사건은?", answer: "동백림 간첩단 사건", difficulty: "상"},
    { name: "1. 반공을 국시의 제일의로 삼고 지금까지 형식적이고 구호에 그친 반공 태세를 재정비 강화 한다. 4. 이와 같은 우리의 과업이 성취되면 참신하고도 양심적인 정치인들에게는 언제든지 정권을 이양하고 우리 들은 본연의 임무에 복귀할 준비를 갖춘다 이 내용이 담긴 것의 이름은?", answer: "혁명 공약", difficulty: "상" },
    { name: "5.16 군사 정변 이후 계엄령을 선포하고 군부 세력이 어떤 곳을 설치하고 혁명 공약을 발표하였나요?", answer: "군사 혁명 위원회", difficulty: "상" },
    { name: "조봉암이 진보당을 창당하며 주장한 이론의 이름은?", answer: "평화 통일론", difficulty: "상" },
    { name: "한개의 군사 분계선을 확정하고 쌍방이 이선으로부터 후퇴하여 비무장 지대를 설정한다. 한국 경외로부터 증원하는 작전 비행기, 장갑 차량 등을 들여오는 것을 정지한다. 의 내용이 담긴 것의 이름은?", answer: "정전 협정", difficulty: "상"},
    { name: "순서에 따라 숫자만 쓰시오 1. 제헌 헌법에 지방 자치 규정, 2. 유신 헌법에서 통일까지 지방 의회 유보, 3. 지방 의회 선거 실시, 4. 교육감 직선제 도입, 5. 지방 자치 단체장 선거와 지방 의회 선거 동시 실시, 6. 최초의 지방 의회 선거, 7. 개정 헌법에 지방 자치 다시 규정", answer: "1 6 2 7 3 5 4", difficulty: "상"},
    { name: "1979년 김영삼 의원 제명에 반발하여 부산과 마산 지역에서 발생한 대규모 반유신 독재 민주화 운동은?", answer: "부마 민주 항쟁", difficulty: "상" },
    { name: "남반구의 추운 해안 지역과 섬들에 주로 서식하는 한 조류가 있다. 이 동물은 종에 따라 몸무게가 약 1~40kg, 몸길이가 40cm에서 120cm 정도까지 다양하며, 두꺼운 지방층과 촘촘한 깃털로 낮은 기온을 견딘다. 날개는 하늘을 나는 데 쓰이지 않지만, 물속에서 마치 지느러미처럼 사용해 매우 빠르게 유영할 수 있다. 육지에서는 뒤뚱거리며 걷거나 배로 미끄러지는 특징적인 움직임을 보이며, 주로 크릴과 작은 물고기를 먹는다. 검은 등과 흰 배의 선명한 대비가 특징인 이 동물은 무엇인가?", answer: "펭귄", difficulty: "상" },
    { name: "장면 정부가 경제 개발 계획을 마련하고 국토 건설 사업을 추진하며 내세운 것은?", answer: "경제 제일주의", difficulty: "상"}
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

    // 띄어쓰기 및 대소문자 무시
    const normalizedUserAnswer = userAnswer.toLowerCase().replace(/\s/g, '');
    const normalizedCorrectAnswer = currentQuestion.answer.toLowerCase().replace(/\s/g, '');

    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;

    displayResult(isCorrect, currentQuestion.name, currentQuestion.answer, 'historyQuiz');
}


// --- 9. 결과 표시 및 다음 문제 로직  ---

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






