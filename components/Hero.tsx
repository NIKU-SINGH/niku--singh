import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='flex items-center justify-center flex-col'>
        <h1 className='text-5xl text-gray-500 '>This is Niku Singh</h1>
        <button className='bg-blue-500 p-5 rounded-full'>
            <Link href='/reveal'>Click to Enter</Link>
        </button>
    </div>
  )
}

export default Hero