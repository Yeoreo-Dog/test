import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end();

  try {
    const users = await prisma.merp_test.findMany({
      orderBy: {
        seq: 'asc', // 또는 'desc' 원할 경우
      },
    });

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: '조회 실패', detail: error });
  }
}
