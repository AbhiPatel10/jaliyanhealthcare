import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import SectionHeader from '../Components/section-header'
import Link from 'next/link'
import MainBlock from '../Components/MainBlock'
import Budget from '../Components/Budget'
import Script from 'next/script'
import Gallery from '../Components/Gallery'
import Testimonial from '../Components/Testimonial'
import Appoinment from '../Components/Appoinment'
import Footer from '../Components/Footer'
import About from '../Components/About'

export default function Home() {
  return (
    <>
      <div>
        <Script src="https://kit.fontawesome.com/35e374af31.js" crossOrigin="anonymous"></Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        <div id='home' className='Main-section'>
          <Navbar />
          <Hero />
        </div>
        <div id='services'>
          <SectionHeader title="Our Services" />
          <MainBlock />
        </div>
        <Budget />
        <SectionHeader title="Our Gallery" />
        <Gallery />
        <div id='review'>
          <SectionHeader title="People Who Love Us" />
          <Testimonial />
        </div>
        <div id='about'>
          <SectionHeader title="About Us" />
          <About />
        </div>
        <div id='appoinment'>
          <SectionHeader title="Appoinment Form" />
          <Appoinment />
        </div>
        <Footer />
      </div>

    </>
  )
}
