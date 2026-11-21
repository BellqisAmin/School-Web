import React from 'react';
import {
    FaCalendarDays,
    FaUserPlus,
    FaSackDollar,
    FaGraduationCap,
    FaFileLines,
    FaLocationDot,
    FaPhone
} from "react-icons/fa6";
import staff2 from '../../assets/img/staff2.webp';

const FaqSidebar = ({ activeCategory, setActiveCategory }) => {
    return (
        <aside className='w-full flex flex-col gap-6'>

            {/* باکس دسته‌بندی‌ها */}
            <div className='bg-background border border-border rounded-2xl shadow-sm overflow-hidden'>
                {/* سرصفحه سرمه‌ای */}
                <div className='bg-primary text-text-white font-Estedad font-bold text-[18px] py-3.5 px-5 flex items-center justify-center gap-2.5'>
                    <FaCalendarDays />
                    <span>دسته‌بندی‌ها</span>
                </div>

                {/* دکمه‌های دسته‌بندی */}
                <div className='p-3 flex flex-col gap-2.5'>

                    <button
                        onClick={() => setActiveCategory('ثبت‌نام')}
                        className={`w-full py-2.5 px-4 rounded-xl border font-Vazirmatn-Bold text-[15px] flex items-center justify-between transition ${activeCategory === 'ثبت‌نام'
                                ? 'bg-primary-light text-text-white border-primary-light shadow-sm'
                                : 'bg-background-light text-text-primary border-border hover:bg-background-card'
                            }`}
                    >
                        <span className='w-6'></span>
                        <span>ثبت‌نام</span>
                        <FaUserPlus className='text-[18px]' />
                    </button>

                    <button
                        onClick={() => setActiveCategory('فیس')}
                        className={`w-full py-2.5 px-4 rounded-xl border font-Vazirmatn-Bold text-[15px] flex items-center justify-between transition ${activeCategory === 'فیس'
                                ? 'bg-primary-light text-text-white border-primary-light shadow-sm'
                                : 'bg-background-light text-text-primary border-border hover:bg-background-card'
                            }`}
                    >
                        <span className='w-6'></span>
                        <span>فیس</span>
                        <FaSackDollar className='text-[18px]' />
                    </button>

                    <button
                        onClick={() => setActiveCategory('آموزش')}
                        className={`w-full py-2.5 px-4 rounded-xl border font-Vazirmatn-Bold text-[15px] flex items-center justify-between transition ${activeCategory === 'آموزش'
                                ? 'bg-primary-light text-text-white border-primary-light shadow-sm'
                                : 'bg-background-light text-text-primary border-border hover:bg-background-card'
                            }`}
                    >
                        <span className='w-6'></span>
                        <span>آموزش</span>
                        <FaGraduationCap className='text-[18px]' />
                    </button>

                    <button
                        onClick={() => setActiveCategory('امتحانات')}
                        className={`w-full py-2.5 px-4 rounded-xl border font-Vazirmatn-Bold text-[15px] flex items-center justify-between transition ${activeCategory === 'امتحانات'
                                ? 'bg-primary-light text-text-white border-primary-light shadow-sm'
                                : 'bg-background-light text-text-primary border-border hover:bg-background-card'
                            }`}
                    >
                        <span className='w-6'></span>
                        <span>امتحانات</span>
                        <FaFileLines className='text-[18px]' />
                    </button>

                    <button
                        onClick={() => setActiveCategory('آدرس')}
                        className={`w-full py-2.5 px-4 rounded-xl border font-Vazirmatn-Bold text-[15px] flex items-center justify-between transition ${activeCategory === 'آدرس'
                                ? 'bg-primary-light text-text-white border-primary-light shadow-sm'
                                : 'bg-background-light text-text-primary border-border hover:bg-background-card'
                            }`}
                    >
                        <span className='w-6'></span>
                        <span>آدرس</span>
                        <FaLocationDot className='text-[18px]' />
                    </button>

                    <button
                        onClick={() => setActiveCategory('ارتباطات')}
                        className={`w-full py-2.5 px-4 rounded-xl border font-Vazirmatn-Bold text-[15px] flex items-center justify-between transition ${activeCategory === 'ارتباطات'
                                ? 'bg-primary-light text-text-white border-primary-light shadow-sm'
                                : 'bg-background-light text-text-primary border-border hover:bg-background-card'
                            }`}
                    >
                        <span className='w-6'></span>
                        <span>ارتباطات</span>
                        <FaPhone className='text-[18px]' />
                    </button>

                </div>
            </div>

            {/* باکس پایین: پاسخ سوال خود را پیدا نکردید؟ */}
            <div className='bg-background-card border border-border rounded-2xl p-5 flex flex-col items-center text-center shadow-sm'>
                <img
                    src={staff2}
                    alt="سوال"
                    className='w-32 h-32 object-contain mb-3'
                />
                <h3 className='text-text-primary font-Estedad font-bold text-[16px] mb-1.5'>
                    پاسخ سوال خود را پیدا نکردید؟
                </h3>
                <p className='text-text-primary font-Vazirmatn text-[12px] leading-5 mb-4'>
                    با ما تماس بگیرید یا از طریق فرم تماس پیام بفرستید.
                </p>
                <button className='w-full bg-gold hover:opacity-90 text-text-primary font-Vazirmatn-Bold text-[14px] py-2 px-4 rounded-full flex items-center justify-center gap-2 shadow-sm transition'>
                    <FaPhone />
                    <span>تماس با ما</span>
                </button>
            </div>

        </aside>
    );
};

export default FaqSidebar;
