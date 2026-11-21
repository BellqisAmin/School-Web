import React from 'react';
import { FaPhone, FaEnvelope, FaClock, FaHeadset } from "react-icons/fa6";

const FaqContactBar = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 pb-12'>
      <div className='bg-background-card border border-border rounded-2xl shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-border'>
        
        {/* ستون ۱: آیا هنوز سوالی دارید؟ */}
        <div className='p-6 flex flex-col items-center text-center justify-center'>
          <h3 className='text-text-primary font-Estedad font-bold text-[18px] mb-1'>
            آیا هنوز سوالی دارید؟
          </h3>
          <p className='text-text-primary font-Vazirmatn text-[13px] mb-3'>
            با ما در تماس باشید!
          </p>
          <button className='bg-primary hover:bg-primary-blue text-text-white font-Vazirmatn-Bold text-[13px] px-6 py-2 rounded-full flex items-center gap-2 transition'>
            <FaPhone />
            <span>تماس با ما</span>
          </button>
        </div>

        {/* ستون ۲: ارسال پیام */}
        <div className='p-6 flex flex-col items-center text-center justify-center'>
          <FaEnvelope className='text-primary text-[32px] mb-2' />
          <h4 className='text-text-primary font-Estedad font-bold text-[16px] mb-1'>
            ارسال پیام
          </h4>
          <p className='text-text-primary font-Vazirmatn text-[12px]'>
            از طریق فرم تماس
          </p>
        </div>

        {/* ستون ۳: ساعات کاری */}
        <div className='p-6 flex flex-col items-center text-center justify-center'>
          <FaClock className='text-primary text-[32px] mb-2' />
          <h4 className='text-text-primary font-Estedad font-bold text-[16px] mb-1'>
            ساعات کاری
          </h4>
          <p className='text-text-primary font-Vazirmatn text-[12px] leading-5'>
            شنبه تا پنجشنبه <br />
            از ساعت ۸ صبح تا ۲ بعدازظهر
          </p>
        </div>

        {/* ستون ۴: پشتیبانی آنلاین */}
        <div className='p-6 flex flex-col items-center text-center justify-center'>
          <FaHeadset className='text-primary text-[32px] mb-2' />
          <h4 className='text-text-primary font-Estedad font-bold text-[16px] mb-1'>
            پشتیبانی آنلاین
          </h4>
          <p className='text-text-primary font-Vazirmatn text-[12px]'>
            از طریق چت زنده
          </p>
        </div>

      </div>
    </section>
  );
};

export default FaqContactBar;
