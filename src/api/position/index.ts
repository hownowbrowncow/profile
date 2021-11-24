import axios from 'axios';

export async function fetchPosition(positionId: string) {
  const {data} = await axios.get(`/api/position/${positionId}`);

  return data;
}

export async function fetchPositions() {
  const {data} = await axios.get('/api/position');

  return data;
}
