import type {NextPage} from 'next'

import {Post} from 'models/post';
import {getOrCreateConnection} from 'utils/database';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
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
