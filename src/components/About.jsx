import React from 'react'
import Button from './Button'
import SectionTag from './sectionTag'

const About = () => {
    return (
        <section className="bg-white">
            <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-2 gap-4">
                    <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                </div>
                <div className="font-light text-[--text-gray] sm:text-md mt-4 lg:mt-0">
                    <SectionTag>About Us</SectionTag>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 mt-2 dark:text-white">We didn't reinvent the wheel</h2>
                    <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    <div className='mt-6'><Button>See More</Button></div>
                </div>
            </div>
        </section>
    )
}

export default About
