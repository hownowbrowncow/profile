import type {NextPage} from 'next';
import {useQuery} from 'react-query';
import Box from '@mui/material/Box';

import {fetchBio} from 'api/bio';
import {fetchEmployers} from 'api/employer';
import {BioView} from 'components/Bio';
import {EmployerList} from 'components/Employer';

interface Props {}

const Home: NextPage<Props> = () => {
  const bio = useQuery('bio', fetchBio);
  const employers = useQuery('employers', fetchEmployers);

  return (
    <Box>
      <BioView bio={bio.data} isLoading={bio.isLoading} />
      <EmployerList employers={employers.data} isLoading={employers.isLoading} />
    </Box>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
