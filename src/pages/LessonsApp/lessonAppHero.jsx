import React from 'react'
import LessonAppBanner from '../../assets/img/LessonsApp/banner.png'

const LessonAppHero = () => {
  return (
    <div className='w-full h-60 bg-blue-500 flex relative'>
            <div className='w-[50%] h-full absolute left-0'>
                <div className='w-40 mr-18 md:w-70 h-12 bg-primary-blue md:mr-70 mt-10 flex justify-center text-[10px] md:text-[15px] items-center text-center rounded-3xl text-white'>
                    <span > صفحه اصلی</span>
                    <span className='mx-2'> ← </span>
                    <span>برنامه های اموزشی</span>
                </div>
                <h1 className='text-[20px] mr-20 md:mr-45 md:text-[36px] font-bold text-white mt-2'>برنامه های اموزشی</h1>
                <p className='text-[10px] mr-20 text-white md:text-[18px] md:mr-45 font-bold mt-2'>آموزش با کیفیت برای ساختن آینده بهتر</p>
            </div>
            <img className='w-150 object-cover md:w-full md:object-cover' src={LessonAppBanner} alt="" />
        </div>
  )
}

export default LessonAppHero
