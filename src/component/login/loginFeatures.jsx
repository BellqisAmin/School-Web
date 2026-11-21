import React from 'react';
import {
    FaChartLine,
    FaClipboardList,
    FaCommentDots,
    FaUser,
    FaBell,
    FaCalendarDays
} from "react-icons/fa6";
import home_hero from '../../assets/img/home_hero.png';

const LoginFeatures = () => {
    return (
        <div className='w-full flex flex-col justify-between'>

            {/* بخش بالا: عکس پس‌زمینه با ارتفاع مشخص و متن قرار گرفته روی آن */}
            <div className='relative w-full h-[300px] sm:h-[340px] md:h-[360px] rounded-3xl overflow-hidden shadow-sm border border-border'>
                
                {/* تصویر با عرض و ارتفاع کامل */}
                <img
                    src={home_hero}
                    alt="دانش‌آموزان مکتب امید فردا"
                    className='w-full h-full object-cover object-left'
                />

                {/* لایه محو ملایم در بالا و راست تا متن کاملاً خوانا باشد */}
                <div className='absolute inset-0 bg-gradient-to-b from-white/95 via-white/40 to-transparent'></div>

                {/* متن خوش‌آمدگویی که دقیقاً روی عکس قرار گرفته است */}
                <div className='absolute top-5 right-5 left-5 z-10 text-center sm:text-right'>
                    <h2 className='text-text-primary font-Estedad font-bold text-[22px] sm:text-[28px] md:text-[32px] mb-1.5'>
                        به پنل شاگردان و والدین خوش آمدید !
                    </h2>
                    <p className='text-text-primary font-Vazirmatn text-[13px] md:text-[15px]'>
                        با ورود به حساب کاربری خود، به امکانات آموزشی دسترسی پیدا کنید.
                    </p>
                </div>

            </div>

            {/* باکس سفید امکانات پنل کاربری (کمی روی لبه پایین عکس آمده تا دقیقاً مثل طرح شود) */}
            <div className='relative z-20 mt-10 mx-2 sm:mx-4 bg-background border border-border rounded-3xl shadow-md p-5 pt-8'>

                {/* برچسب سرمه‌ای بالای باکس */}
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-text-white font-Estedad font-bold text-[15px] md:text-[16px] px-7 py-1.5 rounded-full shadow-sm whitespace-nowrap'>
                    امکانات پنل کاربری
                </div>

                {/* شبکه ۶ کارت امکانات */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* کارت ۱ */}
                    <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
                        <FaChartLine className='text-primary text-[30px] mb-2' />
                        <h3 className='text-text-primary font-Estedad font-bold text-[14px] mb-1'>نتایج و کارنامه</h3>
                        <p className='text-text-secondary font-Vazirmatn text-[11px]'>مشاهده نتایج امتحانات</p>
                    </div>

                    {/* کارت ۲ */}
                    <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
                        <FaClipboardList className='text-primary text-[30px] mb-2' />
                        <h3 className='text-text-primary font-Estedad font-bold text-[14px] mb-1'>تکالیف و برنامه درسی</h3>
                        <p className='text-text-secondary font-Vazirmatn text-[11px]'>مشاهده تکالیف و برنامه‌ها</p>
                    </div>

                    {/* کارت ۳ */}
                    <div className='relative bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
                        <div className='relative mb-2'>
                            <FaCommentDots className='text-primary text-[30px]' />
                            <span className='absolute -top-2 -left-2 w-5 h-5 rounded-full bg-danger text-text-white font-Vazirmatn-Bold text-[11px] flex items-center justify-center'>
                                ۳
                            </span>
                        </div>
                        <h3 className='text-text-primary font-Estedad font-bold text-[14px] mb-1'>پیام‌های شما</h3>
                        <p className='text-text-secondary font-Vazirmatn text-[11px]'>مشاهده پیام‌های دریافتی</p>
                    </div>

                    {/* کارت ۴ */}
                    <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
                        <FaUser className='text-primary text-[30px] mb-2' />
                        <h3 className='text-text-primary font-Estedad font-bold text-[14px] mb-1'>مشخصات آموزشی</h3>
                        <p className='text-text-secondary font-Vazirmatn text-[11px]'>مشاهده مشخصات شاگرد</p>
                    </div>

                    {/* کارت ۵ */}
                    <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
                        <FaBell className='text-primary text-[30px] mb-2' />
                        <h3 className='text-text-primary font-Estedad font-bold text-[14px] mb-1'>اطلاعیه‌های اختصاصی</h3>
                        <p className='text-text-secondary font-Vazirmatn text-[11px]'>دریافت اطلاعیه‌های مهم</p>
                    </div>

                    {/* کارت ۶ */}
                    <div className='bg-background-light border border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm'>
                        <FaCalendarDays className='text-primary text-[30px] mb-2' />
                        <h3 className='text-text-primary font-Estedad font-bold text-[14px] mb-1'>معلومات غیابت‌ها</h3>
                        <p className='text-text-secondary font-Vazirmatn text-[11px]'>مشاهده وضعیت حضور</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default LoginFeatures;
