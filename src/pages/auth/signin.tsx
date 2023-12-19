import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { getServerSession } from 'next-auth/next'
import { getProviders, signIn } from 'next-auth/react'
import { getCsrfToken } from 'next-auth/react'
import { ChangeEvent, useState } from 'react'

import girl_with_cloud from '@/assets/signin/girl_with_cloud.svg'
import { authOptions } from '@/server/auth'

export default function SignIn({
  providers, csrfToken
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [emailField, setEmailField] = useState('');

  const handleEmailField = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailField(e.target.value);
  }

  return (
    <>
      {Object.values(providers).map((provider) => (
        provider.name === 'Google' ? <button key={provider.name} onClick={() => signIn(provider.id)} className='text-white absolute top-1/2 -translate-y-20 rounded-full bg-neutral-800 px-10 py-3 font-semibold no-underline hover:scale-105 duration-300 transition-transform ease-in-out z-30'>
            Sign in with {provider.name}

          <img src={girl_with_cloud.src} alt='' className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[122px] z-40'/>
        </button> :

          provider.name === 'Email' ? <div key={provider.name} className='text-white absolute top-1/2 -translate z-30 bg-transparent flex flex-col gap-3 '>
            <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
            <input type='email' id='email' name='email' className='rounded-full bg-neutral-800 text-white px-6 py-3 text-center  focus:scale-105 duration-300 transition-transform ease-in-out' placeholder='Login in with email' onChange={(e) => handleEmailField(e)}/>

            <button className='bg-neutral-800 text-white px-6 py-3 text-center rounded-full font-bold hover:scale-105 duration-300 transition-transform ease-in-out' type='button' onClick={() => signIn('email', { email: emailField })}>Sign in with Email</button>
          </div> : null
      ))}

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