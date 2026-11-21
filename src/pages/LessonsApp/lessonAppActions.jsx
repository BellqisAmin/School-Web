import React from 'react'
import actionphoto from '../../assets/img/LessonsApp/actionphoto.png'

const LessonAppActions = () => {
  return (
    <div className='mt-75 md:mt-0 w-full h-50 p-3 md:flex gap-10 '>
        <div className='md:w-[50%] bg-background-cart p-2 rounded-md border border-sky-300 h-full gap-10 sm:w-full mb-3'>
          <h1 className='font-bold text-[18px]'>دانلود اسناد آموزشی</h1>
          <p className='font-bold my-3'>برای دریافت فایل های مهم آموزشی از لینک های زیر استفده میشود</p>
          <div className='w-full min-h-10 mt-4 gap-5 flex'>
            <spsn className='flex w-[26%] h-15 rounded-xl bg-white text-center capitalize justify-center items-center border border-sky-300'>تقویم آموزشی <br /> (pdf)</spsn>
            <spsn className='flex w-[26%] h-15 rounded-xl bg-white text-center capitalize justify-center items-center border border-sky-300'>فهرست کتابها <br /> (pdf)</spsn>
            <spsn className='flex w-[26%] h-15 rounded-xl bg-white text-center capitalize justify-center items-center border border-sky-300'>برنامه درسی <br /> (pdf)</spsn>
          </div>
        </div>
        <div className='md:w-[50%] bg-primary-dark p-2 rounded-md border border-sky-300 h-full flex gap-10 sm:w-full mb-3'>
          <div className='w-[50%] h-full text-white text-center flex flex-wrap content-center justify-center'>
            <h3 className='w-full font-bold text-[20px]'>با ما آینده روشن بسازید</h3>
            <p className='w-full my-2'>ثبت نام کنید و جزٍ خانواده بزرگ مکتب ما شوید</p>
            <button className='w-35 h-10 mt-2 bg-amber-400 text-primary font-bold rounded-3xl'>ثبت نام آنلاین</button>
          </div>
          <img src={actionphoto} alt="" />
        </div>
      </div>
  )
}

export default LessonAppActions
