import React from 'react'

const GradientText = ({ children }) => {
    return (
        <span className='bg-gradient-to-r from-blue-400 to-blue-600 inline-block text-transparent bg-clip-text'>{children}</span>
    )
}

export default GradientText
