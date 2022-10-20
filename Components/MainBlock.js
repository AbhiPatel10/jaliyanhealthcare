import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { RiMapPinTimeLine } from 'react-icons/ri';

const MainBlock = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/3 w-full">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden text-center relative">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="tracking-widest text-base title-font font-medium text-gray-400 ">24 Hours Service</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-900 mb-3">Online Appoinment</h1>
                                <p>Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
                                <button className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Make an Appoinment</button>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3 w-full">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden text-center relative">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <RiMapPinTimeLine className='text-4xl' />
                                </div>
                                <h2 className="tracking-widest text-base title-font font-medium text-gray-400 ">Timing schedule</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-900 mb-3">Working Hours</h1>
                                <div className="w-full flex justify-between px-5 pb-1 mt-5 text-lg"><span>Mon - Sun :</span><span>9:00 AM - 10:00 PM</span></div>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3 w-full">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden text-center relative">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <FiPhoneCall className='text-4xl'/>
                                </div>
                                <h2 className="tracking-widest text-base title-font font-medium text-gray-400 ">Emegency Cases</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-900 mb-3">+91 - 9722335066</h1>
                                <p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MainBlock;