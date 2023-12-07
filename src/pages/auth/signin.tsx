import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { getServerSession } from 'next-auth/next'
import { getProviders, signIn } from 'next-auth/react'
import { getCsrfToken } from 'next-auth/react'

import girl_with_cloud from '@/assets/signin/girl_with_cloud.svg'
import { authOptions } from '@/server/auth'

export default function SignIn({
  providers, csrfToken
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
     
      <img src={girl_with_cloud.src} alt='' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[122px] z-40'/>


      {Object.values(providers).map((provider) => (
        <button key={provider.name} onClick={() => signIn(provider.id)} className='text-white absolute top-1/2 rounded-full bg-neutral-800 px-10 py-3 font-semibold no-underline hover:scale-105 duration-300 transition-transform ease-in-out z-30'>
            Sign in with {provider.name}
        </button>

        
      ))}
      {/* <form method='post' action='/api/auth/signin/email'>
        <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
        <label>
        Email address
          <input type='email' id='email' name='email' />
        </label>
        <button type='submit'>Sign in with Email</button>
      </form> */}
      
    </>

  )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)
  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/dashboard' } }
  }

  const csrfToken = await getCsrfToken(context)

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [], csrfToken},
  }
}