const seriesData = [
    // --- סדרה 1 (דוגמה מוכנה) ---
    {
        id: "tsaiamearot",
        type: "series", 
        category: "סדרות", 
        title: "צייר המערות",
        description: "בדיקה.",
        image: "https://i.ytimg.com/vi/VaFdaHs3isc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBE65d-3PGwO9UtTaTya5fIXmgOlA",
        episodes: [
            { number: "1", desc: "פרק ראשון", image: "https://i.ytimg.com/vi/VaFdaHs3isc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBE65d-3PGwO9UtTaTya5fIXmgOlA", driveId: "1-TJDR-bjqha_x-DHndKd-uvGIuQU3Lz0" },
            { number: "2", desc: "פרק שני", image: "", driveId: "10Flj4VBaJ4ANqWfy8Lt0BRTPwsrITPHZ" }
        ]
    }, // <-- שים לב לפסיק הזה! הוא מפריד בין סדרה לסדרה

        {
        id: "al-atzmi",
        type: "series", 
        category: "ילדים", 
        title: "אל עצמי",
        description: "סיפורו המרגש של ציון.",
        image: "https://www.yes.co.il/media/ux0f43ln/vp004414285.jpg?quality=80",
        episodes: [
            { number: "1", desc: "פרק ראשון", image: "", driveId: "1-TJDR-bjqha_x-DHndKd-uvGIuQU3Lz0" },
            { number: "2", desc: "פרק שני", image: "", driveId: "10Flj4VBaJ4ANqWfy8Lt0BRTPwsrITPHZ" }
        ]
    },
    
    // --- תבנית לסדרה חדשה (תעתיק מכאן) ---
    {
        id: "unique-name", 
        type: "series", 
        category: "סדרות", 
        title: "שם הסדרה",
        description: "תקציר הסדרה",
        image: "קישור_לתמונה_מ_ImgBB",
        episodes: [
            { number: "1", desc: "תקציר פרק 1", image: "תמונת_פרק", driveId: "ID_מדרייב" }
        ]
    }, // <-- תמיד לסיים עם פסיק אם יש עוד סדרה אחרי זה

    {
    id: "zootopia2",  // מזהה ייחודי באנגלית (שלא יחזור על עצמו)
    type: "movie",             // סוג התוכן
    category: "ילדים",
    title: "זוטרופוליס 2",
    description: "כאן יופיע תקציר הסרט.",
    image: "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", // תמונה לאורך (Poster)
    driveId: "1Dp6najRAF8hvYKYEKLNMXyO7bZjQhDnU"   // ה-ID מהקישור של גוגל דרייב
},


    
    // --- תבנית לסרט חדש (תעתיק מכאן) ---
    {
        id: "movie-name",
        type: "movie", 
        category: "סרטים",
        title: "שם הסרט",
        description: "תקציר הסרט שיופיע על הרקע המלא",
        image: "קישור_לתמונה_איכותית_מ_ImgBB",
        driveId: "ID_מדרייב"
    } // בבלוק האחרון ברשימה לא חייבים פסיק, אבל מומלץ לשים כדי לא לשכוח
];
