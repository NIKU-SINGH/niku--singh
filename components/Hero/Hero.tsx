import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <div className='flex bg-blue-400 w-full  h-[85vh] m-10 rounded-xl justify-center items-center overflow-hidden'>
      <div className='h-2/3 w-2/3 bg-green-400 rounded-xl flex items-center'>
        <h1 className='text-5xl text-blue-900 m-2'>
          I am a
        </h1>
        <h1 className='text-6xl text-blue-900 rounded-xl' >
          <Typewriter
            options={{
              strings: ['Frontend Developer', 'Technical Writer', 'OSS Contributor', 'Blockchain Entrhusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      <div className='bg-red-500 h-1/3 w-1/3 rounded-xl'>
          
      </div>

    </div>
  )
}

export default Hero