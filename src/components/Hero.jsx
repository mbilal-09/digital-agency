import Image from 'next/image'
import React from 'react'
import Button from './Button'
import GradientText from './GradientText'

const Hero = () => {
    return (
        <div className='h-screen flex flex-col md:flex-row w-full mt-8 md:mt-0 md:justify-center items-center px-4'>
            <div className='w-full md:w-1/2 pe-4 flex flex-col gap-3'>
                <p className='text-[--primary] text-xl font-semibold'>WELCOME</p>
                <p className='text-6xl font-bold'>Maximize Your <GradientText>Visiblity</GradientText></p>
                <p className='text-[--text-gray] text-lg mb-8'>Ensuring the best return on investment for your bespoke SEO campaign requirement.</p>
                <Button>Contact Today</Button>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <Image src={"/Images/hero.png"} width={600} height={600} />
            </div>
        </div>
    )
}

export default Hero
