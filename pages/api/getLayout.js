import { getDatabase } from "../../lib/notion";

// pages/api/posts.js
export default async function handler(req, res) {
    try {
      // 外部 API からデータを取得
      const response = await getLayout();
    //   const posts = await response.json();      
      // 取得したデータをクライアントに返す
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getLayout = async () => {
    
    const database = await getDatabase("5bf76e8fcd304274b21ad0f5f8d42e8a")
    return database
}
  



