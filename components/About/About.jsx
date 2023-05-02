import React from 'react'
import Image from 'next/image'
import Timeline from './Timeline'
import Time from './Time'

function About() {
    return (
        <>
            <div className='flex flex-col font-Poppins items-center justify-center mt-48 mx-32'>
                <h1 className='text-5xl font-ProductSans text-center font-bold w-[90vw]'>About Me</h1>
                <div className='flex flex-col-reverse justify-center items-center lg:flex-row m-4'>
                    <div className='p-4 w-[100vw]] lg:w-[85%] font-Poppinsh-[50vh]'>
                        <div className='flex mb-4'>
                            <p className='text-sm md:text-base'>
                                Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!X
                            </p>
                        </div>
                        <div className='flex mb-4'>
                            <p className='text-sm md:text-base'>
                                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                            </p>
                        </div>
                        <div className='flex mb-4'>
                            <p className='text-sm md:text-base'>
                                I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                            </p>
                        </div>
                        <div className='flex mb-4'>
                            <p className='text-sm md:text-base'>
                                Here are a few technologies I’ve been working with recently:
                            </p>
                        </div>
                    </div>
                    <div className='h-[40vh] w-[60vw] md:h-[50vh] md:w-[40vw] sm:h-[40vh] sm:w-[50vw] relative'>
                        <Image src="/profile.svg" layout='fill' className='object-contain' />
                    </div>
                </div>
                    <h1 className='text-4xl font-Poppins text-center font-bold mt-20'>Education</h1>
                <div className=' w-[70vw]'>
                    {/* <Time /> */}
                    <Timeline />
                </div>

                <h1 className='text-4xl  font-bold mb-8'>Skills</h1>
                <h1 className='text-4xl  font-bold mb-8'>Interest</h1>

            </div>
        </>


    )
}

export default About