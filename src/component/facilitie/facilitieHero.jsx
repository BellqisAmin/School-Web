import React from 'react'
import { FaSchool } from 'react-icons/fa'
import outside from '../../assets/img/outside 4.jpg'

const FacilitieHero = () => {
    return (
        <section className='relative w-full h-[280px] md:h-[340px] bg-primary-dark overflow-hidden flex items-center'>
            {/* تصویر پس‌زمینه */}
            <img src={outside} alt="امکانات مکتب خصوصی امید فردا" className='absolute w-full h-full object-cover object-left ' />
            {/* لایه گرادینت آبی روی سمت راست برای خوانایی متن */}
            <div className='absolute inset-0 to-transparent'></div>

            {/* محتوای متنی و آیکون */}
            <div className='relative z-10 max-w-7xl flex justify-end w-full px-6 md:px-12 '>
                <div className='max-w-md flex flex-col items-center text-center'>
                    <FaSchool className='text-text-white text-[48px] md:text-[56px] mb-3' />
                    <h1 className='text-text-white font-Estedad font-bold text-[32px] md:text-[42px] mb-2'>
                        امکانات مکتب
                    </h1>
                    <p className='text-border font-Vazirmatn text-[14px] md:text-[16px]'>
                        محیط مجهز و امکانات مدرن برای آینده‌ای روشن
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FacilitieHero