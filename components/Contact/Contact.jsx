import React from 'react'
import Image from 'next/image'

function Contact() {
    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='h-[50vh] w-full bg-gray-900 flex justify-center relative'>
                <div className='w-[85vw] md:h-[50vh] h-[40vh] rounded-3xl absolute md:-top-64 -top-48 flex items-center justify-center'>
                    <Image src="/images/contact.png" layout='fill' className='object-full rounded-3xl' />
                    <div className='absolute h-[20vh] w-[90%] flex flex-col items-center justify-center'>
                        <h1 className='text-5xl md:text-6xl font-bold text-white font-ProductSans mb-4 md:mb-8'>Get In Touch</h1>
                        <p className='w-full md:w-[80%] text-white font-medium text-base md:text-lg text-center mb-4'>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                        <button className='btn rounded-full bg-white text-purple-700 p-2 md:p-4 pl-6 pr-6 md:pl-10 md:pr-10 font-semibold text-2xl md:text-3xl hover:animate-pulse'>Say Hello</button>
                    </div>
                </div>
            </div>
                <hr />
                <h1 className='bg-gray-900 text-center text-white w-full p-2'>© 2023 Niku Singh</h1>
        </div>
    )
}

export default Contact