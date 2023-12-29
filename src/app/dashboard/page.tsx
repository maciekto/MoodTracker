
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

import DashboardBlock from '@/components/layouts/DashboardBlock';
import Homeoverlay from '@/components/layouts/Homeoverlay';
import MoodDialog from '@/components/mood/MoodDialog';
import { getServerAuthSession } from '@/server/auth';
import randomNotification from '@/lib/notifications';
import NotificationButton from '@/components/dashboard/NotificationButton';
import { api } from '@/trpc/react';

async function page() {
  const session = await getServerAuthSession();

  if(session === null) { redirect('/') }




  

  return (
    <div className='min-h-screen h-screen w-screen p-6 gap-6 grid grid-cols-1 lg:grid-cols-2 grid-rows-4'>
      <div className='opacity-30 fixed left-0 top-0 w-full -z-10'>
        <Homeoverlay />
      </div>
      <DashboardBlock className='row-start-1 row-end-4 lg:row-start-1 lg:row-end-5 lg:col-start-1 lg:col-end-2'>
        <div>
          Graphs
        </div>
      </DashboardBlock>
      <DashboardBlock className='lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3'>
        <MoodDialog />
        <Link
          href={session ? '/api/auth/signout' : '/api/auth/signin'}
          className='text-white top-3/4 rounded-full bg-neutral-800 px-10 py-3 font-semibold no-underline hover:scale-105 duration-300 transition-transform ease-in-out z-30'
        >
          {session ? 'Sign out' : 'Sign in'}
        </Link>
        <NotificationButton />
      </DashboardBlock>
    </div>
    

    
      

  )
}

export default page