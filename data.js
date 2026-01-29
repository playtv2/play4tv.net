const seriesData = [
    // --- סדרות חדשות ומומלצות ---
    {
        id: "zaguri-new-season",
        type: "series", 
        category: "סדרות", 
        genre: "חדש ב-VOD",
        title: "זגורי אימפריה - עונה חדשה",
        description: "העונה החדשה! פרק חדש בכל יום ה' ב- 16:30 ב- VOD. משפחת זגורי חוזרת.",
        image: "./images/zaguri.jpg",
        episodes: [
            { number: "1", desc: "פרק 1: חזרתו של אביאל - אביאל חוזר הביתה ומגלה שהכל השתנה.", image: "", driveId: "" },
            { number: "2", desc: "פרק 2: הפיצוצייה - וימבה פותח עסק חדש ומסתבך.", image: "", driveId: "" },
            { number: "3", desc: "פרק 3: המלחמה על הבית - סבתא אלגריה מתערבת.", image: "", driveId: "" },
            { number: "4", desc: "פרק 4: סולחה - האם המשפחה תצליח להתאחד?", image: "", driveId: "" }
        ]
    },
    {
        id: "tolsaking-new-season",
        type: "series", 
        category: "סדרות", 
        genre: "חדש ב-VOD",
        title: "טולסה קינג - עונה חדשה",
        description: "דוויט מנפרדי משתחרר מהכלא ונשלח לנהל את עסקי המאפיה בטולסה.",
        image: "./images/tolsaking.jpg",
        episodes: [
            { number: "1", desc: "פרק 1: מערבה מכאן - דוויט מגיע לטולסה.", image: "", driveId: "" },
            { number: "2", desc: "פרק 2: מרכז היקום - דוויט מתחיל לבסס את מעמדו.", image: "", driveId: "" },
            { number: "3", desc: "פרק 3: גחמה - עסקים חדשים נפתחים.", image: "", driveId: "" },
            { number: "4", desc: "פרק 4: מקום ביקור - האיומים מתחילים להגיע.", image: "", driveId: "" }
        ]
    },
    {
        id: "YeledHara",
        type: "series", 
        category: "סדרות", 
        genre: "סדרות קומדיה",
        title: "ילד חרא",
        description: "קומדיה שחורה. שי בן ה-12 מחליט לסחוט את אביו.",
        image: "./images/yeledhara.jpeg",
        episodes: [
            { number: "1", desc: "פרק 1: התגלית - שי מגלה את הסוד של אבא.", image: "", driveId: "" },
            { number: "2", desc: "פרק 2: הסחיטה - שי דורש דמי שתיקה.", image: "", driveId: "1IrT1jJfFjEkJY-DpoGLUEhUy3go0uvlR" },
            { number: "3", desc: "פרק 3: ההסתבכות - העניינים יוצאים משליטה.", image: "", driveId: "1OmEgPT8Q6w9PO0PdvPf2SiHbhpPBnBl0" },
            { number: "4", desc: "פרק 4: הסוף - הכל מתפוצץ.", image: "", driveId: "1WfweUSnkT52Wuxneet1ZRATaYn8DSOV7" }
        ]
    },
    {
        id: "friends",
        type: "series", 
        category: "סדרות", 
        genre: "סדרות קומדיה",
        title: "חברים",
        description: "סיטקום מצליח על שישה חברים במנהטן.",
        image: "./images/friends.jpg",
        episodes: [
            { number: "1", desc: "פרק 1: זה שבו הכל מתחיל.", image: "", driveId: "" },
            { number: "2", desc: "פרק 2: זה עם הסוניגרמה.", image: "", driveId: "" },
            { number: "3", desc: "פרק 3: זה עם האגודל.", image: "", driveId: "" },
            { number: "4", desc: "פרק 4: זה עם ג'ורג' סטפנופולוס.", image: "", driveId: "" }
        ]
    },
    {
        id: "quest",
        type: "series", 
        category: "ילדים", 
        genre: "הפקות המקור של HOT",
        title: "קווסט",
        description: "אבשה מסתנן לתחרות גיימינג על אי בודד.",
        image: "./images/quest.jpg",
        episodes: [
            { number: "1", desc: "פרק 1: הנחיתה - המתמודדים מגיעים לאי.", image: "", driveId: "" },
            { number: "2", desc: "פרק 2: המשימה הראשונה.", image: "", driveId: "" }
        ]
    },
    {
        id: "tsaiamearot",
        type: "series", 
        category: "ילדים", 
        genre: "חדשים ומומלצים ב-YOUNG",
        title: "צייר המערות",
        description: "אובו הוא נער קדמון עם כישרון סודי: הוא הצייר הראשון בהיסטוריה!",
        image: "./images/tsairmearot.jpg",
        episodes: [
            { number: "1", desc: "פרק 1: הציור הראשון - אובו מגלה את הצבעים.", image: "", driveId: "1-TJDR-bjqha_x-DHndKd-uvGIuQU3Lz0" },
            { number: "2", desc: "פרק 2: הממותה - מסע ציד שהשתבש.", image: "", driveId: "10Flj4VBaJ4ANqWfy8Lt0BRTPwsrITPHZ" }
        ]
    },
    {
        id: "al-atzmi",
        type: "series", 
        category: "ילדים", 
        genre: "הפקות המקור של HOT",
        title: "אל עצמי",
        description: "סיפורו המרגש של ציון.",
        image: "./images/el-atsmi.jpg",
        episodes: [
            { number: "1", desc: "פרק 1: המעבר - ציון מגיע למשפחה האומנת.", image: "", driveId: "1-TJDR-bjqha_x-DHndKd-uvGIuQU3Lz0" },
            { number: "2", desc: "פרק 2: בית הספר - היום הראשון ללימודים.", image: "", driveId: "10Flj4VBaJ4ANqWfy8Lt0BRTPwsrITPHZ" }
        ]
    },
    {
        id: "sonic-prime",
        type: "series", 
        category: "ילדים", 
        genre: "אקשן והרפתקאות", 
        title: "סוניק פריים",
        description: "קרב הרסני נגד דוקטור אגמן מנפץ את היקום.",
        image: "./images/sonicprime.jpg",
        episodes: [
            { number: "1", desc: "פרק 1: יקום מרוסק.", image: "", driveId: "1UyL5Tv98kAPGSkJ-r4R6AWs6DxvTMrSC" },
            { number: "2", desc: "פרק 2: העיר החדשה.", image: "", driveId: "1AIg7ZS1gs8jWSBrYtsSnP3uVcKxfg_1J" },
            { number: "3", desc: "פרק 3: הבריחה.", image: "", driveId: "11PNcE6mbEj8fHVd8s3JQYy2KVN34pVj0" }
        ]
    },
    {
        id: "dragon-bullz",
        type: "series", 
        category: "ילדים", 
        genre: "אקשן והרפתקאות", 
        title: "דרגון בול Z",
        description: "חבורת לוחמים בהנהגת גוקו מגנה על כדור הארץ.",
        image: "./images/dragonbullz.jpg",
        episodes: [
            { number: "1", desc: "פרק 1: הסאיינים מגיעים.", image: "", driveId: "" },
            { number: "2", desc: "פרק 2: האימונים מתחילים.", image: "", driveId: "" },
            { number: "3", desc: "פרק 3: הקרב הגדול.", image: "", driveId: "" }
        ]
    },

    // --- סרטים ---
    {
        id: "zootopia2",
        type: "movie",
        category: "ילדים",
        genre: "חדשים ומומלצים ב-YOUNG",
        title: "זוטרופוליס 2",
        description: "ג'ודי וניק חוזרים לתעלומה חדשה בזוטרופוליס.",
        image: "./images/zoo2.jpg",
        driveId: "1Dp6najRAF8hvYKYEKLNMXyO7bZjQhDnU"
    },
    {
        id: "liloandstich",
        type: "movie", 
        category: "ילדים",
        genre: "סרטים חינם",
        title: "לילו וסטיץ׳ 2025",
        description: "עיבוד הלייב-אקשן לקלאסיקה המצוירת.",
        image: "./images/lilo.jpg",
        driveId: "1pjeT1gMWtgLEqfolWobhj0cm2_oYBDzo"
    },
    {
        id: "elio",
        type: "movie", 
        category: "ילדים",
        genre: "סרטים חינם",
        title: "אליאו",
        description: "קומדיית הרפתקאות חללית מבית דיסני.",
        image: "./images/elio.jpg",
        driveId: "ID"
    },
    {
        id: "thepetsecret",
        type: "movie", 
        category: "ילדים",
        genre: "סרטים חינם",
        title: "החיים הסודיים של חיות המחמד",
        description: "מה עושות חיות המחמד כשהן לבד בבית?",
        image: "./images/Thesecretlifeofpetsposter.jpg",
        driveId: "1UyV7ntR9XyV1nNNvSmK1XE4jzdENvIC4"
    }
];
