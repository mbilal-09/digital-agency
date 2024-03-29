import React from 'react'
import { Button } from '../ui/button';

const Hero = () => {
  return (
      <div class="bg-[--black] w-full h-screen flex flex-col items-center justify-center gap-4 text-white relative">
        <ul class="circles absolute top-0 left-0 w-full h-full overflow-hidden">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <span className='text-[--neon-green] z-10'>We Are Digital Agency</span>
        <span className='text-5xl sm:text-6xl md:text-7xl font-bold z-10 text-center'>Helping the Brands to <br/><span className='text-[--neon-green] z-10'> Grow Business </span></span>
        <Button className="z-10 mt-2">Explore for more</Button>
      </div>
  );
}

export default Hero