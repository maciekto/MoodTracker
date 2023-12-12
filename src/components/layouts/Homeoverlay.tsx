import React from 'react'

import block1 from '@/assets/homepage/block1.svg';
import block2 from '@/assets/homepage/block2.svg';
import block3 from '@/assets/homepage/block3.svg';

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function Homeoverlay({ children }: Props) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-white text-white relative'>
      {/* Mobile images */}
      <img className='absolute top-0 right-0 z-20 animate-levitate-slow' src={block1.src} alt='' />
      <img className='absolute top-2/4 right-0 z-20 animate-levitate-slow delay-150' src={block2.src} alt='' />
      <img className='absolute bottom-0 left-0 z-20 animate-levitate-slow delay-100' src={block3.src} alt='' />
      {children}
    </main>
  )
}
