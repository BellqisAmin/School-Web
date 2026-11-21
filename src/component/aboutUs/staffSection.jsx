import React from 'react';
import { FaUsers } from "react-icons/fa6";


import staff1 from '../../assets/img/staff1.jpg';
import staff2 from '../../assets/img/staff2.webp';
import staff3 from '../../assets/img/staff3.jpg';
import staff4 from '../../assets/img/staff4.jpg';
import staff5 from '../../assets/img/staff5.jpg';
import staff6 from '../../assets/img/staff6.webp';

const StaffSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-8'>
      {/* عنوان بخش */}
      <div className='flex items-center gap-3 mb-6'>
        <FaUsers className='text-primary text-[26px]' />
        <h2 className='text-text-primary font-Estedad font-bold text-[20px] md:text-[24px]'>
          ۲.۶ معرفی مدیریت و کادر آموزشی
        </h2>
      </div>

      {/* ۶ کارت کادر آموزشی */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        
        {/* عضو ۱ */}
        <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
          <img src={staff1} alt="عبدالقیوم رحیمی" className='w-24 h-24 rounded-xl object-cover border border-border mb-3' />
          <h3 className='text-text-primary font-Estedad font-bold text-[15px] mb-1'>عبدالقیوم رحیمی</h3>
          <span className='text-primary-blue font-Vazirmatn-Bold text-[12px] mb-2'>معاون مدیر</span>
          <p className='text-text-secondary font-Vazirmatn text-[11px]'>لیسانس مدیریت آموزشی</p>
          <p className='text-text-secondary font-Vazirmatn text-[11px] mt-0.5'>سابقه: ۱۲ سال</p>
        </div>

        {/* عضو ۲ */}
        <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
          <img src={staff2} alt="عبدالرحمن صدیقی" className='w-24 h-24 rounded-xl object-cover border border-border mb-3' />
          <h3 className='text-text-primary font-Estedad font-bold text-[15px] mb-1'>عبدالرحمن صدیقی</h3>
          <span className='text-primary-blue font-Vazirmatn-Bold text-[12px] mb-2'>معلم کمپیوتر</span>
          <p className='text-text-secondary font-Vazirmatn text-[11px]'>لیسانس علوم کمپیوتر</p>
          <p className='text-text-secondary font-Vazirmatn text-[11px] mt-0.5'>سابقه: ۶ سال</p>
        </div>

        {/* عضو ۳ */}
        <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
          <img src={staff3} alt="حسین کریمی" className='w-24 h-24 rounded-xl object-cover border border-border mb-3' />
          <h3 className='text-text-primary font-Estedad font-bold text-[15px] mb-1'>حسین کریمی</h3>
          <span className='text-primary-blue font-Vazirmatn-Bold text-[12px] mb-2'>معلم فزیک</span>
          <p className='text-text-secondary font-Vazirmatn text-[11px]'>لیسانس فزیک</p>
          <p className='text-text-secondary font-Vazirmatn text-[11px] mt-0.5'>سابقه: ۹ سال</p>
        </div>

        {/* عضو ۴ */}
        <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
          <img src={staff4} alt="نرگس رضایی" className='w-24 h-24 rounded-xl object-cover border border-border mb-3' />
          <h3 className='text-text-primary font-Estedad font-bold text-[15px] mb-1'>نرگس رضایی</h3>
          <span className='text-primary-blue font-Vazirmatn-Bold text-[12px] mb-2'>معلم ریاضی</span>
          <p className='text-text-secondary font-Vazirmatn text-[11px]'>لیسانس ریاضی</p>
          <p className='text-text-secondary font-Vazirmatn text-[11px] mt-0.5'>سابقه: ۷ سال</p>
        </div>

        {/* عضو ۵ */}
        <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
          <img src={staff5} alt="سید احمد نوری" className='w-24 h-24 rounded-xl object-cover border border-border mb-3' />
          <h3 className='text-text-primary font-Estedad font-bold text-[15px] mb-1'>سید احمد نوری</h3>
          <span className='text-primary-blue font-Vazirmatn-Bold text-[12px] mb-2'>معلم مضامین اسلامی</span>
          <p className='text-text-secondary font-Vazirmatn text-[11px]'>لیسانس علوم دینی</p>
          <p className='text-text-secondary font-Vazirmatn text-[11px] mt-0.5'>سابقه: ۱۰ سال</p>
        </div>

        {/* عضو ۶ */}
        <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
          <img src={staff6} alt="عایشه محمدی" className='w-24 h-24 rounded-xl object-cover border border-border mb-3' />
          <h3 className='text-text-primary font-Estedad font-bold text-[15px] mb-1'>عایشه محمدی</h3>
          <span className='text-primary-blue font-Vazirmatn-Bold text-[12px] mb-2'>معلم زبان انگلیسی</span>
          <p className='text-text-secondary font-Vazirmatn text-[11px]'>لیسانس زبان و ادبیات انگلیسی</p>
          <p className='text-text-secondary font-Vazirmatn text-[11px] mt-0.5'>سابقه: ۸ سال</p>
        </div>

      </div>
    </section>
  );
};

export default StaffSection;
