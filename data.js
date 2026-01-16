const seriesData = [
    // --- סדרות ---
    {
        id: "al-atzmi",
        type: "series", 
        category: "סדרות", 
        title: "אל עצמי",
        description: "סיפורו המרגש של ציון המנסה למצוא את מקומו בעולם.",
        image: "קישור_לתמונת_פוסטר",
        episodes: [
            { number: "1", desc: "תקציר פרק 1...", image: "תמונת_פרק", driveId: "ID_מדרייב" },
            { number: "2", desc: "תקציר פרק 2...", image: "תמונת_פרק", driveId: "ID_מדרייב" }
        ]
    },

    // --- סרטים (הדף עם הרקע המלא) ---
    {
        id: "sonic-1",
        type: "movie", // חשוב: הגדרה כ-movie מפעילה את דף הרקע המלא
        category: "סרטים",
        title: "סוניק - הסרט",
        description: "הקיפוד הכחול והמהיר בעולם מגיע לכדור הארץ ומוצא חברים חדשים.",
        image: "קישור_לתמונה_באיכות_גבוהה_שתהיה_גם_הרקע",
        driveId: "ID_של_הסרט_מהדרייב"
    },

    // --- תוכן לילדים ---
    {
        id: "dora-1",
        type: "series",
        category: "ילדים",
        title: "דורה החוקרת",
        description: "דורה ובוטס יוצאים להרפתקאות חדשות.",
        image: "קישור_לתמונה",
        episodes: [
            { number: "1", desc: "הולכים ליער", image: "תמונת_פרק", driveId: "ID_מדרייב" }
        ]
    }
];
