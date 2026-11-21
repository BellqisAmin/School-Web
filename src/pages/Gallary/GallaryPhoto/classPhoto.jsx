import React from 'react'
import class1 from '../../../assets/img/Gallary/class/class 1.jpg'
import class2 from '../../../assets/img/Gallary/class/class 2.gif'
import class3 from '../../../assets/img/Gallary/class/class 3.jpg'
import class4 from '../../../assets/img/Gallary/class/class 4.jpg'

const ClassPhoto = () => {
    return (
        <section className="w-full border-2 border-[#d5e4ff] bg-background-light rounded-2xl p-4 md:p-6 shadow-sm" dir="rtl">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#002855] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <svg xmlns="http://w3.org" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">گالری صنف ها</h2>
                        <p className="text-xs md:text-sm text-slate-500 mt-0.5">محیط آموزشی مدرن و مجهز</p>
                    </div>
                </div>
                <a href="AllPhoto" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#002855] hover:bg-[#003875] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm">
                    <span>مشاهده همه تصاویر</span>
                    
                </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={class1} alt="تصویر صنف ۱" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={class2} alt="تصویر صنف ۲" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={class3} alt="تصویر صنف ۳" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={class4} alt="تصویر صنف ۴" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
            </div>

        </section>
    )
}

export default ClassPhoto
