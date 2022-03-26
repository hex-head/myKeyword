import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        안녕! {session.user?.name} <br />
        <button onClick={() => signOut()}>로그아웃</button>
      </>
    )
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline"> 포동 포동</h1>
      Not signed in <br />
      <button onClick={() => signIn('kakao')}>카카오 로그인</button>
      <button onClick={() => signIn('google')}>구글 로그인</button>
      <button onClick={() => signIn('twitter')}>트위터 로그인</button>
    </>
  )
}

export default Home
