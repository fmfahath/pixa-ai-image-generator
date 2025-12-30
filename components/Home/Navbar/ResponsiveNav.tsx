'use client';

import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Navbar from './Navbar'

const ResponsiveNav = () => {

    const [showNav, setShowNav] = useState(false);
    const openNavHandler = () => setShowNav(true)
    const closeNavHandler = () => setShowNav(false)

    return (
        <div>
            <Navbar openNav={openNavHandler} />
            <MobileNav showNav={showNav} closeNav={closeNavHandler} />
        </div>
    )
}

export default ResponsiveNav