import type {NextPage} from 'next'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

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
  return {
    props: {},
  };
}

export default Home
