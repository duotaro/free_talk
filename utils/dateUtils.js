export const formatDateToEn = (dateString) => {
    // ISO 8601形式の文字列をDateオブジェクトに変換
    const date = new Date(dateString);

    // 月の略称を取得するためのオプション
    const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });
    const month = monthFormatter.format(date);

    // 日を取得
    const day = date.getDate();

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
    
    return `${month} ${day}${suffix(day)}`;
}

export const getLatestUpdate = (dateStrings) => {
    // 日付文字列をDateオブジェクトに変換し、配列に格納
    const dates = dateStrings.map(dateStr => new Date(dateStr));

    // 最新の日付を取得
    const latestDate = new Date(Math.max(...dates));

    // ISO 8601形式の文字列に変換
    const latestDateString = latestDate.toISOString();

    // ISO 8601形式の文字列に変換
    return formatDateToEn(latestDateString)
}