const seriesData = [
    // --- סדרה 1 ---
    {
        id: "tsaiamearot",
        type: "series", 
        category: "סדרות", 
        genre: "דרמות ישראליות", // <-- הוספתי את זה! זו תהיה הכותרת של השורה
        title: "צייר המערות",
        description: "תקציר.",
        image: "https://i.ytimg.com/vi/VaFdaHs3isc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBE65d-3PGwO9UtTaTya5fIXmgOlA",
        episodes: [
            { number: "1", desc: "פרק ראשון", image: "https://i.ytimg.com/vi/VaFdaHs3isc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBE65d-3PGwO9UtTaTya5fIXmgOlA", driveId: "1-TJDR-bjqha_x-DHndKd-uvGIuQU3Lz0" },
            { number: "2", desc: "פרק שני", image: "", driveId: "10Flj4VBaJ4ANqWfy8Lt0BRTPwsrITPHZ" }
        ]
    },

    // --- סדרה 2 ---
    {
        id: "al-atzmi",
        type: "series", 
        category: "ילדים", 
        genre: "הפקות המקור של HOT", // <-- כותרת שורה חדשה בפרופיל ילדים
        title: "אל עצמי",
        description: "סיפורו המרגש של ציון.",
        image: "https://www.yes.co.il/media/ux0f43ln/vp004414285.jpg?quality=80",
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
        description: "קרב הרסני נגד דוקטור אגמן מנפץ את היקום, וסוניק מתרוצץ בין ממדים מקבילים כדי לחדש את הקשר עם חבריו ולהציל את העולם.",
        image: "https://m.media-amazon.com/images/S/pv-target-images/f5e30a40e6b2f690d3fd0ab63474c47267e08065d8bdad0f6e6e16eee9208170._SX1080_FMjpg_.jpg",
        episodes: [
            { number: "1", desc: "פרק ראשון", image: "https://occ-0-2621-2774.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSt7pp11XkzMqnShcfPuluIo3tnEbW4VpWzoIDJ9RJ4s04Z64ifeTExm9rcCDzTfTiKHZNCn04RGZWJ556kw3bMDD5JfMS4d3opnhXd5BdgDnTZ6bVm_23Wc.jpg?r=199", driveId: "1UyL5Tv98kAPGSkJ-r4R6AWs6DxvTMrSC" },
            { number: "2", desc: "פרק שני", image: "", driveId: "1AIg7ZS1gs8jWSBrYtsSnP3uVcKxfg_1J" },
            { number: "3", desc: "פרק שלישי", image: "", driveId: "11PNcE6mbEj8fHVd8s3JQYy2KVN34pVj0" }
        ]
    },

    

    // --- סרט לילדים ---
    {
        id: "zootopia2",
        type: "movie",
        category: "ילדים",
        genre: "סרטים מצוירים", // <-- כותרת שורה לסרטים
        title: "זוטרופוליס 2",
        description: "כאן יופיע תקציר הסרט.",
        image: "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        driveId: "1Dp6najRAF8hvYKYEKLNMXyO7bZjQhDnU"
    },

    // -----------------------------------------------------------
    // --- תבניות מוכנות לשכפול (Copy-Paste) להוספת תוכן חדש ---
    // -----------------------------------------------------------

    // תבנית לסדרה חדשה (להעתיק מכאן)
    {
        id: "new-series-id", 
        type: "series", 
        category: "סדרות", 
        genre: "שם הקטגוריה (למשל: מתח ופעולה)", 
        title: "שם הסדרה",
        description: "תקציר",
        image: "קישור_לתמונה_רחבה",
        episodes: [
            { number: "1", desc: "פרק 1", image: "תמונה", driveId: "ID" }
        ]
    },

    // סרטי ילדים - חינם
    {
        id: "new-movie-id",
        type: "movie", 
        category: "סרטים",
        genre: "שם הקטגוריה (למשל: שוברי קופות)",
        title: "שם הסרט",
        description: "תקציר",
        image: "קישור_לתמונה_גבוהה",
        driveId: "ID"
    },


    {
        id: "liloandstich",
        type: "movie", 
        category: "ילדים",
        genre: "סרטים חינם",
        title: "לילו וסטיץ׳ 2025",
        description: "עיבוד הלייב-אקשן לקלאסיקה המצוירת של דיסני משנת 2002, “לילו וסטיץ’”. סיפור הומוריסטי ומרגש על ילדה בודדה מהוואי וחייזר נמלט שעוזר לה לתקן את משפחתה המפורקת. הסרט לילו & סטיץ' מכיל מספר רצפים עם אורות מהבהבים שעשויים להשפיע על בעלי אפילפסיה רגישה לאור או בעלי כל רגישות אחרת לאור.",
        image: "https://upload.wikimedia.org/wikipedia/he/archive/1/18/20250515222801%21Lilo_%26_Stitch_2025_Teaser_Poster.jpeg",
        driveId: "1pjeT1gMWtgLEqfolWobhj0cm2_oYBDzo"
    },



        {
        id: "elio",
        type: "movie", 
        category: "ילדים",
        genre: "סרטים חינם",
        title: "אליאו",
        description: "קומדיית הרפתקאות חללית מבית דיסני Elio - אליאו, ילד עם דמיון פעיל שמתעניין בחלל, מוצא את עצמו בהרפתקה קוסמית שבה הוא חייב ליצור קשר עם חייזרים, לנהל משבר בין-גלקטי ולגלות את ייעודו האמיתי. קולות: לביא מור, ליאנה שחר, אריה צ'רנר. בימוי: אדריאן מולינה, מדלן שרפיאן, דומי שי (ארה''ב, 2025).",
        image: "https://lumiere-a.akamaihd.net/v1/images/image_cf1af1e0.jpeg?region=0,0,540,810",
        driveId: "ID"
    },



        {
        id: "The Secret Life of Pets",
        type: "movie", 
        category: "ילדים",
        genre: "סרטים חינם",
        title: "החיים הסודיים של חיות המחמד",
        description: "מה עושות חיות המחמד כשהן לבד בבית? The Secret Life of Pets - חייו של כלב בשם מקס מתהפכים מקצה לקצה כאשר הבעלים שלו מחליטה לאמץ כלב רחוב שמקס לא מחבב. לאחר שהם הולכים לאיבוד, הם מסתבכים עם ארנב מרושע. בדיבובם של: אלון נוימן, קובי מאור. בימוי: כריס רנו ו-ירואו צ'ייני (ארה''ב, 2016).",
        image: "https://upload.wikimedia.org/wikipedia/he/7/73/Thesecretlifeofpetsposter.jpg",
        driveId: "UyV7ntR9XyV1nNNvSmK1XE4jzdENvIC4"
    }


    


    
];
