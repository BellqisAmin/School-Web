import React from 'react'
import GallaryHero from './gallaryHero'
import GallaryServices from './gallaryServices'
import OurGallary from './ourGallary'
import GallaryAction from './gallaryAction'
import Footer from '../../components/layout/footer/footer'

const Gallary = () => {
  return (
    <div className='w-full h-screen md:mt-15 p-1 flex flex-wrap justify-center'>
      <GallaryHero/>
      <GallaryServices/>
      <OurGallary/>
      <GallaryAction/>
      <Footer/>
    </div>
  )
}

export default Gallary
