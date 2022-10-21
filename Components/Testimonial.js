import React from 'react'
import { RiUser3Line } from 'react-icons/ri';
import { HiUser } from 'react-icons/hi';

const Testimonial = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5  mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3  rounded px-1 mb-2 lg:mb-0">
                            <div className="h-full rounded pt-10 bg-gray-100 mb-6 p-4 text-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <RiUser3Line className='text-4xl' />
                                </div>
                                <p className="leading-relaxed">I was seen by Dr. Mihir Jivarani. He was so kind and professional. He asked many questions and was very thorough. He gave me the time I needed and was very helpful. Thank you!</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm">Rahul Patel</h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3  rounded px-1 mb-2 lg:mb-0">
                            <div className="h-full pt-10 rounded bg-gray-100 mb-6 p-4 text-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <HiUser className='text-4xl' />
                                </div>
                                <p className="leading-relaxed">As always, my experience at My Jaliyan Health Care Clinic was very good. Dr. Mihir Jivarani, who are always friendly and polite. Total professionalism throughout. I would 100% recommend My Jaliyan Heath Care Clinic .</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm">Dhvani Mehta</h2>
                                <p className="text-gray-500">Software Engineer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3  rounded px-1 mb-2 lg:mb-0">
                            <div className="h-full pt-10 rounded bg-gray-100 mb-6 p-4 text-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <RiUser3Line className='text-4xl' />
                                </div>
                                <p className="leading-relaxed">Dr. Mihir Jivarani of Jaliyan Health Clinic is one of the best doctor in Gota, Ahmedabad. He is like a friend and very good of nature. Also he doesn&apos;t take consultant fees but he gives good branded medicines from his clinic only.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm">Dhaval Patel</h2>
                                <p className="text-gray-500">Account Executive</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial