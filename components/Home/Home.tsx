"use client";

import { useEffect } from 'react';
import Hero from './Hero/Hero'
import RecentImages from './RecentImages/RecentImages'
import About from './About/About'
import Pricing from './Pricing/Pricing'
import Review from './Review/Review'
import Faq from './Faq/Faq'
import Footer from './Footer/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    // Initialize AOS library
    useEffect(() => {
        const initAOS = async () => {
            await import("aos");

            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom",
            })
        }

        initAOS();
    }, [])

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

