import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_LOGIN_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ message: errorData.message });
    }

    const data = await response.json();

    res.setHeader('Set-Cookie', `token=${data.token}; Path=/; HttpOnly; Secure; SameSite=Strict`);

    return res.status(200).json({ message: 'Login successful', data });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
