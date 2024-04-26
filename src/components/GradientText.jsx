import React from 'react'

const GradientText = ({ children }) => {
    return (
        <span className='bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text'>{children}</span>
    )
}

export default GradientText
