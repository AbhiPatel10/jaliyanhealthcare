import Image from 'next/image'
import React from 'react'
import AboutImage from '../public/img/About.png'

const About = () => {
    return (
        <>
            <section className="text-gray-600 body-font xs:px-0 px-10">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-800">We are developing a healthcare
                        system around you</h1>
                        <p className='text-blue-600 text-base'>We think that everyone should have easy access to excellent
                        healthcare. Our aim is to make the procedure as simple as
                        possible for our patients and to offer treatment no matter
                        where they are — in person or at their convenience.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded" alt="hero" src={AboutImage} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About