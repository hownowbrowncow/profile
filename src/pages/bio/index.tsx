import type {NextPage} from 'next';
import {useQuery} from 'react-query';
import {fetchBio} from 'api/bio';

interface Props {}

const Bio: NextPage<Props> = () => {
  const {data} = useQuery('bio', fetchBio);

  console.log('fetching bio', data);

  return <h1>Bio Page</h1>;
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Bio;
