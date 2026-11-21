import React from 'react';
import { FaEye, FaBullseye, FaStar, FaCircleCheck } from "react-icons/fa6";

const VisionMissionValues = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        
        {/* کارت ۲.۲: دیدگاه */}
        <div className='bg-background-light border border-border rounded-2xl p-6 shadow-sm'>
          <div className='flex items-center gap-3 mb-4'>
            <FaEye className='text-primary text-[24px]' />
            <h3 className='text-text-primary font-Estedad font-bold text-[18px] md:text-[20px]'>
              ۲.۲ دیدگاه (Vision)
            </h3>
          </div>
          <p className='text-text-secondary font-Vazirmatn text-[13px] md:text-[14px] leading-7 text-justify'>
            تلاش برای ایجاد یک محیط آموزشی معیاری که زمینه رشد علمی، اخلاقی و فکری شاگردان را فراهم سازد و در آینده به یکی از مکتب‌های پیشرو و الگوی آموزشی در کشور تبدیل شود.
          </p>
        </div>

        {/* کارت ۲.۳: مأموریت */}
        <div className='bg-background-light border border-border rounded-2xl p-6 shadow-sm'>
          <div className='flex items-center gap-3 mb-4'>
            <FaBullseye className='text-primary text-[24px]' />
            <h3 className='text-text-primary font-Estedad font-bold text-[18px] md:text-[20px]'>
              ۲.۳ مأموریت (Mission)
            </h3>
          </div>
          <p className='text-text-secondary font-Vazirmatn text-[13px] md:text-[14px] leading-7 text-justify'>
            ما متعهد هستیم تا با ارائه تدریس مؤثر، استفاده از معلمان مسلکی و با تجربه، ارزیابی منظم پیشرفت شاگردان و همکاری مستمر با خانواده‌ها، زمینه رشد علمی، اخلاقی و اجتماعی شاگردان را فراهم سازیم.
          </p>
        </div>

        {/* کارت ۲.۴: ارزش‌های اساسی مکتب */}
        <div className='bg-background-light border border-border rounded-2xl p-6 shadow-sm md:col-span-2 lg:col-span-1'>
          <div className='flex items-center gap-3 mb-4'>
            <FaStar className='text-primary text-[24px]' />
            <h3 className='text-text-primary font-Estedad font-bold text-[18px] md:text-[20px]'>
              ۲.۴ ارزش‌های اساسی مکتب
            </h3>
          </div>
          <ul className='flex flex-col gap-3 font-Vazirmatn text-[13px] md:text-[14px] text-text-secondary'>
            <li className='flex items-center gap-2.5'>
              <FaCircleCheck className='text-primary shrink-0' />
              <span>احترام متقابل</span>
            </li>
            <li className='flex items-center gap-2.5'>
              <FaCircleCheck className='text-primary shrink-0' />
              <span>صداقت و مسئولیت‌پذیری</span>
            </li>
            <li className='flex items-center gap-2.5'>
              <FaCircleCheck className='text-primary shrink-0' />
              <span>نظم و انضباط</span>
            </li>
            <li className='flex items-center gap-2.5'>
              <FaCircleCheck className='text-primary shrink-0' />
              <span>تلاش و پیشرفت علمی</span>
            </li>
            <li className='flex items-center gap-2.5'>
              <FaCircleCheck className='text-primary shrink-0' />
              <span>رعایت اصول اخلاقی و حفظ کرامت شاگردان</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default VisionMissionValues;
