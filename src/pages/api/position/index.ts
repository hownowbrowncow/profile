import type {NextApiRequest, NextApiResponse} from 'next';

import {getOrCreateConnection} from 'utils/database';
import {PositionEntity} from 'entities';

async function getPositions() {
  const conn = await getOrCreateConnection();
  const repo = conn.getRepository(PositionEntity);
  const positions = repo.find();

  return positions;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {method, body} = req;

    if (method === 'GET') {
      const positions = await getPositions();

      return res.status(200).json({positions});
    } else if (method === 'POST') {
      return res.status(200).json({body});
    } else {
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (e) {
    return res.status(500).json({error: e});
  }
}

export default handler;
