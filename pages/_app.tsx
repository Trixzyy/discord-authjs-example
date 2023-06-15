import {SessionProvider} from 'next-auth/react'
import type {AppProps} from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react';

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
      <Component {...pageProps} />
      <Analytics />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
