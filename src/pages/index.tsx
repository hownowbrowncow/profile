import type {NextPage} from 'next'
import { signIn } from "next-auth/react"

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => signIn("credentials", {redirect: false, username: "admin@localhost", password: "password"})}>Click</button>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home
