import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, counselContent, telephone } = req.body;

  if (!name || !telephone) {
    return res.status(400).json({ error: '이름과 핸드폰번호는 필수입니다.' });
  }

  try {
    const result = await prisma.$queryRaw<{ nextseq: bigint }[]>`
  SELECT COALESCE(MAX("seq"), 0) + 1 as nextseq
  FROM "merp_test"
  WHERE "name" = ${name} AND "telephone" = ${telephone}
`;

    const nextSeq = Number(result[0].nextseq);

    const user = await prisma.merp_test.create({
      data: { name, counselContent, telephone, seq: nextSeq, regDate: new Date() },
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: '등록 실패', detail: error });
  }
}
