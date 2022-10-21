import React from 'react'
import Image from 'next/image'
import First from '../public/img/1.jpeg'
import Two from '../public/img/2.jpeg'
import Three from '../public/img/3.jpeg'
import Four from '../public/img/4.jpeg'
import Five from '../public/img/5.jpeg'
import Six from '../public/img/6.jpeg'
import Seven from '../public/img/7.jpeg'
// import Eight from '../public/img/8.jpeg'
import Eight from '../public/img/9.jpeg'



const Gallery = () => {
    return (
        <>
            <div className="container-gallery Gallery-container mb-">
                <div className="image-gallery">
                    <div className="column">
                        <div className="image-item">
                            <Image className='Gallery-image' src={ Seven } alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image-item">
                            <Image className='Gallery-image' src={ Two } alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image-item">
                            <Image className='Gallery-image' src={ Three } alt="" />
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-item">
                            <Image className='Gallery-image' src={ Four } alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image-item">
                            <Image className='Gallery-image' src={ Five } alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image-item">
                            <Image className='Gallery-image' src={ Six } alt="" />
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-item">
                            <Image className='Gallery-image' src={ First } alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image-item">
                            <Image className='Gallery-image' src={ Eight } alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image-item">
                            <Image className='Gallery-image' src={ Three } alt="" />
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery