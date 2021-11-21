import axios from 'axios';

export async function fetchBio() {
  const response = await axios.get('/api/bio');

  console.log('data fetched', response);

  return response;
}
