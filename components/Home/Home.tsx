import React from 'react'
import Hero from './Hero/Hero'
import RecentImages from './RecentImages/RecentImages'
import About from './About/About'

const Home = () => {

    return (
        <div className='overflow-hidden'>
            <Hero />
            <RecentImages />
            <About />
        </div>
    )
}

export default Home

