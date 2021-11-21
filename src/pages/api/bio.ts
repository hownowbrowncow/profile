import type {NextApiRequest, NextApiResponse} from 'next';

import {getOrCreateConnection} from 'utils/database';
import {BioEntity} from 'entities';

async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const conn = await getOrCreateConnection();
    const bioRepo = conn.getRepository(BioEntity);
    const bio = await bioRepo.findOne();

    res.status(200).json(bio);
  } catch (e) {
    res.status(500).json({error: e});
  }
}

export default handler;
