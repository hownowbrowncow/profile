import type {NextPage} from 'next'
import { signIn } from "next-auth/react"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const Home: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <h1>Hello World</h1>
        <button onClick={() => signIn("credentials", {redirect: false, username: "admin@localhost", password: "password"})}>Click</button>
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
