import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div className='text-white flex justify-between items-center p-4 px-6 bg-[--black] w-full'>
            <div className='text-5xl text-[--neon-green] font-bold'>Logo</div>
            <div>

            </div>
            <div><Button>Get Started</Button></div>
        </div>
    )
}

export default Navbar