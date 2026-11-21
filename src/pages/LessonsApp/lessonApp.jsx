import React from 'react'
import LessonAppHero from './lessonAppHero'
import LessonAppAbout from './lessonAppAbout'
import LessonAppServices from './lessonAppServices'
import LessonAppPrograms from './lessonAppPrograms'
import LessonAppFeatures from './lessonAppFeatures'
import LessonAppActions from './lessonAppActions'
import Footer from '../../components/layout/footer/footer'

const LessonApp = () => {
  return (
    <div className='w-full h-screen md:mt-15 p-1 flex flex-wrap justify-center'>
      <LessonAppHero/>
      <LessonAppAbout/>
      <LessonAppServices/>
      <LessonAppPrograms/>
      <LessonAppFeatures/>
      <LessonAppActions/>
      <Footer/>
    </div>
  )
}

export default LessonApp
