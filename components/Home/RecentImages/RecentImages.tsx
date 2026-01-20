import React from 'react'
import ImageSlider from './ImageSlider'

const RecentImages = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-950'>
            {/* heaing */}
            <div className='w-[80%] mx-auto '>
                <h1 className='text-2xl lg:text-3xl font-bold text-white'>Explore Images</h1>
                <p className='text-sm sm:text-base md:text-lg mt-2 text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam tenetur soluta sequi, eveniet, maiores adipisci deserunt commodi minima quas architecto eaque minus, quos et earum maxime ullam blanditiis doloribus corporis.</p>
            </div>

            {/* slider */}
            <div
                data-aos="fade-left"
                // data-aos-anchor="#example-anchor"
                data-aos-offset="300"
                data-aos-duration="300"
                className='w-[90%] md:w-[80%] mx-auto mt-16'>
                <ImageSlider />
            </div>
        </div>
    )
}

export default RecentImages