import type {NextApiRequest, NextApiResponse} from 'next';

import {getOrCreateConnection} from 'utils/database';
import {BioEntity} from 'entities';

async function getBio() {
  const conn = await getOrCreateConnection();
  const bioRepo = conn.getRepository(BioEntity);
  const bio = await bioRepo.findOne();

  return bio;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {method, body} = req;

    if (method === 'GET') {
      const bio = await getBio();

      return res.status(200).json(bio);
    } else if (method === 'PATCH') {
      return res.status(200).json({body});
    } else {
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (e) {
    return res.status(500).json({error: e});
  }
}

export default handler;
