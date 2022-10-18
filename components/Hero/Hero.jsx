import Image from 'next/image'
import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin, BsStackOverflow } from 'react-icons/Bs'
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/Ai'

function Hero() {
    return (
        <>
            <div className='mt-28  flex items-center justify-center flex-col text-center font-Poppins'>
                <p className='text-xl font-normal'>
                    Hi! I am
                </p>
                <h1 className='text-2xl md:text-4xl font-medium mb-8'>Niku Singh.</h1>
                <h1 className='text-3xl md:text-6xl font-bold  text-gray-600 mb-4 '>I Build Things for the Web.</h1>
                <div className='flex items-center text-center w-[40%] mb-4'>
                    <p className='text-sm md:text-lg'>
                        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                    </p>
                </div>
                <button class="bg-black hover:bg-gray-800 text-white font-normal py-2 px-6 rounded-full h-12 w-40 mb-4">
                    Resume
                </button>
                <div className='flex justify-evenly mb-2 w-48'>
                    <AiFillGithub className='h-8 w-8' />
                    <AiFillTwitterCircle className='h-8 w-8' />
                    <AiFillTwitterCircle className='h-8 w-8' />
                    <AiFillTwitterCircle className='h-8 w-8' />
                </div>
                <div>
                    <Image src="/hero.svg" height="400px" width="900px" />
                    <div>
                    <Image src="/images/rocket.png" height="380px" width="300px" />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero