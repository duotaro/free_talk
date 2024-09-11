'use client'; // クライアントサイドコンポーネントとして設定する場合

import { useState } from 'react';

const DeployButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const triggerDeploy = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/trigger-deploy', {
        method: 'POST',
      });

      console.log(response)

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to trigger deploy');
      }

      console.log('Deploy triggered successfully:', data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button type="button" class="btn btn-danger" onClick={triggerDeploy} disabled={isLoading}>
        {isLoading ? 'Triggering Deploy...' : 'Trigger Deploy'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default DeployButton;
