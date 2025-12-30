'use client';

import { NavLinks } from '@/constant/constant'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react';


type Props = {
    openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavBg(true);
            }
            else setNavBg(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    return (
        <div className={`flex items-center justify-between w-full h-[12vh] fixed mx-auto z-[100]  transition-all duration-200 ${navBg ? 'bg-gray-900 shadow-md' : 'bg-transparent'}`}>
            {/* logo */}
            <h1 className='text-3xl font-bold text-white ml-8 md:ml-16'>PIXA</h1>

            <div className='md:flex items-center space-x-10 hidden'>
                {/* navlinks */}
                {NavLinks.map(link => (
                    <Link href={link.url} key={link.id} className='relative text-white text-base w-fit block after:block after:content-[""] 
                    after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after::origin-center'>
                        <p>{link.label}</p>
                    </Link>
                ))}
            </div>

            {/* nav icons */}
            <div className='flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16'>
                <ShoppingCartIcon className='cursor-pointer w-6 h-6' />
                <SearchIcon className='cursor-pointer w-6 h-6' />
                <MenuIcon onClick={openNav} className='cursor-pointer w-6 h-6 md:hidden' />
            </div>
        </div>
    )
}

export default Navbar  