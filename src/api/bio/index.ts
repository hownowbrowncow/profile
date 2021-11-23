import axios from 'axios';

export async function fetchBio() {
  const {data} = await axios.get('/api/bio');

  return data;
}
