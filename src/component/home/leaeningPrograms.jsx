import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

import primaryImg from '../../assets/img/primaryImg.webp'
import middleImg from '../../assets/img/middleImg.jpg'
import highImg from '../../assets/img/highImg.jpg'

const LeaeningPrograms = () => {
  return (
    <section className='w-full py-10 px-4'>
      
      {/* بخش عنوان: دوره‌های آموزشی ما با دو خط در طرفین */}
      <div className='flex items-center justify-center gap-4 mb-8'>
        <span className='w-10 h-0.5 bg-primary'></span>
        <h2 className='text-primary font-Estedad font-bold text-[20px] md:text-[26px]'>
          دوره‌های آموزشی ما
        </h2>
        <span className='w-10 h-0.5 bg-primary'></span>
      </div>

      {/* بخش کارت‌ها: در موبایل ۱ ستون، در تبلت ۲ ستون و در کامپیوتر ۳ ستون */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        
        {/* کارت اول: دوره ابتدائیه */}
        <div className='bg-white rounded-2xl shadow-[0px_0px_10px_0px] shadow-gray-200 p-3 flex flex-col items-center'>
          <img src={primaryImg} alt="دوره ابتدائیه" className='w-full h-44 object-cover rounded-xl mb-4' />
          <h3 className='text-primary font-Estedad font-bold text-[18px] mb-2'>
            دوره ابتدائیه
          </h3>
          <button className='text-primary font-Vazirmatn text-[14px] flex items-center gap-2 mb-2 hover:opacity-80'>
            <span>مشاهده جزئیات</span>
            <FaArrowRight />
          </button>
        </div>

        {/* کارت دوم: دوره متوسطه */}
        <div className='bg-white rounded-2xl shadow-[0px_0px_10px_0px] shadow-gray-200 p-3 flex flex-col items-center'>
          <img src={middleImg} alt="دوره متوسطه" className='w-full h-44 object-cover rounded-xl mb-4' />
          <h3 className='text-primary font-Estedad font-bold text-[18px] mb-2'>
            دوره متوسطه
          </h3>
          <button className='text-primary font-Vazirmatn text-[14px] flex items-center gap-2 mb-2 hover:opacity-80'>
            <span>مشاهده جزئیات</span>
            <FaArrowRight />
          </button>
        </div>

        {/* کارت سوم: دوره لیسه */}
        <div className='bg-white rounded-2xl shadow-[0px_0px_10px_0px] shadow-gray-200 p-3 flex flex-col items-center'>
          <img src={highImg} alt="دوره لیسه" className='w-full h-44 object-cover rounded-xl mb-4' />
          <h3 className='text-primary font-Estedad font-bold text-[18px] mb-2'>
            دوره لیسه
          </h3>
          <button className='text-primary font-Vazirmatn text-[14px] flex items-center gap-2 mb-2 hover:opacity-80'>
            <span>مشاهده جزئیات</span>
            <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LeaeningPrograms;
