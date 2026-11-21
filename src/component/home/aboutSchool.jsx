import React from 'react'
import Aboutschool from '../../assets/img/about_school.jpg'
import { FaArrowLeftLong } from "react-icons/fa6";

const AboutSchool = () => {
  return (
    <section className='w-full px-10 md:px-0 shadow-gray-200 shadow-[0px_0px_10px_0px] bg-background-light rounded-2xl flex flex-col md:flex-row justify-between overflow-hidden'>
      
      {/* بخش لوگو و متن */}
      <div className='flex flex-col md:flex-row items-center w-full md:w-auto gap-6 md:gap-8'>
        
        {/* لوگو و شعار */}
        <div className='w-36 md:w-40 shrink-0 flex flex-col items-center'>
          <img src="1.png" alt="" className='w-32 h-32 md:w-full md:h-40 object-cover' />
          <p className='text-text-primary text-[14px] text-center font-Vazirmatn-Bold mt-2'>
            دانش، اخلاق، آینده روشن
          </p>
        </div>

        {/* توضیحات مکتب */}
        <div className='w-full mb-5 md:mb-0 md:my-4 md:max-w-md flex flex-col justify-between border-t-2 border-t-primary pt-5 md:border-t-0 md:pt-0 md:border-r-2 md:border-r-primary md:pr-8'>
          <div className=''>
            <h2 className='w-fit bg-border mb-2 text-text-primary font-Estedad text-[13px] md:text-[14px] rounded-full px-4 py-0.5'>
              درباره مکتب
            </h2>
            <h1 className='text-text-primary mb-3 font-Estedad font-bold text-[20px] md:text-[24px]'>
              مکتب خصوصی امید فردا
            </h1>
            <p className='leading-6 text-[13px] text-text-primary font-Vazirmatn '>
              مکتب خصوصی امید فردا با هدف تربیت نسل آگاه، متعهد و موفق در سال ۱۳۹۰ تأسیس گردیده است. ما با بهره‌گیری از معلمان مجرب، محیط آموزشی مدرن و برنامه‌های علمی متنوع، همواره در تلاش هستیم تا بهترین خدمات آموزشی را به شاگردان عزیز ارائه نماییم.
            </p>
          </div>

          {/* دکمه بدون absolute */}
          <div className=' flex justify-end'>
            <button className='font-Vazirmatn text-[14px] md:text-[16px] text-text-white bg-primary flex items-center gap-2 px-4 py-1.5 rounded-full hover:opacity-90 transition'>
              <span>بیشتر بخوانید</span>
              <FaArrowLeftLong />
            </button>
          </div>
        </div>

      </div>

      {/* تصویر ساختمان مکتب */}
      <div className='flex items-center'>
        <img className='md:h-62 hidden lg:flex object-cover object-right ' src={Aboutschool} alt="" />
      </div>
      
    </section>
  )
}

export default AboutSchool
