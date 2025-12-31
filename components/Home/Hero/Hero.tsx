'use client';

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Hero = () => {

    const [prompt, setPrompt] = useState('')
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState('')

    const handleImageGeneration = async () => {



    }

    return (
        <div className='w-[95%] min-h-screen max-auto mt-[20vh] relative'>
            <div className='relative z-10 text-white flex flex-col items-center justify-center'>
                {/* text content */}
                <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-pink-600 to-blue-500 bg-clip-text text-transparent'>Create Beautiful Image with <br /> Artificial Intelligence</h1>
                <p className='mt-3 text-sm md:text-base font-semibold text-center text-gray-300'>Get Started with our AI-Powered Image Generator tool</p>

                {/* input field & button */}
                <div className='h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-center'>
                    <input
                        type="text"
                        placeholder='Generate your dream Image...'
                        className='w-full h-full rounded-lg outline-none text-black block flex-1 placeholder:text-sm md:placeholder:text-base'
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                    />
                    <Button variant={'default'} size={'lg'}>Generate</Button>
                </div>

                {/* tags */}
                <div className='flex items-center mt-6 space-x-4 flex-wrap space-y-3'>
                    <p className='self-center'>Popular Tags: </p>
                    <Button variant={'secondary'}>Creative</Button>
                    <Button variant={'secondary'}>Hyper reality</Button>
                    <Button variant={'secondary'}>Steampunk</Button>
                    <Button variant={'secondary'}>Animation</Button>
                    <Button variant={'secondary'}>Digital Art</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero