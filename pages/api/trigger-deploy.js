// pages/api/trigger-deploy.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  let key = process.env.NEXT_PUBLIC_CLOUDFLARE_PAGES_DEPLOY_HOOK_KEY
  if(!key){
    return
  }
  try {
    const response = await fetch(`https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ /* 必要なリクエストボディ */ })
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to trigger deploy', details: data }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred', details: error.message }, { status: 500 });
  }
}
