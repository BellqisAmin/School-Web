import React from 'react'

import {
    FaArrowLeftLong,
    FaFlask,
    FaBookOpen,
    FaChalkboardUser,
    FaFutbol,
    FaHeartPulse,
    FaLaptop,
    FaHouseChimneyWindow,
    FaShieldHalved,
    FaTemperatureHalf
} from "react-icons/fa6";


import primaryImg from '../../assets/img/primaryImg.webp';
import about_school from '../../assets/img/about_school.jpg';
import news2 from '../../assets/img/news2.jpg';
import staff2 from '../../assets/img/staff2.webp';
import news1 from '../../assets/img/news1.jpg';
import news3 from '../../assets/img/news3.webp';
import staff4 from '../../assets/img/staff4.jpg';
import staff5 from '../../assets/img/staff5.jpg';
import highImg from '../../assets/img/highImg.jpg';

const FacilitieSchool = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                <div className='bg-background-light border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col items-center text-center pb-6'>
                    <img src={primaryImg} alt="لابراتوار علوم" className='w-full h-48 object-cover' />
                    <div className='w-16 h-16 -mt-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-text-white text-[26px] shadow-md'>
                        <FaFlask />
                    </div>
                    <div className='px-5 pt-3 flex flex-col items-center flex-1'>
                        <h3 className='text-text-primary font-Estedad font-bold text-[18px] mb-2'>
                            لابراتوار علوم
                        </h3>
                        <p className='text-text-primary font-Vazirmatn text-[13px] leading-6 mb-5'>
                            لابراتوار علوم ما با وسایل و تجهیزات مدرن، امکان آموزش عملی را فراهم کرده است.
                        </p>
                        <button className='mt-auto bg-primary hover:bg-primary-blue text-text-white font-Vazirmatn text-[13px] px-5 py-1.5 rounded-full flex items-center gap-2 transition'>
                            <span>بیشتر بدانید</span>
                            <FaArrowLeftLong />
                        </button>
                    </div>
                </div>

                {/* ردیف اول - کارت دوم (وسط): کتابخانه مکتب */}
                <div className='bg-background-light border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col items-center text-center pb-6'>
                    <img src={about_school} alt="کتابخانه مکتب" className='w-full h-48 object-cover' />
                    <div className='w-16 h-16 -mt-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-text-white text-[26px] shadow-md'>
                        <FaBookOpen />
                    </div>
                    <div className='px-5 pt-3 flex flex-col items-center flex-1'>
                        <h3 className='text-text-primary font-Estedad font-bold text-[18px] mb-2'>
                            کتابخانه مکتب
                        </h3>
                        <p className='text-text-primary font-Vazirmatn text-[13px] leading-6 mb-5'>
                            کتابخانه مکتب با منابع علمی متنوع زمینه تحقیق و مطالعه را برای شاگردان فراهم می‌سازد.
                        </p>
                        <button className='mt-auto bg-primary hover:bg-primary-blue text-text-white font-Vazirmatn text-[13px] px-5 py-1.5 rounded-full flex items-center gap-2 transition'>
                            <span>بیشتر بدانید</span>
                            <FaArrowLeftLong />
                        </button>
                    </div>
                </div>

                {/* ردیف اول - کارت سوم (چپ): صنف‌های درسی مجهز */}
                <div className='bg-background-light border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col items-center text-center pb-6'>
                    <img src={news2} alt="صنف‌های درسی مجهز" className='w-full h-48 object-cover' />
                    <div className='w-16 h-16 -mt-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-text-white text-[26px] shadow-md'>
                        <FaChalkboardUser />
                    </div>
                    <div className='px-5 pt-3 flex flex-col items-center flex-1'>
                        <h3 className='text-text-primary font-Estedad font-bold text-[18px] mb-2'>
                            صنف‌های درسی مجهز
                        </h3>
                        <p className='text-text-primary font-Vazirmatn text-[13px] leading-6 mb-5'>
                            صنف‌های درسی ما با تجهیزات عصری، تخته‌های هوشمند و محیط مناسب آموزشی تجهیز شده است.
                        </p>
                        <button className='mt-auto bg-primary hover:bg-primary-blue text-text-white font-Vazirmatn text-[13px] px-5 py-1.5 rounded-full flex items-center gap-2 transition'>
                            <span>بیشتر بدانید</span>
                            <FaArrowLeftLong />
                        </button>
                    </div>
                </div>

                {/* ردیف دوم - کارت اول (راست): امکانات ورزشی */}
                <div className='bg-background-light border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col items-center text-center pb-6'>
                    <img src={staff2} alt="امکانات ورزشی" className='w-full h-48 object-cover' />
                    <div className='w-16 h-16 -mt-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-text-white text-[26px] shadow-md'>
                        <FaFutbol />
                    </div>
                    <div className='px-5 pt-3 flex flex-col items-center flex-1'>
                        <h3 className='text-text-primary font-Estedad font-bold text-[18px] mb-2'>
                            امکانات ورزشی
                        </h3>
                        <p className='text-text-primary font-Vazirmatn text-[13px] leading-6 mb-5'>
                            ساحه ورزشی مناسب برای فعالیت‌های بدنی، ورزش و تفریح شاگردان مهیا می‌باشد.
                        </p>
                        <button className='mt-auto bg-primary hover:bg-primary-blue text-text-white font-Vazirmatn text-[13px] px-5 py-1.5 rounded-full flex items-center gap-2 transition'>
                            <span>بیشتر بدانید</span>
                            <FaArrowLeftLong />
                        </button>
                    </div>
                </div>

                {/* ردیف دوم - کارت دوم (وسط): آب آشامیدنی و امکانات صحی */}
                <div className='bg-background-light border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col items-center text-center pb-6'>
                    <img src={news1} alt="آب آشامیدنی و امکانات صحی" className='w-full h-48 object-cover' />
                    <div className='w-16 h-16 -mt-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-text-white text-[26px] shadow-md'>
                        <FaHeartPulse />
                    </div>
                    <div className='px-5 pt-3 flex flex-col items-center flex-1'>
                        <h3 className='text-text-primary font-Estedad font-bold text-[18px] mb-2'>
                            آب آشامیدنی و امکانات صحی
                        </h3>
                        <p className='text-text-primary font-Vazirmatn text-[13px] leading-6 mb-5'>
                            برای حفظ سلامت شاگردان، آب آشامیدنی سالم و خدمات صحی اولیه در مکتب فراهم است.
                        </p>
                        <button className='mt-auto bg-primary hover:bg-primary-blue text-text-white font-Vazirmatn text-[13px] px-5 py-1.5 rounded-full flex items-center gap-2 transition'>
                            <span>بیشتر بدانید</span>
                            <FaArrowLeftLong />
                        </button>
                    </div>
                </div>

                {/* ردیف دوم - کارت سوم (چپ): لابراتوار کمپیوتر */}
                <div className='bg-background-light border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col items-center text-center pb-6'>
                    <img src={news3} alt="لابراتوار کمپیوتر" className='w-full h-48 object-cover' />
                    <div className='w-16 h-16 -mt-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-text-white text-[26px] shadow-md'>
                        <FaLaptop />
                    </div>
                    <div className='px-5 pt-3 flex flex-col items-center flex-1'>
                        <h3 className='text-text-primary font-Estedad font-bold text-[18px] mb-2'>
                            لابراتوار کمپیوتر
                        </h3>
                        <p className='text-text-primary font-Vazirmatn text-[13px] leading-6 mb-5'>
                            آزمایشگاه کمپیوتر با سیستم‌های به روز، مهارت‌های دیجیتالی را در شاگردان تقویت می‌کند.
                        </p>
                        <button className='mt-auto bg-primary hover:bg-primary-blue text-text-white font-Vazirmatn text-[13px] px-5 py-1.5 rounded-full flex items-center gap-2 transition'>
                            <span>بیشتر بدانید</span>
                            <FaArrowLeftLong />
                        </button>
                    </div>
                </div>

                {/* ردیف سوم - کارت اول (راست): ساحه تفریح و بازی */}
                <div className='bg-background-light border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col items-center text-center pb-6'>
                    <img src={staff4} alt="ساحه تفریح و بازی" className='w-full h-48 object-cover' />
                    <div className='w-16 h-16 -mt-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-text-white text-[26px] shadow-md'>
                        <FaHouseChimneyWindow />
                    </div>
                    <div className='px-5 pt-3 flex flex-col items-center flex-1'>
                        <h3 className='text-text-primary font-Estedad font-bold text-[18px] mb-2'>
                            ساحه تفریح و بازی
                        </h3>
                        <p className='text-text-primary font-Vazirmatn text-[13px] leading-6 mb-5'>
                            ساحه تفریح و بازی، فضای شاد و سالم را برای شاگردان فراهم می‌کند.
                        </p>
                        <button className='mt-auto bg-primary hover:bg-primary-blue text-text-white font-Vazirmatn text-[13px] px-5 py-1.5 rounded-full flex items-center gap-2 transition'>
                            <span>بیشتر بدانید</span>
                            <FaArrowLeftLong />
                        </button>
                    </div>
                </div>
                {/* ردیف سوم - کارت دوم (راست): ساحه تفریح و بازی */}
                <div className='bg-background-light border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col items-center text-center pb-6'>
                    <img src={staff5} alt="ساحه تفریح و بازی" className='w-full h-48 object-cover' />
                    <div className='w-16 h-16 -mt-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-text-white text-[26px] shadow-md'>
                        <FaShieldHalved />
                    </div>
                    <div className='px-5 pt-3 flex flex-col items-center flex-1'>
                        <h3 className='text-text-primary font-Estedad font-bold text-[18px] mb-2'>
                            ساحه تفریح و بازی
                        </h3>
                        <p className='text-text-primary font-Vazirmatn text-[13px] leading-6 mb-5'>
                            ساحه تفریح و بازی، فضای شاد و سالم را برای شاگردان فراهم می‌کند.
                        </p>
                        <button className='mt-auto bg-primary hover:bg-primary-blue text-text-white font-Vazirmatn text-[13px] px-5 py-1.5 rounded-full flex items-center gap-2 transition'>
                            <span>بیشتر بدانید</span>
                            <FaArrowLeftLong />
                        </button>
                    </div>
                </div>
                {/* ردیف سوم - کارت سوم (راست): ساحه تفریح و بازی */}
                <div className='bg-background-light border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col items-center text-center pb-6'>
                    <img src={highImg} alt="ساحه تفریح و بازی" className='w-full h-48 object-cover' />
                    <div className='w-16 h-16 -mt-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-text-white text-[26px] shadow-md'>
                        <FaTemperatureHalf />
                    </div>
                    <div className='px-5 pt-3 flex flex-col items-center flex-1'>
                        <h3 className='text-text-primary font-Estedad font-bold text-[18px] mb-2'>
                            ساحه تفریح و بازی
                        </h3>
                        <p className='text-text-primary font-Vazirmatn text-[13px] leading-6 mb-5'>
                            ساحه تفریح و بازی، فضای شاد و سالم را برای شاگردان فراهم می‌کند.
                        </p>
                        <button className='mt-auto bg-primary hover:bg-primary-blue text-text-white font-Vazirmatn text-[13px] px-5 py-1.5 rounded-full flex items-center gap-2 transition'>
                            <span>بیشتر بدانید</span>
                            <FaArrowLeftLong />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FacilitieSchool