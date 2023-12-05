import Link from 'next/link';

import block1 from '@/assets/homepage/block1.svg';
import block2 from '@/assets/homepage/block2.svg';
import block3 from '@/assets/homepage/block3.svg';
import letterC from '@/assets/homepage/letterC.svg'
import letterE from '@/assets/homepage/letterE.svg'
import letterL from '@/assets/homepage/letterL.svg'
import letterM from '@/assets/homepage/letterM.svg'
import letterO from '@/assets/homepage/letterO.svg'
import letterW from '@/assets/homepage/letterW.svg'
import mainWoman from '@/assets/homepage/mainWoman.svg'
import { getServerAuthSession } from '@/server/auth';
import { api } from '@/trpc/server';


export default async function Home() {
  const hello = await api.post.hello.query({ text: 'from tRPC' });
  const session = await getServerAuthSession();

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-white text-white relative'>
      {/* Mobile images */}
      <img className='absolute top-0 right-0 z-20 animate-levitate-slow' src={block1.src} alt='' />
      <img className='absolute top-2/4 right-0 z-20 animate-levitate-slow delay-150' src={block2.src} alt='' />
      <img className='absolute bottom-0 left-0 z-20 animate-levitate-slow delay-100' src={block3.src} alt='' />
      <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={mainWoman.src} alt='' />
      <div className='absolute top-1/4 left-1/2 -translate-y-20 -translate-x-1/2 w-20 z-20 -translate-y-4'>
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
      <Link
        href={session ? '/api/auth/signout' : '/api/auth/signin'}
        className='absolute top-3/4 rounded-full bg-neutral-800 px-10 py-3 font-semibold no-underline hover:scale-105 duration-300 transition-transform ease-in-out z-10'
      >
        {session ? 'Sign out' : 'Sign in'}
      </Link>
         
    </main>
  );
}
