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
    const {method} = req;

    switch (method) {
      case 'GET':
        const bio = await getBio();
        res.status(200).json(bio);
      default:
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (e) {
    res.status(500).json({error: e});
  }
}

export default handler;
