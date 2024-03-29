import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/index'
import About from '../components/About/index'
import Contact from '../components/Contact/Contact'
import Skill from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Niku Singh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='dark dark:bg-slate-'>
        <Navbar />
        <Hero />
        <About />

        {/* <div className='bottom-0'> */}
          <Contact />
        {/* </div> */}
      </main>

    </div>
  )
}

export default Home
