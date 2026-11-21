import React from 'react'
import HeroBanner from '../../assets/img/home_hero.png'
const Hero = () => {
    return (
        <section className='w-full relative mt-30'>
            <img src={HeroBanner} alt="" className='w-full md:h-90 h-70 object-cover bg-amber-100' />
            <div className='absolute top-0 left-0 p-12 text-left'>
                <p className='text-2xl text-primary-dark md:text-4xl font-Vazirmatn-Bold text-center md:leading-12 space-x-0 text-shadow-[5px_5px_8px_#ffffff,-5px_-5px_8px_#ffffff]'>
                آینده روشن,<br /> با آموزش باکیفیت آغاز می شود.
                </p>
                <p className='text-center font-Vazirmatn-Bold mt-3 md:mt-6 text-[14px] md:text-[18px] text-shadow-[5px_5px_8px_#ffffff,-5px_-5px_8px_#ffffff]'>
                ما در مکتب خصوصی امید فردا متعهد به ارائه بهترین <br />آموزش و تربیت نسل آینده کشور هستیم.
                </p>
                <div className='w-full flex gap-4 md:gap-7 justify-center mt-5'>
                    <button className='text-[12px] md:text-[16px] md:w-43 w-30 bg-white text-text-primary md:h-11 h-9 rounded-full font-Vazirmatn-Bold border-2 border-primary-dark'>ثبت نام شاگردان</button>
                    <button className='text-[12px] md:text-[16px] md:w-43 w-30 bg-primary-dark text-text-white md:h-11 h-9 rounded-full font-Vazirmatn-Bold '>آشنایی با مکتب</button>
                </div>
            </div>
        </section>
    )
}

export default Hero