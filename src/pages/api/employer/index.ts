import type {NextApiRequest, NextApiResponse} from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {method, body} = req;

    if (method === 'GET') {
      return res.status(200).json({foo: 'bar', method});
    } else if (method === 'POST') {
      return res.status(200).json({foo: 'bar', method, body});
    } else {
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (e) {
    return res.status(500).json({error: e});
  }
}

export default handler;
