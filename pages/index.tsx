import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Niku Singh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Hero />
      </main>
        
    </div>
  )
}

export default Home
