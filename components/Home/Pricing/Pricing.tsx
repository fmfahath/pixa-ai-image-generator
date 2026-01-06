import { Check } from 'lucide-react'
import React from 'react'

const Pricing = () => {
    return (
        <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center my-10'>
            {/* content */}
            <div>
                <h1 className='uppercase text-white mb-6 font-bold'>Flexible & Affortable</h1>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-white'>Our Pricing Plans</h1>
                <p className='text-white font-medium text-opacity-70 mt-2 md:mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia unde exercitationem, sapiente rerum eveniet dicta temporibus? Odit, fugit, aspernatur cum esse officia, et ea omnis dolorem possimus necessitatibus nam explicabo.</p>

                <div className='mt-8'>
                    <div className='flex items-center space-x-3 mb-3'>
                        <Check className='w-6 h-6 text-green-500' />
                        <p className='text-lg text-white font-semibold text-opacity-60'>High quality Services</p>
                    </div>
                    <div className='flex items-center space-x-3 mb-3'>
                        <Check className='w-6 h-6 text-green-500' />
                        <p className='text-lg text-white font-semibold text-opacity-60'>27/7 Customer Support</p>
                    </div>
                    <div className='flex items-center space-x-3 mb-3'>
                        <Check className='w-6 h-6 text-green-500' />
                        <p className='text-lg text-white font-semibold text-opacity-60'>Affortable Rates</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing