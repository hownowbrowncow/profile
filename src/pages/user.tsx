import type {NextPage} from 'next'
import {useSession} from "next-auth/react"

const User: NextPage = () => {
  const session = useSession();

  console.log('user session', session)

  return <h1>User Page</h1>
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default User
