import React from 'react';
import { FaUserTie } from "react-icons/fa6";
import manager from '../../assets/img/manager.png';

const AboutPrincipalMessage = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-6'>
      <div className='bg-background-light border border-border rounded-2xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8'>
        
        {/* بخش متن پیام */}
        <div className='w-full'>
          <div className='flex items-center gap-3 mb-4'>
            <FaUserTie className='text-primary text-[24px]' />
            <h2 className='text-text-primary font-Estedad font-bold text-[20px] md:text-[24px]'>
              ۲.۵ پیام مدیر مکتب
            </h2>
          </div>

          <p className='text-text-primary font-Vazirmatn text-[13px] md:text-[14px] leading-8 text-justify'>
            با سلام و احترام؛ <br />
            من محمد یعقوب احمدی، مدیر مکتب خصوصی امید فردا، مفتخرم که در خدمت جامعه‌ی شریف و فرهنگ‌دوست کشورم، به‌ویژه دانش‌آموزان عزیز و والدین گرامی باشم. باور ما این است که هر شاگرد یک استعداد بی‌نظیر است و وظیفه ما این است که با فراهم‌سازی یک محیط آموزشی سالم، علمی و اخلاقی، زمینه رشد و شکوفایی این استعدادها را فراهم سازیم. <br />
            از اعتماد شما والدین و حمایت‌های همیشگی‌تان سپاس‌گزاری می‌کنیم و اطمینان می‌دهیم که مکتب همواره در مسیر کیفیت، تعهد و پیشرفت گام برمی‌دارد.
          </p>
        </div>

        {/* کارت عکس و نام مدیر */}
        <div className='w-60 sm:w-64 shrink-0 bg-background rounded-2xl border border-border overflow-hidden shadow-sm'>
          <img src={manager} alt="محمد یعقوب احمدی" className='w-full h-56 object-cover' />
          <div className='bg-primary text-center py-3 px-2'>
            <h3 className='text-text-white font-Estedad font-bold text-[15px]'>
              محمد یعقوب احمدی
            </h3>
            <p className='text-border font-Vazirmatn text-[11px] mt-0.5'>
              مدیر مکتب خصوصی امید فردا
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPrincipalMessage;
