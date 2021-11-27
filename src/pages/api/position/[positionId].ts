import type {NextApiRequest, NextApiResponse} from 'next';

import {getOrCreateConnection} from 'utils/database';
import {PositionEntity} from 'entities';
import {Position} from 'entities/Position';

async function getPosition(positionId: string) {
  const conn = await getOrCreateConnection();
  const repo = conn.getRepository<Position>(PositionEntity);
  const position = await repo.findOne({id: positionId}, {relations: ['employer']});

  return position;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {method, body, query: {positionId}} = req;

    if (method === 'GET') {
      const position = await getPosition(positionId as string);

      return res.status(200).json({positionId, position});
    } else if (method === 'PATCH') {
      return res.status(200).json({positionId, body});
    } else {
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (e) {
    return res.status(500).json({error: e});
  }
}

export default handler;
