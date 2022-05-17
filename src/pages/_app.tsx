import {AppProps} from 'next/app'
import Head from 'next/head'
import { LayoutProvider } from '../contexts/LayoutContext'


function MyApp({ Component, pageProps } : AppProps) {
  return (
    <LayoutProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      
    </LayoutProvider>
  )
    
}

export default MyApp
