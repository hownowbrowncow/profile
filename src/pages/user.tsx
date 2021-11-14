import type {NextPage} from 'next'
import {useSession} from "next-auth/react"
import {signOut} from "next-auth/react"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const Home: NextPage = () => {
  const session = useSession();

  console.log('user session', session)
  return (
    <>
      <CssBaseline />
      <Container>
        <h1>User Page</h1>
        <button onClick={() => signOut()}>Sign Out</button>
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
