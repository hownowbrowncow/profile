import type {NextApiRequest, NextApiResponse} from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {method, body, query: {employerId}} = req;

    if (method === 'GET') {
      return res.status(200).json({foo: employerId, method});
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
