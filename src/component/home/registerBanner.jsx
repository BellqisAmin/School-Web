import React from 'react';
import { FaArrowLeftLong, FaFileSignature } from "react-icons/fa6";

import highImg from '../../assets/img/highImg.jpg';

const RegisterBanner = () => {
  return (
    <section className='w-full py-6 px-4'>
      
      {/* باکس اصلی بنر */}
      <div className='relative w-full bg-primary rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row items-center justify-between px-6 py-8 md:py-10 gap-6'>
        
        {/* تصویر پس‌زمینه محو در سمت چپ */}
        <img 
          src={highImg} 
          alt="فارغ‌التحصیلی" 
          className='absolute left-0 top-0 h-full w-full md:w-1/2 object-cover opacity-15 pointer-events-none' 
        />

        {/* بخش راست: آیکون بزرگ */}
        <div className='relative z-10 text-white text-[48px] md:text-[60px]'>
          <FaFileSignature />
        </div>

        {/* بخش وسط: عنوان و زیرعنوان */}
        <div className='relative z-10 text-center text-white'>
          <h2 className='font-Estedad font-bold text-[20px] md:text-[26px] mb-2'>
            همین امروز برای ثبت‌نام اقدام کنید!
          </h2>
          <p className='font-Vazirmatn text-[13px] md:text-[15px] text-gray-200'>
            آینده فرزند خود را ما بسازید.
          </p>
        </div>

        {/* بخش چپ: دکمه سفید ثبت‌نام آنلاین */}
        <div className='relative z-10'>
          <button className='bg-white text-primary font-Vazirmatn font-bold text-[14px] md:text-[15px] px-6 py-2.5 rounded-full flex items-center gap-3 shadow-sm hover:bg-gray-100 transition'>
            <span>ثبت‌نام آنلاین</span>
            <FaArrowLeftLong />
          </button>
        </div>

      </div>

    </section>
  );
};

export default RegisterBanner;
