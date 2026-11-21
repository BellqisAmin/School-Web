import React from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import outside from '../../assets/img/outside 4.jpg';

const AboutHero = () => {
    return (
        <section className='relative w-full h-[280px] md:h-[340px] bg-primary-dark overflow-hidden flex items-center px-10'>
            {/* تصویر پس‌زمینه */}
            <img src={outside} alt="ساختمان مکتب خصوصی امید فردا" className='absolute  w-full h-full object-cover object-left opacity-40' />
            {/* گرادینت آبی روی تصویر برای خوانایی متن */}
            <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/200 to-transparent'></div>

            {/* محتوای متنی */}
            <div className='relative z-10 max-w-7xl mx-auto w-full text-end px-6  '>
                
                <div className='flex justify-end items-center gap-2 text-border font-Vazirmatn text-[12px] md:text-[13px] mb-3'>
                    <span>خانه</span>
                    <FaChevronLeft className='text-[10px]' />
                    <span className='text-text-white'>درباره مکتب</span>
                </div>
                    <h1 className='text-text-white font-Estedad font-bold text-[28px] md:text-[38px] mb-2'>
                        درباره مکتب
                    </h1>
                    <p className='text-border font-Vazirmatn text-[14px] md:text-[16px]'>
                        با افتخار به آینده‌ی روشن فرزندان شما می‌اندیشیم.
                    </p>
            </div>
        </section>
    );
};

export default AboutHero;
