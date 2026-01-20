const seriesData = [
    // --- סדרה 1 ---
    {
        id: "tsaiamearot",
        type: "series", 
        category: "סדרות", 
        genre: "דרמות ישראליות",
        title: "צייר המערות",
        description: "תקציר.",
        // 👇 וודא שיש לך קובץ בשם tsayar.jpg בתיקיית images
        image: "./images/tsayar.jpg",
        episodes: [
            // אם יש לך תמונה לפרק, שים אותה בתיקייה ותעדכן כאן. אם אין, תשאיר גרשיים ריקים ""
            { number: "1", desc: "פרק ראשון", image: "", driveId: "1-TJDR-bjqha_x-DHndKd-uvGIuQU3Lz0" },
            { number: "2", desc: "פרק שני", image: "", driveId: "10Flj4VBaJ4ANqWfy8Lt0BRTPwsrITPHZ" }
        ]
    },

    // --- סדרה 2 ---
    {
        id: "al-atzmi",
        type: "series", 
        category: "ילדים", 
        genre: "הפקות המקור של HOT",
        title: "אל עצמי",
        description: "סיפורו המרגש של ציון.",
        // 👇 וודא שיש קובץ בשם elatzmi.jpg
        image: "./images/el-atsmi.jpg",
        episodes: [
            { number: "1", desc: "פרק ראשון", image: "", driveId: "1-TJDR-bjqha_x-DHndKd-uvGIuQU3Lz0" },
            { number: "2", desc: "פרק שני", image: "", driveId: "10Flj4VBaJ4ANqWfy8Lt0BRTPwsrITPHZ" }
        ]
    },

    {
        id: "sonic-prime",
        type: "series", 
        category: "ילדים", 
        genre: "אקשן והרפתקאות", 
        title: "סוניק פריים",
        description: "קרב הרסני נגד דוקטור אגמן מנפץ את היקום...",
        // 👇 וודא שיש קובץ בשם sonic.jpg
        image: "./images/sonic.jpg",
        episodes: [
            { number: "1", desc: "פרק ראשון", image: "", driveId: "1UyL5Tv98kAPGSkJ-r4R6AWs6DxvTMrSC" },
            { number: "2", desc: "פרק שני", image: "", driveId: "1AIg7ZS1gs8jWSBrYtsSnP3uVcKxfg_1J" },
            { number: "3", desc: "פרק שלישי", image: "", driveId: "11PNcE6mbEj8fHVd8s3JQYy2KVN34pVj0" }
        ]
    },

    // --- סרט לילדים ---
    {
        id: "zootopia2",
        type: "movie",
        category: "ילדים",
        genre: "סרטים מצוירים",
        title: "זוטרופוליס 2",
        description: "כאן יופיע תקציר הסרט.",
        // 👇 וודא שיש קובץ בשם zootopia.jpg
        image: "./images/zootopia.jpg",
        driveId: "1Dp6najRAF8hvYKYEKLNMXyO7bZjQhDnU"
    },

    {
        id: "liloandstich",
        type: "movie", 
        category: "ילדים",
        genre: "סרטים חינם",
        title: "לילו וסטיץ׳ 2025",
        description: "עיבוד הלייב-אקשן לקלאסיקה המצוירת...",
        // 👇 וודא שיש קובץ בשם lilo.jpg
        image: "./images/lilo.jpg",
        driveId: "1pjeT1gMWtgLEqfolWobhj0cm2_oYBDzo"
    },

    {
        id: "elio",
        type: "movie", 
        category: "ילדים",
        genre: "סרטים חינם",
        title: "אליאו",
        description: "קומדיית הרפתקאות חללית מבית דיסני...",
        // 👇 וודא שיש קובץ בשם elio.jpg
        image: "./images/elio.jpg",
        driveId: "ID"
    },

    {
        id: "The Secret Life of Pets",
        type: "movie", 
        category: "ילדים",
        genre: "סרטים חינם",
        title: "החיים הסודיים של חיות המחמד",
        description: "מה עושות חיות המחמד כשהן לבד בבית?...",
        // 👇 וודא שיש קובץ בשם pets.jpg
        image: "./images/pets.jpg",
        driveId: "UyV7ntR9XyV1nNNvSmK1XE4jzdENvIC4"
    }
];
