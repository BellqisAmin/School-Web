import React from 'react'
import Action from './Dates/action'
import Calender from './Dates/calender'

const CalernderDates = () => {
  return (
    <section className='w-full min-h-30 mt-10 p-2 flex justify-between gap-10 mb-5'>
        <Action/>
        <Calender/>
    </section>
  )
}

export default CalernderDates
