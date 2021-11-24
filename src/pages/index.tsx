import type {NextPage} from 'next';
import {useQuery} from 'react-query';

import {fetchBio} from 'api/bio';
import {fetchEmployers} from 'api/employer';

interface Props {}

const Home: NextPage<Props> = () => {
  const bio = useQuery('bio', fetchBio);
  const employers = useQuery('employers', fetchEmployers);

  console.log(bio, employers);

  return <h1>Home Page</h1>;
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
