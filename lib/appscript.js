
export const fetchGss = async (sheetName) => {
    let deployId = process.env.NEXT_PUBLIC_APP_SCRIPT_KEYL
    if(!deployId){
        // error
        return
    }
    const path = `https://script.google.com/macros/s/${deployId}/exec?sheetName=${sheetName}`;
    const res = await fetch(path);
    return await res.json();
};
