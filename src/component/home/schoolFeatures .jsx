import React from 'react';
import { FaBookOpen, FaLaptop, FaFlask, FaFutbol } from "react-icons/fa6";

const SchoolFeatures = () => {
  return (
    <div className='w-full bg-background-light rounded-2xl shadow-[0px_0px_10px_0px] shadow-gray-200 p-5 flex flex-col justify-between'>
      
      {/* عنوان سرمه ای رنگ */}
      <div className='bg-primary text-white font-Estedad text-[14px] px-5 py-1.5 rounded-full w-fit mb-5'>
        امکانات و ویژگی‌ها
      </div>

      {/* چهار کارت امکانات (در موبایل ۲ ستون و در تبلت و دسکتاپ ۴ ستون) */}
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
        
        {/* کارت ۱ */}
        <div className='bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm'>
          <FaFutbol className='text-primary text-[32px] mb-3' />
          <span className='text-text-primary font-Vazirmatn font-bold text-[13px]'>
            امکانات ورزشی
          </span>
        </div>

        {/* کارت ۲ */}
        <div className='bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm'>
          <FaFlask className='text-primary text-[32px] mb-3' />
          <span className='text-text-primary font-Vazirmatn font-bold text-[13px]'>
            لابراتوار علوم
          </span>
        </div>

        {/* کارت ۳ */}
        <div className='bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm'>
          <FaLaptop className='text-primary text-[32px] mb-3' />
          <span className='text-text-primary font-Vazirmatn font-bold text-[13px]'>
            لابراتوار کمپیوتر
          </span>
        </div>

        {/* کارت ۴ */}
        <div className='bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm'>
          <FaBookOpen className='text-primary text-[32px] mb-3' />
          <span className='text-text-primary font-Vazirmatn font-bold text-[13px]'>
            کتابخانه مجهز
          </span>
        </div>

      </div>

    </div>
  );
};

export default SchoolFeatures;
