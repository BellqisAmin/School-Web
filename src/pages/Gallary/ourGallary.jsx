import React from 'react'
import BuldingPhoto from './GallaryPhoto/buldingPhoto'
import ClassPhoto from './GallaryPhoto/classPhoto'
import FacilitiesPhoto from './GallaryPhoto/facilitiesPhoto'
import ScientificActicitiesPhoto from './GallaryPhoto/scientificActicitiesPhoto'
import Video from './GallaryPhoto/video'

const OurGallary = () => {
  return (
    <section className='w-full min-h-65 p-3 flex flex-wrap content-center gap-3 justify-center'>
        <BuldingPhoto/>
        <ClassPhoto/>
        <FacilitiesPhoto/>
        <ScientificActicitiesPhoto/>
        <Video/>
    </section>
  )
}

export default OurGallary
