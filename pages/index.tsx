import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/index'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Niku Singh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='font-OpenSans'>
          <Navbar />
          <Hero />
      </main>
        
    </div>
  )
}

export default Home
