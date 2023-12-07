import type { AppProps } from 'next/app'
import React from 'react'

import Homeoverlay from '@/components/layouts/Homeoverlay';
import '@/styles/globals.css';




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Homeoverlay>
      <Component {...pageProps} />
    </Homeoverlay>)

}

export default MyApp