import React from 'react'
import HealthImg from "../public/img/Health-care.png"
import Image from 'next/image'

const Budget = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image className="object-cover object-center rounded" alt="hero" src={HealthImg} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Health Care with Top Professionals
                            and In Budget.
                        </h1>
                        <p className="mb-8 leading-relaxed">We&apos;ve built a healthcare system that puts your needs first.
                        For us, there is nothing more important than the health of
                        you and your loved ones.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Make an Appoinment</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Budget