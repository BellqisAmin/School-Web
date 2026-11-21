import React from 'react'
import LessonsAppAbout from '../../assets/img/LessonsApp/about.jpg'

const LessonAppAbout = () => {
  return (
    <div className='w-full grid grid-cols-1 mb-3 sm:grid-cols-2 p-3'>

            <div class="md:polygon max-w-160 mx-auto mb-3" dir="rtl">
                <div class="skewed-card relative p-6 md:p-8">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl md:text-2xl font-black text-blue-900 text-Neirizi font-Neirizi">
                            معرفی نظام آموزشی مکتب
                        </h2>
                        <div class="bg-blue-600 p-2.5 rounded-2xl text-white shadow-md shadow-blue-200">
                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.174L11.24 6.75a1.5 1.5 0 011.52 0l6.98 3.424a1.5 1.5 0 010 2.698l-6.98 3.424a1.5 1.5 0 01-1.52 0l-6.98-3.424a1.5 1.5 0 010-2.698z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 13.5v3.25a2.25 2.25 0 01-2.25 2.25H9.75A2.25 2.25 0 017.5 16.75V13.5M19.5 11.25v6" />
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm md:text-base leading-[1.8] mb-6 font-medium text-justify">
                        مکتب خصوصی امید فردا با بهره‌گیری از برنامه درسی ملی و روش‌های نوین آموزشی،
                        به پرورش استعدادها و تقویت‌ مهارت‌های علمی و اخلاقی شاگردان می‌پردازد.
                        در این مکتب، تدریس به‌صورت تعاملی، استفاده از منابع آموزشی معتبر،
                        و ارزیابی منظم در طول سال تحصیلی انجام می‌شود.
                    </p>
                    <div class="flex justify-start">
                        <a href="#" class="inline-flex items-center gap-2 bg-[#092552] hover:bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 shadow-md">
                            <span>بیشتر بدانید</span>
                            <span class="text-base font-bold">←</span>
                        </a>
                    </div>
                </div>
            </div>

            <figure class="polygon-container">
                <img class='md:polygon w-155 h-78 rounded-md mr-5 object-cover' src={LessonsAppAbout} alt="" />
            </figure>
        </div>
  )
}

export default LessonAppAbout
