import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

import DashboardBlock from '@/components/layouts/DashboardBlock';
import Homeoverlay from '@/components/layouts/Homeoverlay';
import MoodDialog from '@/components/mood/MoodDialog';
import MoodChart from '@/components/MoodChart';
import { getServerAuthSession } from '@/server/auth';
import { Button } from '@/components/ui/button';

async function page() {
  const session = await getServerAuthSession();

  if(session === null) { redirect('/') }

  return (
    <div className='min-h-screen h-screen w-screen p-6 gap-6 grid grid-cols-1 lg:grid-cols-2 grid-rows-4'>
      <div className='opacity-30 fixed left-0 top-0 w-full -z-10'>
        <Homeoverlay />
      </div>
      <DashboardBlock className='row-start-1 row-end-4 lg:row-start-1 lg:row-end-5 lg:col-start-1 lg:col-end-2'>
        <MoodChart />
      </DashboardBlock>
      <DashboardBlock className='lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3'>
        <MoodDialog />
        <Link
          href={session ? '/api/auth/signout' : '/api/auth/signin'}
        >
          <Button size='lg' variant='homePageCTA'>{session ? 'Sign out' : 'Sign in'}</Button>
          
        </Link>
      </DashboardBlock>
    </div>
    

    
      

  )
}

export default page