import React from 'react'
import GradientText from './GradientText'

const Heading = ({subHeading, heading, gradientContent, desc}) => {
  return (
    <div className='w-2/3 mx-auto'>
      <p className='text-primary font-semibold bg-lightgray w-fit px-2 rounded-full text-center mx-auto mb-2'>{subHeading}</p>
      <p className='text-3xl font-bold text-center mb-2'>{heading} <GradientText>{gradientContent}</GradientText></p>
      <p className='text-gray text-md text-center'>{desc}</p>
    </div>
  )
}

export default Heading
