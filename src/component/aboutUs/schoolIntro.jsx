import React from 'react';
import { FaBuildingColumns, FaSchool, FaCalendarDays, FaLocationDot, FaGraduationCap, FaBookOpen } from "react-icons/fa6";
import outside from '../../assets/img/outside 4.jpg';

const SchoolIntro = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-10'>
      {/* عنوان بخش */}
      <div className='flex items-center gap-3 mb-6'>
        <FaBuildingColumns className='text-primary text-[24px]' />
        <h2 className='text-text-primary font-Estedad font-bold text-[20px] md:text-[24px]'>
          ۲.۱ معرفی کامل مکتب
        </h2>
      </div>

      {/* باکس محتوا */}
      <div className='bg-background border border-border rounded-2xl shadow-sm p-6 flex flex-col lg:flex-row justify-between gap-8'>
        
        {/* اطلاعات و تاریخچه */}
        <div className='w-full flex flex-col justify-between'>
          {/* جدول اطلاعات کلیدی */}
          <div className='flex flex-col gap-3 font-Vazirmatn text-[13px] md:text-[14px] mb-6'>
            <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4'>
              <span className='text-text-primary font-Vazirmatn-Bold flex items-center gap-2 min-w-[180px]'>
                <FaSchool className='text-primary-light' />
                نام رسمی مکتب:
              </span>
              <span className='text-text-secondary'>مکتب خصوصی امید فردا</span>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4'>
              <span className='text-text-primary font-Vazirmatn-Bold flex items-center gap-2 min-w-[180px]'>
                <FaCalendarDays className='text-primary-light' />
                سال تأسیس:
              </span>
              <span className='text-text-secondary'>۱۳۹۰ خورشیدی</span>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4'>
              <span className='text-text-primary font-Vazirmatn-Bold flex items-center gap-2 min-w-[180px]'>
                <FaLocationDot className='text-primary-light' />
                ولایت، شهر و آدرس:
              </span>
              <span className='text-text-secondary'>ولایت کابل، شهر کابل، ناحیه ۳، سرک گل سرخ، مقابل پارک صلح</span>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4'>
              <span className='text-text-primary font-Vazirmatn-Bold flex items-center gap-2 min-w-[180px]'>
                <FaGraduationCap className='text-primary-light' />
                نوع مکتب و دوره‌های آموزشی:
              </span>
              <span className='text-text-secondary'>خصوصی – دوره‌های مکتب (ابتدایی تا دوازدهم)</span>
            </div>
          </div>

          {/* تاریخچه */}
          <div className='border-t border-border pt-4'>
            <h3 className='text-text-primary font-Vazirmatn-Bold text-[14px] flex items-center gap-2 mb-2'>
              <FaBookOpen className='text-primary-light' />
              <span>تاریخچه و پیشرفت مکتب:</span>
            </h3>
            <p className='text-text-secondary font-Vazirmatn text-[13px] md:text-[14px] leading-7 text-justify'>
              مکتب خصوصی امید فردا در سال ۱۳۹۰ خورشیدی با هدف ارائه آموزش با کیفیت و پرورش استعدادهای درخشان تأسیس شد. این مکتب در طول سال‌ها با تلاش مستمر مدیریت، معلمان و حمایت والدین، توانسته است به یکی از مکتب‌های معتبر و محبوب در سطح ولایت کابل تبدیل شود.
            </p>
          </div>
        </div>

        {/* تصویر مکتب */}
        <div className='w-full lg:w-96 shrink-0'>
          <img 
            src={outside} 
            alt="ساختمان مکتب" 
            className='w-full h-64 lg:h-full object-cover rounded-xl border border-border' 
          />
        </div>

      </div>
    </section>
  );
};

export default SchoolIntro;
