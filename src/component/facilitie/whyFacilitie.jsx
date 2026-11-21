import React from 'react'

import { FaTrophy, FaShieldHalved, FaGraduationCap } from "react-icons/fa6";

const WhyFacilitie = () => {
    return (
        <div className='w-full h-full bg-background-light border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between'>

            {/* عنوان با خط در طرفین */}
            <div className='flex items-center justify-center gap-3 mb-6'>
                <span className='w-10 sm:w-16 h-0.5 bg-primary'></span>
                <h2 className='text-text-primary font-Estedad font-bold text-[18px] sm:text-[21px]'>
                    چرا امکانات مکتب ما؟
                </h2>
                <span className='w-10 sm:w-16 h-0.5 bg-primary'></span>
            </div>

            {/* سه ویژگی */}
            <div className='grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-border'>

                <div className='py-3 sm:py-0 sm:px-3 flex flex-col items-center text-center'>
                    <FaTrophy className='text-primary text-[30px] mb-2' />
                    <p className='text-text-primary font-Vazirmatn-Bold text-[12px] sm:text-[13px] leading-5'>
                        فضای مناسب برای رشد علمی و اجتماعی
                    </p>
                </div>

                <div className='py-3 sm:py-0 sm:px-3 flex flex-col items-center text-center'>
                    <FaShieldHalved className='text-primary text-[30px] mb-2' />
                    <p className='text-text-primary font-Vazirmatn-Bold text-[12px] sm:text-[13px] leading-5'>
                        امنیت به‌بالا و نظارت موثر مؤثر
                    </p>
                </div>

                <div className='py-3 sm:py-0 sm:px-3 flex flex-col items-center text-center'>
                    <FaGraduationCap className='text-primary text-[30px] mb-2' />
                    <p className='text-text-primary font-Vazirmatn-Bold text-[12px] sm:text-[13px] leading-5'>
                        محیط آموزشی مدرن و استاندارد
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WhyFacilitie