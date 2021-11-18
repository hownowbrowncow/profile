import type {NextPage} from 'next';

interface Props {}

const Home: NextPage<Props> = () => {
  return <h1>Home Page</h1>;
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
