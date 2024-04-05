import React from 'react'

const Heading = ({subHeading, heading, desc}) => {
  return (
    <div className='w-1/2 mx-auto'>
      <p className='text-[--primary] text-xl font-semibold text-center'>{subHeading}</p>
      <p className='text-3xl font-bold text-center'>{heading}</p>
      <p className='text-[--text-gray] text-md text-center'>{desc}</p>
    </div>
  )
}

export default Heading
