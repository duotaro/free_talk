export const formatDate = (dateString, locale) => {
    // ISO 8601形式の文字列をDateオブジェクトに変換
    const date = new Date(dateString);

    const formats = {
        'ja': { year: 'numeric', month: 'numeric', day: 'numeric', era: 'long' },
        'en': { year: 'numeric', month: 'long', day: 'numeric' }
    };

    // 日を取得
    const day = date.getDate();
    var month = date.getMonth();
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