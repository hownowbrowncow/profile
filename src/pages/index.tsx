import type {NextPage} from 'next';
import {useQuery} from 'react-query';
import Box from '@mui/material/Box';

import {fetchBio} from 'api/bio';
import {fetchEmployers} from 'api/employer';
import Bio from 'components/Bio';

interface Props {}

const Home: NextPage<Props> = () => {
  const bio = useQuery('bio', fetchBio);
  const employers = useQuery('employers', fetchEmployers);

  console.log(bio, employers);

  return (
    <Box>
      {!bio.isLoading && (<Bio bio={bio.data} />)}
    </Box>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
