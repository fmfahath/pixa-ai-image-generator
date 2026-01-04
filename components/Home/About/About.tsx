import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
                {/* image */}
                <div className='order-2 xl:order-1'>
                    <Image src={'/images/about.jpg'} alt='About' width={800} height={400} className='rounded-lg w-full ' />
                </div>

                {/* content */}
                <div className='order-1 xl:order-2'>
                    <h1 className='text-gray-300 mb-4 font-semibold text-lg capitalize'>What we do</h1>
                    <h1 className='text-gray-300 mb-4 font-bold text-3xl sm:text-4xl md:text-5xl capitalize'>Create your own AI easily</h1>
                    <p className='text-gray-400 mb-8 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    <Button className='bg-rose-500 w-36 h-12 text-base uppercase' size={'lg'}>About Us</Button>
                </div>
            </div>
        </div>
    )
}

export default About