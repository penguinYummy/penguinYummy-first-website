/* =========================
   단어 학습 데이터

   word     : 문제로 보여줄 단어(한자/가나)
   reading  : 읽는 법(후리가나)
   meaning  : 정답으로 인정할 뜻 (첫 번째가 기본 표시 정답)
========================= */

const VOCAB_DATA = [

    { word: "私", reading: "わたし", meaning: ["나", "저"] },
    { word: "友達", reading: "ともだち", meaning: ["친구"] },
    { word: "学校", reading: "がっこう", meaning: ["학교"] },
    { word: "先生", reading: "せんせい", meaning: ["선생님"] },
    { word: "学生", reading: "がくせい", meaning: ["학생"] },

    { word: "会社", reading: "かいしゃ", meaning: ["회사"] },
    { word: "仕事", reading: "しごと", meaning: ["일", "업무"] },
    { word: "家族", reading: "かぞく", meaning: ["가족"] },
    { word: "友人", reading: "ゆうじん", meaning: ["친구", "벗"] },
    { word: "食べ物", reading: "たべもの", meaning: ["음식"] },

    { word: "飲み物", reading: "のみもの", meaning: ["음료", "마실 것"] },
    { word: "水", reading: "みず", meaning: ["물"] },
    { word: "お茶", reading: "おちゃ", meaning: ["차"] },
    { word: "電車", reading: "でんしゃ", meaning: ["전철", "기차"] },
    { word: "自転車", reading: "じてんしゃ", meaning: ["자전거"] },

    { word: "天気", reading: "てんき", meaning: ["날씨"] },
    { word: "今日", reading: "きょう", meaning: ["오늘"] },
    { word: "明日", reading: "あした", meaning: ["내일"] },
    { word: "昨日", reading: "きのう", meaning: ["어제"] },
    { word: "時間", reading: "じかん", meaning: ["시간"] },

    { word: "朝", reading: "あさ", meaning: ["아침"] },
    { word: "昼", reading: "ひる", meaning: ["점심", "낮"] },
    { word: "夜", reading: "よる", meaning: ["밤"] },
    { word: "本", reading: "ほん", meaning: ["책"] },
    { word: "映画", reading: "えいが", meaning: ["영화"] },

    { word: "音楽", reading: "おんがく", meaning: ["음악"] },
    { word: "旅行", reading: "りょこう", meaning: ["여행"] },
    { word: "病院", reading: "びょういん", meaning: ["병원"] },
    { word: "電話", reading: "でんわ", meaning: ["전화"] },
    { word: "写真", reading: "しゃしん", meaning: ["사진"] }

];
