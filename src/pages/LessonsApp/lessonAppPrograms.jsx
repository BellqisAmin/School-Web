import React from 'react'
import programsImage from '../../assets/img/LessonsApp/programsImage.jpg'

const LessonAppPrograms = () => {
  return (
     <div className='w-full h-80 p-3 md:flex gap-10'>
            <div className='md:w-[50%] bg-background-cart p-2 rounded-md border border-sky-300 h-full flex gap-10 sm:w-full mb-3'>
                <div className='w-[50%] h-full'>
                    <h1 className='font-bold mr-3 text-[20px] mt-3'>روش تدریس</h1>
                    <p className='text-[15px] mt-1 md:text-[20px] mr-3 font-bold'>در مکتب ما از روش های نوین آموزشی استفاده میشود</p>
                    <ul className='w-full min-h-10 mr-3 mt-2'>
                        <li className='md:text-[15px] text-[11px]'>✔️تدریس تعاملی و مشارکتی</li>
                        <li className='md:text-[15px] text-[11px]'>✔️کار گروهی و پروژه عملی </li>
                        <li className='md:text-[14px] text-[9px] mt-1 text-primary-blue'>✔️استفاده از فناوری و وسایل آموزشی مدرن</li>
                        <li className='md:text-[14px] text-[11px] mt-1 text-primary-blue'>✔️ارعه تکالیف وفعالیت ها خلاقانه</li>
                    </ul>
                </div>
                <img className='w-[50%] h-full object-cover' src={programsImage} alt="" />
            </div>
            <div className='md:w-[45%] min-h-full bg-background-cart p-2 rounded-md border border-sky-300 sm-w-full flex flex-wrap justify-center'>
                <h1 className='block w-full font-bold mr-3 mt-3 text-[20px]'>مضامین درسی</h1>
                <p className='block w-full mr-7 font-bold'>مضامین درسی ما مطلبق نصاب تعلیمی و نیاز ها عصر حاضر عبارت اند از:</p>
                <div className='w-full min-h-20 flex flex-wrap gap-3 justify-center text-center mt-3'>
                    <spsn className='flex w-[25%] h-13 rounded-3xl bg-white justify-center items-center border border-sky-300'>ریاضیات</spsn>
                    <spsn className='flex w-[25%] h-13 rounded-3xl bg-white justify-center items-center border border-sky-300'>علوم طبیعی</spsn>
                    <spsn className='flex w-[25%] h-13 rounded-3xl bg-white justify-center items-center border border-sky-300'>زبان مادری</spsn>
                    <spsn className='flex w-[25%] h-13 rounded-3xl bg-white justify-center items-center border border-sky-300'>تعلیمات اسلامی</spsn>
                    <spsn className='flex w-[25%] h-13 rounded-3xl bg-white justify-center items-center border border-sky-300'>زبان انگلیسی</spsn>
                    <spsn className='flex w-[25%] h-13 rounded-3xl bg-white justify-center items-center border border-sky-300'>علوم اجتماعی</spsn>
                </div>
                <button className='w-[28%] text-[13px] sm:text[30px] flex md:w-[27%] h-10 mt-3 rounded-3xl bg-primary-dark text-white justify-center items-center border border-sky-300'>همه مضامین ها →</button>
            </div>
        </div>
  )
}

export default LessonAppPrograms
