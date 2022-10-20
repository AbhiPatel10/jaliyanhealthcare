import React from 'react';
import HeroImage from '../public/img/hero.png'
import Image from 'next/image';
import TextTransition, { presets } from "react-text-transition";

const Hero = () => {
  const [index, setIndex] = React.useState(0)

  const TEXTS = [
    "Health",
    "Sushi",
    "Steak"
  ];
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <section >
        <div className="hero-section">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="hero-committed"><div className="hero-line-dash"></div>Committed to Care</div>
              <h1 className="title-font sm:text-6xl  md:text-4xl lg:text-6xl text-4xl font-bold  mb-4 text-gray-900 whitespace-nowrap">We Care About</h1>
              <h1 className="title-font sm:text-6xl md:text-4xl lg:text-6xl flex font-bold text-4xl mb-4 text-gray-900">Your&nbsp;
                <div className="text-blue-700">
                  <TextTransition springConfig={ presets.wobbly }>
                    { TEXTS[index % TEXTS.length] }
                  </TextTransition>
                </div>
              </h1>
              <p className="font-semibold lg:text-lg md:text-sm text-blue-700">You Can Get the care you need 24/7 - be it online or in person. You will be treated by caring specialist doctor.</p>
              <a href="#appoinment"><button className="mt-5 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Make an Appoinment</button></a>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center rounded" alt="hero" src={ HeroImage } />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero