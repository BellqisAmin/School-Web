import React from 'react'
import schoolVideo from '../../../assets/video/gallary/video.mp4'

const Video = () => {
    return (
        <section className="w-full border-2 border-[#d5e4ff] bg-background-light rounded-2xl p-4 md:p-6 shadow-sm" dir="rtl">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#002855] flex items-center justify-center text-white shrink-0 shadow-sm">
                       
                        <svg xmlns="http://w3.org" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">ویدیوها</h2>
                        <p className="text-xs md:text-sm text-slate-500 mt-0.5">ویدیوهای معرفی مکتب و گزارش فعالیت‌ها</p>
                    </div>
                </div>

                <a
                    href="#"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#002855] hover:bg-[#003875] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                >
                    <span>مشاهده همه ویدیوها</span>
                    <svg xmlns="http://w3.org" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-video bg-slate-900 border border-slate-200/60 shadow-sm">
                    <video src={schoolVideo} controls preload="metadata" className="w-full h-full object-cover" />
                </div>

                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-video bg-slate-900 border border-slate-200/60 shadow-sm">
                    <video src={schoolVideo} controls preload="metadata" className="w-full h-full object-cover" />
                </div>

                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-video bg-slate-900 border border-slate-200/60 shadow-sm">
                    <video src={schoolVideo} controls preload="metadata" className="w-full h-full object-cover" />
                </div>

                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-video bg-slate-900 border border-slate-200/60 shadow-sm">
                    <video src={schoolVideo} controls preload="metadata" className="w-full h-full object-cover" />
                </div>
            </div>

        </section>
    )
}

export default Video
