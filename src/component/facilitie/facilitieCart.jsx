import React from 'react'

import { FaArrowLeftLong } from "react-icons/fa6";
import home_hero from '../../assets/img/home_hero.png';

const FacilitieCart = () => {
    return (
        <div className='relative w-full h-full bg-primary rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row items-center justify-between min-h-[180px]'>

            {/* بخش متن و دکمه طلایی (سمت راست) */}
            <div className='relative z-10 p-6 flex flex-col items-start'>
                <h3 className='text-text-white font-Estedad font-bold text-[18px] md:text-[21px] leading-7 mb-4'>
                    با امکانات برتر، <br /> آینده‌ای روشن بسازید!
                </h3>
                <button className='bg-gold hover:opacity-90 text-text-primary font-Vazirmatn-Bold text-[13px] px-5 py-2 rounded-full flex items-center gap-2 shadow-sm transition'>
                    <span>ثبت‌نام کنید</span>
                    <FaArrowLeftLong />
                </button>
            </div>

            {/* تصویر دانش‌آموزان (سمت چپ) */}
            <div className='w-full sm:w-1/2 h-44 sm:h-full'>
                <img
                    src={home_hero}
                    alt="دانش‌آموزان مکتب"
                    className='w-full h-full object-cover'
                />
            </div>

        </div>
    )
}

export default FacilitieCart