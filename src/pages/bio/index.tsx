import type {NextPage} from 'next';

interface Props {}

const Bio: NextPage<Props> = () => {
  return <h1>Bio Page</h1>;
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Bio;
