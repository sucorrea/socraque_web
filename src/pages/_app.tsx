import { Routes } from 'react-router-dom'
import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import SoCraqueProvider from '../../Context/SoCraque'

import 'swiper/css/bundle'
import '../../styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SoCraqueProvider>
        <Component {...pageProps} />
      </SoCraqueProvider>
    </QueryClientProvider>
  )
}
