import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SectionHeader from '../components/section-header'
import Link from 'next/link'
import MainBlock from '../components/MainBlock'
import Budget from '../components/Budget'
import Script from 'next/script'
import Gallery from '../components/Gallery'
import Testimonial from '../components/Testimonial'
import Appoinment from '../components/Appoinment'
import Footer from '../components/Footer'
import About from '../components/About'

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
