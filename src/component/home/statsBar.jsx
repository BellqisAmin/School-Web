import React from 'react'
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";

const StatsBar = () => {
  return (
      <ul className='-translate-y-5 md:h-30 bg-background-light rounded-2xl w-full shadow-gray-300 shadow-[0px_0px_10px_0px] grid grid-cols-2 md:grid-cols-4'>

        <li className='flex flex-wrap justify-center items-center my-4'>
          <i className='text-3xl md:text-4xl text-text-primary'><FaUsers /></i>
          <div className='w-full text-center'>
            <strong className='w-full block text-[18px] md:text-[20px] font-Estedad text-text-primary'>۱۲۰۰ شاگرد</strong>
            <span className='w-full block text-[12px] md:text-[12px] font-Estedad text-text-primary'>تعداد شاگردان</span>
          </div>
        </li>
        <li className='border-r-3 border-r-border flex flex-wrap justify-center items-center my-4'>
          <i className='text-3xl md:text-4xl text-text-primary'><GiTeacher /></i>
          <div className='w-full text-center'>
            <strong className='w-full block text-[18px] md:text-[20px] font-Estedad text-text-primary'>۶۰ معلم</strong>
            <span className='w-full block text-[12px] md:text-[12px] font-Estedad text-text-primary'>معلمان مسلکی</span>
          </div>
        </li>
        <li className='md:border-r-3 md:border-r-border flex flex-wrap justify-center items-center my-4'>
          <i className='text-3xl md:text-4xl text-text-primary'><FaGraduationCap /></i>
          <div className='w-full text-center'>
            <strong className='w-full block text-[18px] md:text-[20px] font-Estedad text-text-primary'>۱۲ صنف</strong>
            <span className='w-full block text-[12px] md:text-[12px] font-Estedad text-text-primary'>صنف های آموزشی</span>
          </div>
        </li>
        <li className='border-r-3 border-r-border flex flex-wrap justify-center items-center my-4'>
          <i className='text-3xl md:text-4xl text-text-primary'><IoCalendarSharp /></i>
          <div className='w-full text-center'>
            <strong className='w-full block text-[18px] md:text-[20px] font-Estedad text-text-primary'>۱۵ سال</strong>
            <span className='w-full block text-[12px] md:text-[12px] font-Estedad text-text-primary'>سال های فعالیت</span>
          </div>
        </li>
      </ul>
  )
}

export default StatsBar