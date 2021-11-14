import type {NextPage} from 'next'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import {getOrCreateConnection} from 'utils/database';
import {Post} from 'entity/Post';

const Home: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const conn = await getOrCreateConnection();
  const postRepo = conn.getRepository<Post>("Post");
  const posts = await postRepo.find();

  console.log('Posts fetched: ', posts.length);

  return {
    props: {},
  };
}

export default Home
