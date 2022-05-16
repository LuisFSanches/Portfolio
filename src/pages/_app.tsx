import {AppProps} from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
      
    </>
  )
    
}

export default MyApp
