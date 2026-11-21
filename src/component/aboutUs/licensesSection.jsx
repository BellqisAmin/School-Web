import React from 'react';
import { FaFileContract } from "react-icons/fa6";
import outside from '../../assets/img/outside 4.jpg';
import highImg from '../../assets/img/highImg.jpg';

const LicensesSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-8 mb-8'>
      <div className='bg-background-light border border-border rounded-2xl shadow-sm p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8'>
        
        {/* بخش توضیحات و جدول مشخصات جواز */}
        <div className='w-full'>
          <div className='flex items-center gap-3 mb-4'>
            <FaFileContract className='text-primary text-[24px]' />
            <h2 className='text-text-primary font-Estedad font-bold text-[20px] md:text-[24px]'>
              ۲.۷ جواز و اعتبارنامه‌ها
            </h2>
          </div>

          <div className='flex flex-col md:flex-row items-start justify-between gap-6'>
            {/* متن توضیحی */}
            <p className='text-text-secondary font-Vazirmatn text-[13px] md:text-[14px] leading-7 text-justify md:w-1/2'>
              مکتب خصوصی امید فردا دارای جواز فعالیت از سوی ریاست معارف ولایت کابل بوده و تمامی فعالیت‌های آن مطابق به مقررات وزارت معارف انجام می‌شود. <br />
              این مکتب همچنان از طرف مراجع ذی‌صلاح به عنوان یک نهاد آموزشی معتبر شناخته شده است.
            </p>

            {/* باکس مشخصات جواز */}
            <div className='w-full md:w-1/2 bg-background-card border border-border rounded-xl p-4 font-Vazirmatn text-[13px] flex flex-col gap-2.5'>
              <div className='flex justify-between items-center border-b border-border pb-2'>
                <span className='text-text-primary font-Vazirmatn-Bold'>شماره جواز فعالیت:</span>
                <span className='text-text-secondary' dir="ltr">MoE-XX-0123</span>
              </div>
              <div className='flex justify-between items-center border-b border-border pb-2'>
                <span className='text-text-primary font-Vazirmatn-Bold'>تاریخ صدور:</span>
                <span className='text-text-secondary'>۱۳۹۰/۰۵/۱۵</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-text-primary font-Vazirmatn-Bold'>مرجع صادرکننده:</span>
                <span className='text-text-secondary'>ریاست معارف ولایت کابل</span>
              </div>
            </div>
          </div>
        </div>

        {/* دو تصویر جواز و اعتبارنامه */}
        <div className='flex items-center justify-center gap-4 shrink-0'>
          <img src={outside} alt="جواز فعالیت مکتب" className='w-32 sm:w-36 h-44 object-cover rounded-xl border border-border bg-white p-1 shadow-sm' />
          <img src={highImg} alt="اعتبارنامه وزارت معارف" className='w-32 sm:w-36 h-44 object-cover rounded-xl border border-border bg-white p-1 shadow-sm' />
        </div>

      </div>
    </section>
  );
};

export default LicensesSection;
