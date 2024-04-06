import React from 'react'

const Heading = ({subHeading, heading, desc}) => {
  return (
    <div className='w-2/3 mx-auto'>
      <p className='text-[--primary] font-semibold bg-gray-100 w-fit px-2 rounded-full text-center mx-auto mb-2'>{subHeading}</p>
      <p className='text-3xl font-bold text-center mb-2'>{heading}</p>
      <p className='text-[--text-gray] text-md text-center'>{desc}</p>
    </div>
  )
}

export default Heading
