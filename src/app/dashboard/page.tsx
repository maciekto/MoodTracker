import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

import MoodDialog from '@/components/mood/MoodDialog';
import { getServerAuthSession } from '@/server/auth';

async function page() {
  const session = await getServerAuthSession();

  if(session === null) { redirect('/') }

  return (
    <div>
      <MoodDialog />
      <Link
        href={session ? '/api/auth/signout' : '/api/auth/signin'}
        className='text-white absolute top-3/4 rounded-full bg-neutral-800 px-10 py-3 font-semibold no-underline hover:scale-105 duration-300 transition-transform ease-in-out z-30'
      >
        {session ? 'Sign out' : 'Sign in'}
      </Link>
    </div>
  )
}

export default page