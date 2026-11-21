import React from 'react';
import { FaRegComments } from "react-icons/fa6";
import middleImg from '../../assets/img/middleImg.jpg';

const FaqHero = () => {
  return (
    <section className='relative w-full h-[260px] md:h-[320px] bg-primary-dark overflow-hidden justify-end flex items-center'>
      {/* تصویر دانش‌آموز در پس‌زمینه */}
      <img 
        src={middleImg} 
        alt="" 
        className='absolute inset-0 w-full h-full object-cover object-left' 
      />
      
      {/* گرادینت آبی روی سمت راست برای خوانایی متن */}
      <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent'></div>

      {/* محتوای متنی و آیکون */}
      <div className='relative z-10 max-w-7xl w-fit px-6 md:px-12'>
        <div className='max-w-md flex flex-col items-center text-center'>
          <FaRegComments className='text-text-white text-[52px] md:text-[64px] mb-2' />
          <h1 className='text-text-white font-Estedad font-bold text-[30px] md:text-[42px] mb-2'>
            پرسش‌های متداول
          </h1>
          <p className='text-border font-Vazirmatn text-[14px] md:text-[16px]'>
            پاسخ به سوالات رایج شما در یک نگاه
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
