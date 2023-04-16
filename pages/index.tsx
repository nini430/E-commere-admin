import type { NextPage } from 'next'
import {signIn, useSession} from 'next-auth/react'


const Home: NextPage = () => {
  const {data:session}=useSession();

  if(!session) {
    return (
      <div className='h-screen w-screen bg-blue-900 flex items-center'>
          <div className='text-center w-full'>
          <button onClick={()=>signIn('google')} className='p-2 px-4 bg-white rounded-md '>Sign In With Google</button>
          </div>
      </div>
    )

  }

  
  return (
    <div>
      Logged in as {session.user?.email} {session.user?.name}
    </div>
  )
  
}

export default Home;
