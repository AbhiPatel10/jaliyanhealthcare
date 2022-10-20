import React from 'react'
import FirstImg from '../public/img/1.jpeg'
import ThirdImg from '../public/img/3.jpeg'
import FourthImg from '../public/img/4.jpeg'
import Image from 'next/image'

const Gallery = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-9">

                <section className="py-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="hidden md:block md:w-1/2 px-4">
                        <div className="h-full w-full rounded shadow-md"><Image className="rounded shadow-md" src={FirstImg} alt="" /></div>
                        </div>
                        <div className="md:w-1/2 h-auto px-4">
                            <div className="mb-8"><Image style={{height: "50px"}} className="text-xs rounded shadow-md" src={ThirdImg} alt="" /></div>
                            <div><Image className="rounded h-1/2 shadow-md gallaryImage" src={FourthImg} alt="" /></div>
                        </div>
                    </div>
                </section>

                <section className="py-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="md:w-1/2 px-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                        <div className="md:w-1/2 px-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                    </div>
                </section>
                <section className="pt-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                        <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                        <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                        <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                        <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                        <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Gallery