import React from 'react'
import Image from 'next/image'
// import { FontAwesomeIcon } from '@crossOrigin'
import DoctorIcon from '../public/img/icon-doctor.png'

const SectionHeader = (props) => {
  return (
    <>
      {
        props.title.length ?
          <div className='section-header'>
            <div>
              <p className='text-4xl mb-2'>{ props.title }</p>
              <div className='section-header-lines'>
                <div className='line-1'></div>
                <span className='header-icon'><Image src={ DoctorIcon } /></span>
                <div className='line-2'></div>
              </div>
            </div>
          </div>
          : ''
      }
    </>
  )
}

export default SectionHeader