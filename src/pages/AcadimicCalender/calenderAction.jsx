import React from 'react'
import hat from '../../assets/img/calender/hat.png'

const CalenderAction = () => {
  return (
    <div dir="" className="w-full mx-auto px-4 my-8">
      <div className=" bg-gradient-to-l from-[#003b8e] via-[#0056b3] to-[#003b8e] rounded-2xl px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg text-white">
        <a href="" className="bg-blue-600 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap z-10"><span>+9370123785</span></a>
        <div className='text-center'>
          <p className="text-base md:text-lg font-bold text-center z-10">برای مدیریت بیشتر با مدیریت کمتب ما تماس بیگیرید</p>
          <span>ما همواره در خدمت شما هستیم</span>
        </div>
        <div className="hidden md:flex items-center justify-end w-28 relative">
          <img src={hat} alt="" className="w-28 h-15 object-cover object-top drop-shadow-md pointer-events-none" />
        </div>

      </div>
    </div>
  )
}

export default CalenderAction
