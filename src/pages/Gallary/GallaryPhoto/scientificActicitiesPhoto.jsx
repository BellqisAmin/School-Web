import React from 'react'
import activetice1 from '../../../assets/img/Gallary/activetice/activetice 1.jpg'
import activetice2 from '../../../assets/img/Gallary/activetice/activetice 2.jpg'
import activetice3 from '../../../assets/img/Gallary/activetice/activetice 3.webp'
import activetice4 from '../../../assets/img/Gallary/activetice/activetice 4.jpg'

const ScientificActicitiesPhoto = () => {
    return (
        <section className="w-full border-2 border-[#d5e4ff] bg-background-light rounded-2xl p-4 md:p-6 shadow-sm" dir="rtl">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#002855] flex items-center justify-center text-white shrink-0 shadow-sm">

                        <svg xmlns="http://w3.org" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">فعالیت‌های علمی و فرهنگی</h2>
                        <p className="text-xs md:text-sm text-slate-500 mt-0.5">نمایشگاه‌ها، مسابقات و برنامه‌های آموزشی</p>
                    </div>
                </div>

                <a
                    href="#"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#002855] hover:bg-[#003875] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                >
                    <span>مشاهده همه تصاویر</span>
                    <svg xmlns="http://w3.org" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={activetice1} alt="فعالیت علمی و فرهنگی ۱" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={activetice2} alt="فعالیت علمی و فرهنگی ۲" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={activetice3} alt="فعالیت علمی و فرهنگی ۳" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={activetice4} alt="فعالیت علمی و فرهنگی ۴" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
            </div>

        </section>
    )
}

export default ScientificActicitiesPhoto
