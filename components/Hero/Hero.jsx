import Image from 'next/image'
import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin, BsStackOverflow } from 'react-icons/bs'
import { AiFillGithub, AiFillTwitterCircle, AiFillGithubCircle, AiFillLinkedin } from 'react-icons/ai'
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
                <h1 className='text-3xl md:text-6xl font-bold  text-gray-600 mb-4 '>I Build Things for the Web.</h1>
                <div className='flex items-center text-center w-[80%] xs:w-[70%] lg:w-[60%] mb-4'>
                    <p className='text-sm md:text-lg'>
                        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                    </p>
                </div>
                <button class="bg-black hover:bg-gray-800 text-white font-normal py-2 px-6 rounded-full h-12 w-40 mb-4 _blank">
                    <Link href="https://drive.google.com/file/d/1Wy6MWpNepaELxuH8fttCPCYu_D3CrMbW/view?usp=sharing">
                        Resume
                    </Link>
                </button>
                <div className='flex justify-evenly mb-4 w-48'>
                    <Link href="https://github.com/NIKU-SINGH">
                        <FaGithub className='h-10 w-10' />
                    </Link>
                    <div className='h-10 w-10 bg-black rounded-full flex justify-center items-center text-white'>
                        <Link href="https://twitter.com/Niku_Singh_">
                            <FaTwitter className='h-5 w-5' />
                        </Link>
                    </div>
                    <div className='h-10 w-10 bg-black rounded-full flex justify-center items-center text-white'>
                        <Link href="https://www.linkedin.com/in/niku-singh/">
                            <FaLinkedinIn className='h-5 w-5' />
                        </Link>
                    </div>
                    <div className='h-10 w-10 bg-black rounded-full flex justify-center items-center text-white'>
                        <Link href="https://github.com/NIKU-SINGH">
                        <FaStackOverflow className='h-5 w-5' />
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