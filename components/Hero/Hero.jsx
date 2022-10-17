import React from 'react'

function Hero() {
    return (
        <>
            <div className='mt-28 bg-red-500 flex items-center justify-center flex-col text-center'>
                <p className='text-xl font-normal'>
                    Hi! I am
                </p>
                <h1 className='text-2xl md:text-4xl font-medium'>Niku Singh.</h1>
                <h1 className='text-3xl md:text-6xl font-medium text-gray-600'>I Build Things for the Web.</h1>
                <div className='flex items-center md:flex-4 flex-3 w-64 text-center bg-green-400 '>
                    <p className='text-sm md:text-lg'>
                        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                    </p>

                </div>

            </div>
        </>
    )
}

export default Hero