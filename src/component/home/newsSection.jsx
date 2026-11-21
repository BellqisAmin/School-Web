import React from 'react';
import { FaArrowLeftLong, FaNewspaper } from "react-icons/fa6";

import news1 from '../../assets/img/news1.jpg';
import news2 from '../../assets/img/news2.jpg';
import news3 from '../../assets/img/news3.webp';

const NewsSection = () => {
  return (
    <section className='w-full py-10 px-4'>
      
      {/* بخش عنوان: آخرین اخبار و اطلاعیه‌ها */}
      <div className='flex items-center justify-center gap-3 mb-8'>
        <span className='w-10 md:w-16 h-0.5 bg-primary'></span>
        <div className='flex items-center gap-2 text-primary font-Estedad font-bold text-[18px] md:text-[24px]'>
          <FaNewspaper />
          <h2>آخرین اخبار و اطلاعیه‌ها</h2>
        </div>
        <span className='w-10 md:w-16 h-0.5 bg-primary'></span>
      </div>

      {/* بخش کارت‌های خبر: در موبایل ۱ ستون، در تبلت ۲ ستون و در کامپیوتر ۳ ستون */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        
        {/* خبر اول */}
        <div className='bg-white rounded-2xl shadow-[0px_0px_10px_0px] shadow-gray-200 p-3 flex items-center justify-between gap-4'>
          {/* متن خبر (سمت راست) */}
          <div className='flex flex-col items-start'>
            <span className='bg-blue-50 text-primary font-Vazirmatn text-[11px] px-3 py-1 rounded-full mb-2'>
              ۱۵ میزان ۱۴۰۳
            </span>
            <h3 className='text-primary font-Estedad font-bold text-[15px] mb-3 leading-6'>
              آغاز ثبت‌نام سال تعلیمی جدید
            </h3>
            <button className='text-primary font-Vazirmatn text-[13px] flex items-center gap-2 hover:opacity-80'>
              <span>ادامه مطلب</span>
              <FaArrowLeftLong />
            </button>
          </div>

          {/* عکس خبر (سمت چپ) */}
          <img 
            src={news1} 
            alt="آغاز ثبت‌نام" 
            className='w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-xl shrink-0' 
          />
        </div>

        {/* خبر دوم */}
        <div className='bg-white rounded-2xl shadow-[0px_0px_10px_0px] shadow-gray-200 p-3 flex items-center justify-between gap-4'>
          {/* متن خبر (سمت راست) */}
          <div className='flex flex-col items-start'>
            <span className='bg-blue-50 text-primary font-Vazirmatn text-[11px] px-3 py-1 rounded-full mb-2'>
              ۲۰ میزان ۱۴۰۳
            </span>
            <h3 className='text-primary font-Estedad font-bold text-[15px] mb-3 leading-6'>
              آغاز امتحانات نوبتی خزانی
            </h3>
            <button className='text-primary font-Vazirmatn text-[13px] flex items-center gap-2 hover:opacity-80'>
              <span>ادامه مطلب</span>
              <FaArrowLeftLong />
            </button>
          </div>

          {/* عکس خبر (سمت چپ) */}
          <img 
            src={news2} 
            alt="امتحانات نوبتی خزانی" 
            className='w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-xl shrink-0' 
          />
        </div>

        {/* خبر سوم */}
        <div className='bg-white rounded-2xl shadow-[0px_0px_10px_0px] shadow-gray-200 p-3 flex items-center justify-between gap-4'>
          {/* متن خبر (سمت راست) */}
          <div className='flex flex-col items-start'>
            <span className='bg-blue-50 text-primary font-Vazirmatn text-[11px] px-3 py-1 rounded-full mb-2'>
              ۲۵ میزان ۱۴۰۳
            </span>
            <h3 className='text-primary font-Estedad font-bold text-[15px] mb-3 leading-6'>
              برگزاری مسابقات ورزشی بین صنوف
            </h3>
            <button className='text-primary font-Vazirmatn text-[13px] flex items-center gap-2 hover:opacity-80'>
              <span>ادامه مطلب</span>
              <FaArrowLeftLong />
            </button>
          </div>

          {/* عکس خبر (سمت چپ) */}
          <img 
            src={news3} 
            alt="مسابقات ورزشی" 
            className='w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-xl shrink-0' 
          />
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
