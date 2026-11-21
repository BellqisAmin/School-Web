import React from 'react'
import features1 from '../../assets/img/LessonsApp/features1.jpg'
import features2 from '../../assets/img/LessonsApp/features2.jpg'

const LessonAppFeatures = () => {
  return (
    <div className='w-full h-80 p-3 md:flex gap-10'>
      <div className='md:w-[50%] bg-background-cart p-2 rounded-md border border-sky-300 h-full flex gap-10 sm:w-full mb-3'>
        <div className='w-[50%] h-full'>
          <h1 className='font-bold mr-3 text-[20px] mt-3'>برنامه های فوق</h1>
          <p className='text-[15px] mt-1 md:text-[20px] mr-3 font-bold'>به منظور رشد همه جانبه شاگردان برنامه های فوق درسی نیز</p>
          <ul className='w-full min-h-10 mr-3 mt-2'>
            <li className='md:text-[14px] text-[11px] mt-1 text-primary-blue'>✔️مسابقات علمی و فرهنگی</li>
            <li className='md:text-[14px] text-[11px] mt-1 text-primary-blue'>✔️برنامه های ورزشی و تفریحی</li>
            <li className='md:text-[14px] text-[9px] mt-1 text-primary-blue'>✔️نمایشکده های هنری و علمی</li>
            <li className='md:text-[14px] text-[11px] mt-1 text-primary-blue'>✔️اردو های آموزشی و تفریحی</li>
          </ul>
        </div>
        <img className='w-[50%] h-full object-cover' src={features1} alt="" />
      </div>

      <div className='md:w-[50%] bg-background-cart p-2 rounded-md border border-sky-300 h-full flex gap-10 sm:w-full mb-3'>
        <div className='w-[50%] h-full'>
          <h1 className='font-bold mr-3 text-[20px] mt-3'>ارزیابی و امتحانات</h1>
          <p className='text-[15px] mt-1 md:text-[20px] mr-3 font-bold'>برای سنجش پیشرفت تحصیلی شاگردان برنامه های زیر انجام گردد</p>
          <ul className='w-full min-h-10 mr-3 mt-2'>
            <li className='md:text-[14px] text-[11px] mt-1 text-primary-blue'>✔️امتحانات ماهوار ودورهای</li>
            <li className='md:text-[14px] text-[11px] mt-1 text-primary-blue'>✔️امتحانات وسط سال و سالانه</li>
            <li className='md:text-[14px] text-[9px] mt-1 text-primary-blue'>✔️تکالیف و فعالیت ها صنفی</li>
            <li className='md:text-[14px] text-[11px] mt-1 text-primary-blue'>✔️اطلاعرسانی نتایج از طریق سیستم مکتب</li>
          </ul>
        </div>
        <img className='w-[50%] h-full object-cover' src={features2} alt="" />
      </div>
    </div>
  )
}

export default LessonAppFeatures
