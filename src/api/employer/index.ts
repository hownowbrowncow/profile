import axios from 'axios';

export async function fetchEmployer(employerId: string) {
  const {data: {employer}} = await axios.get(`/api/employer/${employerId}`);

  return employer;
}

export async function fetchEmployers() {
  const {data: {employers}} = await axios.get('/api/employer');

  return employers;
}
