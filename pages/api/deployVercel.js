// pages/api/deploy.js

export default async function handler(req, res) {
    if (req.method === 'POST') {

      const projectId = process.env.NEXT_PUBLIC_VERCEL_DEPLOY_HOOK_PROJECT_ID
      const deployId = process.env.NEXT_PUBLIC_VERCEL_DEPLOY_HOOK_ID
      if(!projectId || !deployId){
        return
      }
        
  
      try {
        const postUrl = `https://api.vercel.com/v1/integrations/deploy/${projectId}/${deployId}`;
        
        const response = await fetch(postUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const result = await response.json();
  
        if (!response.ok) {
          throw new Error(result.message || 'Request failed');
        }
  
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  