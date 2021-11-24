import type {NextApiRequest, NextApiResponse} from 'next';

import {getOrCreateConnection} from 'utils/database';
import {EmployerEntity} from 'entities';

async function getEmployer(employerId: string) {
  const conn = await getOrCreateConnection();
  const repo = conn.getRepository(EmployerEntity);
  const employer = repo.findOne({id: employerId});

  return employer;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {method, body, query: {employerId}} = req;

    if (method === 'GET') {
      const employer = await getEmployer(employerId as string);

      return res.status(200).json({employerId, employer});
    } else if (method === 'PATCH') {
      return res.status(200).json({foo: employerId, method, body});
    } else {
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (e) {
    return res.status(500).json({error: e});
  }
}

export default handler;
