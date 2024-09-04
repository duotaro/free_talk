import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('/api/deployVercel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    setMessage(result.message || result.error || 'No message returned');
  };

  return (
    <div>
      <h1>Vercel API へ POST リクエスト</h1>
      <input 
        type="text" 
        placeholder="Project ID" 
        value={projectId} 
        onChange={(e) => setProjectId(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Deploy ID" 
        value={deployId} 
        onChange={(e) => setDeployId(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Data" 
        value={data} 
        onChange={(e) => setData(e.target.value)} 
      />
      <button onClick={handleSubmit}>送信</button>
      {message && <p>{message}</p>}
    </div>
  );
}