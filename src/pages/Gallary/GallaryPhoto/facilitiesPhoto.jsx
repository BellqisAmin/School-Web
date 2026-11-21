import React from 'react'
import facilites1 from '../../../assets/img/Gallary/facilites/facilites 1.png'
import facilites2 from '../../../assets/img/Gallary/facilites/facilites 2.jpg'
import facilites3 from '../../../assets/img/Gallary/facilites/facilites 3.jpg'
import facilites4 from '../../../assets/img/Gallary/facilites/facilites 4.jpg'

const FacilitiesPhoto = () => {
    return (
        <section className="w-full border-2 border-[#d5e4ff] bg-background-light rounded-2xl p-4 md:p-6 shadow-sm" dir="rtl">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#002855] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <svg xmlns="http://w3.org" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">گالری امکانات</h2>
                        <p className="text-xs md:text-sm text-slate-500 mt-0.5">کتابخانه، لابراتوار، ساحه بازی و سایر امکانات</p>
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
                    <img src={facilites1} alt="امکانات مکتب ۱" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={facilites2} alt="امکانات مکتب ۲" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={facilites3} alt="امکانات مکتب ۳" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={facilites4} alt="امکانات مکتب ۴" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
            </div>

        </section>
    )
}

export default FacilitiesPhoto
