import type {NextApiRequest, NextApiResponse} from 'next';

import {getOrCreateConnection} from 'utils/database';
import {EmployerEntity} from 'entities';
import {Employer} from 'entities/Employer';

async function getEmployers() {
  const conn = await getOrCreateConnection();
  const repo = conn.getRepository<Employer>(EmployerEntity);
  const employers = await repo.find({ relations: ['positions']});

  return employers;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {method, body} = req;

    if (method === 'GET') {
      const employers = await getEmployers();

      return res.status(200).json({employers});
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
