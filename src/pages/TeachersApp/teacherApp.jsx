import React from 'react'
import TeacherAppHero from './teacherAppHero'
import TeacherAppMessage from './teacherAppMessage'
import TeacherAppServices from './teacherAppServices'
import TeacherAppCards from './teacherAppCards'
import TeacherAppAction from './teacherAppAction'
import Footer from '../../components/layout/footer/footer'

const TeacherApp = () => {
  return (
    <div className='w-full h-screen md:mt-15 p-1 flex flex-wrap justify-center'>
      <TeacherAppHero/>
      <TeacherAppMessage/>
      <TeacherAppServices/>
      <TeacherAppCards/>
      <TeacherAppAction/>
      <Footer/>
    </div>
  )
}

export default TeacherApp
