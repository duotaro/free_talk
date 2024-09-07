export const formatDate = (dateString, locale) => {
    // ISO 8601形式の文字列をDateオブジェクトに変換
    const date = new Date(dateString);

    const formats = {
        'ja': { year: 'numeric', month: 'numeric', day: 'numeric', era: 'long' },
        'en': { year: 'numeric', month: 'long', day: 'numeric' }
    };

    // 日を取得
    const day = date.getDate();
    var month = date.getMonth() + 1;
    const year = date.getFullYear();


    if(locale == "ja"){

        return `${year}年${month}月${day}日`;
    }


    // 月の略称を取得するためのオプション
    const monthFormatter = new Intl.DateTimeFormat(locale, formats[locale]);
    month = monthFormatter.format(date);
        
    // 日に序数接尾辞を追加
    const suffix = day => {
        if (day > 3 && day < 21) return 'th'; // 11-13は例外
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };
    
    return `${month}`;
}

export const formatDateForCalander = (dateString, isJpn) => {
    // ISO 8601形式の文字列をDateオブジェクトに変換
    const date = new Date(dateString);

    // 日を取得
    const day = date.getDate();
    var month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dayNumber = date.getDay(); // 0 (日曜日) から 6 (土曜日) までの整数
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    var dayName = daysOfWeek[dayNumber];

    if(isJpn){

        return {
            "year" : year,
            "month" : month,
            "day" : day,
            "dayName" : dayName
        }
    }


    // 月の略称を取得するためのオプション
    const monthFormatter = new Intl.DateTimeFormat("en", { month: 'short' });
    month = monthFormatter.format(date);

    const formatterWeekday = new Intl.DateTimeFormat("en", { weekday: 'short' });
    dayName = formatterWeekday.format(date);
        
    return {
        "year" : year,
        "month" : month,
        "day" : day,
        "dayName" : dayName
    }
}

export const formatDateForHHmm = (dateString, isJpn) => {
    const date = new Date(dateString);
    const hour = date.getHours()
    const minutes = formatMinutes(date)

    var period = hour >= 12 ? 'PM' : 'AM';
    if(isJpn){
        period = hour >= 12 ? '午後' : '午前';
        return `${period}${hour}時${minutes}分`
    }

    return `${hour}:${minutes} ${period}`
}

function formatMinutes(date) {
    // 分を取得
    const minutes = date.getMinutes();
    // 分を2桁の文字列にフォーマット
    return minutes.toString().padStart(2, '0');
}
