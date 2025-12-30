import React from 'react'

const Hero = () => {
    return (
        <div className='w-[95%] min-h-screen max-auto mt-[20vh] relative'>
            <div className='relative z-10 text-white flex flex-col items-center justify-center'>
                <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-pink-600 to-blue-500 bg-clip-text text-transparent'>Create Beautiful Image with <br /> Artificial Intelligence</h1>
                <p className='mt-3 text-sm md:text-base font-semibold text-center text-gray-300'>Get Started with our AI-Powered Image Generator tool</p>
            </div>
        </div>
    )
}

export default Hero