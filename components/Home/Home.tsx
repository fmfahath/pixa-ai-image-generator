import React from 'react'
import Hero from './Hero/Hero'
import RecentImages from './RecentImages/RecentImages'
import About from './About/About'
import Pricing from './Pricing/Pricing'
import Review from './Review/Review'
import Faq from './Faq/Faq'
import Footer from './Footer/Footer'

const Home = () => {

    return (
        <div className='overflow-hidden'>
            <Hero />
            <RecentImages />
            <About />
            <Pricing />
            <Review />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home

