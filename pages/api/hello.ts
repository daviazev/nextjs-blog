import { NextApiRequest, NextApiResponse } from 'next'

// first time using typescript in next! Uhuuuuuuul!
export default function handler(_req: NextApiRequest, res: NextApiResponse ) {
  res.status(200).json({ text: 'Hello, World! '})
}
