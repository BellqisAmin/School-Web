import React from 'react';
import { FaUserTie } from "react-icons/fa6";

import manager from '../../assets/img/manager.png';

const PrincipalMessage = () => {
  return (
    <div className='w-full bg-background-light rounded-2xl shadow-[0px_0px_10px_0px] shadow-gray-200 p-5 flex flex-col sm:flex-row items-center gap-6'>
      
      {/* بخش متن پیام */}
      <div className='w-full flex flex-col items-start'>
        
        {/* عنوان سرمه ای رنگ */}
        <div className='bg-primary text-white font-Estedad text-[14px] px-4 py-1.5 rounded-full flex items-center gap-2 mb-4'>
          <FaUserTie />
          <span>پیام مدیر مکتب</span>
        </div>

        {/* متن پیام */}
        <p className='text-text-primary font-Vazirmatn text-[13px] leading-6 text-justify mb-4'>
          ما در مکتب خصوصی امید فردا باور داریم که آموزش با کیفیت، کلید موفقیت و سعادت آینده فرزندان ماست. از حمایت والدین گرانقدر و تلاش بی‌وقفه همکاران عزیز سپاسگزاریم.
        </p>

        {/* نام و سمت مدیر */}
        <div>
          <h4 className='text-primary font-Estedad font-bold text-[15px]'>
            محمد قاسم احمدی
          </h4>
          <span className='text-gray-500 font-Vazirmatn text-[12px]'>
            مدیر مکتب خصوصی امید فردا
          </span>
        </div>

      </div>

      {/* تصویر مدیر */}
      <div className='w-40 sm:w-44 shrink-0'>
        <img 
          src={manager} 
          alt="محمد قاسم احمدی" 
          className='w-full h-48 object-cover rounded-xl' 
        />
      </div>

    </div>
  );
};

export default PrincipalMessage;
