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
      <button onClick={handleSubmit}>送信</button>
      {message && <p>{message}</p>}
    </div>
  );
}