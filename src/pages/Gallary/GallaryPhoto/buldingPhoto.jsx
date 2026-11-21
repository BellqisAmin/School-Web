import React, { useState } from 'react'
import outSide1 from '../../../assets/img/Gallary/outside/outside 1.jpg'
import outSide2 from '../../../assets/img/Gallary/outside/outside 2.jpg'
import outSide3 from '../../../assets/img/Gallary/outside/outside 3.jpg'
import outSide4 from '../../../assets/img/Gallary/outside/outside 4.jpg'
import AllPhoto from '../allPhoto'
import { Link } from 'react-router-dom'

const BuldingPhoto = () => {

    return (
        <section className="w-full border-2 border-[#d5e4ff] bg-background-light rounded-2xl p-4 md:p-6 shadow-sm" dir="rtl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#002855] flex items-center justify-center text-white shrink-0 shadow-sm"></div>
                    <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">گالری ساختمان</h2>
                        <p className="text-xs md:text-sm text-slate-500 mt-0.5">تصاویر بیرونی و داخلی مکتب</p>
                    </div>
                </div>
                <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#002855] hover:bg-[#003875] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm'>
                    <Link to={'/AllPhoto'}>مشاهده همه تصاویر</Link> 
                </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={outSide1} alt="نمای ساختمان ۱" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={outSide2} alt="نمای ساختمان ۲" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={outSide3} alt="نمای ساختمان ۳" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 border border-slate-200/60">
                    <img src={outSide4} alt="نمای ساختمان ۴" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
            </div>

        </section>
    )
}

export default BuldingPhoto
