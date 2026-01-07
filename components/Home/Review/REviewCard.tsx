import { QuoteIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
    image: string,
    name: string,
    role: string
}
const REviewCard = ({ image, name, role }: Props) => {
    return (
        <div className='flex items-center justify-center flex-col '>
            <QuoteIcon className='w-10 h-10 text-pink-300' />
            <p className='text-center mt-4 text-white text-base md:text-lg lg:text-xl font-light text-opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi dignissimos earum
                assumenda? Omnis, tenetur ex. Itaque harum quas voluptatibus at voluptates optio deleniti
                iste magnam, fugit commodi veritatis in.
                assumenda? Omnis, tenetur ex. Itaque harum quas voluptatibus at voluptates optio deleniti
                iste magnam, fugit commodi veritatis in.
            </p>
            <div className='mt-8'>
                <h3 className='text-base md:text-2xl  text-white text-center'>{name}</h3>
                <p className='text-sm md:text-lg font-thin text-white text-center'>{role}</p>
                <Image src={image} alt={image} height={80} width={80} className='mt-6 rounded-full mx-auto' />
            </div>
        </div>
    )
}

export default REviewCard