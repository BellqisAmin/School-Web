import React from 'react'
import CalenderHero from './calenderHero'
import CalernderDates from './calernderDates'
import CalenderTabs from './calenderTabs'
import CalenderAction from './calenderAction'
import Footer from '../../components/layout/footer/footer'

const AcadimicCalender = () => {
  return (
    <div className='w-full h-screen md:mt-15 p-1 flex flex-wrap justify-center'>
      <CalenderHero/>
      <CalernderDates/>
      <CalenderTabs/>
      <CalenderAction/>
      <Footer/>
    </div>
  )
}

export default AcadimicCalender
