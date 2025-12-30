import { NavLinks } from '@/constant/constant'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
    return (
        <div className={`flex flex-col justify-center text-white h-screen w-full transform transition-all duration-1000 bg-gray-950 space-y-6 fixed top-0 z-[1050] ${showNav ? 'translate-y-0' : 'translate-y-[-200%]'}`}>
            {NavLinks.map(link => (
                <Link href={link.url} key={link.id} className=' text-white w-fit text-xl ml-12 border-b-[1.5px] hover:border-0 pb-1 border-white sm:text-[30px] relative after:content-[""] 
                    after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after::origin-center'>
                    <p>{link.label}</p>
                </Link>
            ))}

            {/* close icon */}
            <XIcon onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 hover:text-yellow-200' />
        </div>
    )
}

export default MobileNav