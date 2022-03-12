import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        안녕! {session.user?.name} <br />
        <button onClick={() => signOut()}>카카오 로그아웃</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('kakao')}>카카오 로그인</button>
    </>
  )
}

export default Home
