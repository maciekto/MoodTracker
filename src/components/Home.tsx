
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import React from 'react'

import letterC from '@/assets/homepage/letterC.svg'
import letterE from '@/assets/homepage/letterE.svg'
import letterL from '@/assets/homepage/letterL.svg'
import letterM from '@/assets/homepage/letterM.svg'
import letterO from '@/assets/homepage/letterO.svg'
import letterW from '@/assets/homepage/letterW.svg'
import mainWoman from '@/assets/homepage/mainWoman.svg'

import Homeoverlay from './layouts/Homeoverlay';


async function Home() {
  const session = await getServerSession()
  return (
    <Homeoverlay>
      <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={mainWoman.src} alt='' />
      <div className='absolute top-1/4 left-1/2 -translate-y-20 -translate-x-1/2 w-20 z-20'>
        <img className='absolute -left-32 top-16 animate-levitate delay-75' src={letterW.src} alt='' />
        <img className='absolute -left-16 top-12 animate-levitate delay-500' src={letterE.src} alt='' />
        <img className='absolute -left-6 top-12 animate-levitate delay-150' src={letterL.src} alt='' />
        <img className='absolute left-4 top-10 animate-levitate delay-200' src={letterC.src} alt='' />
        <img className='absolute left-16 top-12 animate-levitate delay-300' src={letterO.src} alt='' />
        <img className='absolute left-28 top-12 animate-levitate delay-100' src={letterM.src} alt='' />
        <img className='absolute left-44 top-16 animate-levitate' src={letterE.src} alt='' />
      </div>
      <div className={'absolute top-3/4 -translate-y-14 text-neutral-800 font-BubbleBobble text-xl'}>
      Mood Tracker
      </div>

      {/* <button onClick={() => signIn()} className='text-white absolute top-3/4 rounded-full bg-neutral-800 px-10 py-3 font-semibold no-underline hover:scale-105 duration-300 transition-transform ease-in-out z-30'>
        SIGN IN
      </button> */}
      <Link
        href={session ? '/api/auth/signout' : '/api/auth/signin'}
        className='text-white absolute top-3/4 rounded-full bg-neutral-800 px-10 py-3 font-semibold no-underline hover:scale-105 duration-300 transition-transform ease-in-out z-30'
      >
        {session ? 'Sign out' : 'Sign in'}
      </Link>
    </Homeoverlay>

      
       

  )
}

export default Home