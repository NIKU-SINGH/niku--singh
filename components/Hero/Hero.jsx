import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn, FaTwitter, FaGithub, FaStackOverflow } from 'react-icons/fa';
import Link from 'next/link';

function Hero() {
    return (
        <>
            <div className='mt-28  flex items-center justify-center flex-col text-center font-Poppins'>
                <p className='text-xl font-normal'>
                    Hi! I am
                </p>
                <h1 className='text-2xl md:text-4xl font-medium mb-8'>Niku Singh.</h1>
                <h1 className='text-3xl md:text-6xl font-semibold  text-gray-600 mb-4 '>I Build Things for the Web.</h1>
                <div className='flex items-center text-center w-[80%] xs:w-[70%] lg:w-[60%] mb-4'>
                    <p className='text-sm md:text-lg'>
                        I’m a FullStack developer from India, currently Pursuing my BTech. I am an OSS contributor
                    </p>
                </div>
                <button className="bg-black hover:bg-gray-800 text-white text-xs md:text-sm font-normal py-2 px-6 rounded-full h-10 w-36 md:h-12 md:w-40 mb-4">
                    <Link href="https://docs.google.com/document/d/1lnxx-nLlG9aZvqdkCtpoxdqhELRuTh5FQ_C_aIpS2cE/edit?usp=sharing">
                        Resume
                    </Link>
                </button>
                <div className='flex justify-evenly mb-4 w-32 md:w-60'>
                    <Link href="https://github.com/NIKU-SINGH">
                        <FaGithub className=' h-6 w-6 md:h-10 md:w-10 cursor-pointer hover:text-gray-600' />
                    </Link>
                    <div className='h-6 w-6 md:h-10 md:w-10 bg-black  hover:bg-gray-600 rounded-full flex justify-center items-center text-white cursor-pointer'>
                        <Link href="https://twitter.com/Niku_Singh_">
                            <FaTwitter className='h-4 w-4 md:h-5 md:w-5' />
                        </Link>
                    </div>
                    <div className='h-6 w-6 md:h-10 md:w-10 bg-black hover:bg-gray-600 rounded-full flex justify-center items-center text-white cursor-pointer'>
                        <Link href="https://www.linkedin.com/in/niku-singh/">
                            <FaLinkedinIn className='h-4 w-4 md:h-5 md:w-5' />
                        </Link>
                    </div>
                    <div className='h-6 w-6 md:h-10 md:w-10 bg-black hover:bg-gray-600 rounded-full flex justify-center items-center text-white cursor-pointer'>
                        <Link href="https://stackoverflow.com/users/20343109/niku-singh?tab=profile">
                        <FaStackOverflow className='h-4 w-4 md:h-5 md:w-5' />
                        </Link>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/heroRocket.svg" height="400px" width="900px" className='absolute top-0 left-0 z-0' />
                    {/* <Image src="/rocket.svg" height="380px" width="300px" className='absolute top-0 left-0 z-10' /> */}
                </div>
            </div>

        </>
    )
}

export default Hero