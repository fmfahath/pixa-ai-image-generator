import React from 'react'
import Hero from './Hero/Hero'
import RecentImages from './RecentImages/RecentImages'
import About from './About/About'
import Pricing from './Pricing/Pricing'

const Home = () => {

    return (
        <div className='overflow-hidden'>
            <Hero />
            <RecentImages />
            <About />
            <Pricing />
        </div>
    )
}

export default Home

