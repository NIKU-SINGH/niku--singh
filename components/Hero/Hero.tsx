import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect';


function Hero() {
  return (
    <div className='flex  w-full  h-[85vh] m-10 rounded-xl justify-center items-center overflow-hidden relative'>
      <div className='h-2/3 w-2/4 rounded-xl flex items-center '>
        <h1 className='text-4xl text-blue-900 m-2'>
          I am a 
        </h1>
        <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 ' >
          <Typewriter
            options={{
              strings: ['Frontend Developer', 'Technical Writer', 'OSS Contributor', 'Blockchain Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      <div className='h-full w-2/4 '>
      {/* <iframe src="https://app.vectary.com/p/5hpbXP9gfcaLdU21HSf5dp" frameBorder="0" width="100%" height="100%"></iframe> */}
      {/* <iframe src="https://app.vectary.com/p/6fPvHemxPaDkXM9e8SoqJf" frameBorder="0" width="100%" height="100%"></iframe> */}
      <iframe src="https://app.vectary.com/p/0I4ZD48fCcjqLXkhYWE788" frameBorder="0" width="100%" height="100%"></iframe>      
      </div>

    </div>
  )
}

export default Hero