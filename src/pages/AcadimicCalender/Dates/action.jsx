import React from 'react'

const Action = () => {
  return (
    <div dir="rtl" className="w-full sm:max-w-[420px] lg:w-[380px] xl:w-[400px] mx-auto lg:mx-0 shrink-0 bg-[#f4f7fb] rounded-2xl shadow-md border border-slate-200/80 overflow-hidden">
      
      <div className="bg-[#0c3b80] text-white px-4 sm:px-5 py-3.5 sm:py-4 flex items-center gap-2.5">
        <h2 className="text-base sm:text-lg font-bold tracking-tight">رویدادهای پیش‌رو</h2>
      </div>

      <div className="divide-y divide-slate-200/80 px-3 sm:px-4">
        
        <div className="py-3 sm:py-4 flex items-center gap-3 sm:gap-3.5 hover:bg-slate-100/70 transition-colors rounded-lg px-1">
          <div className="bg-[#dbeafe] text-[#1e3a8a] w-12 h-12 sm:w-15 sm:h-15 rounded-xl flex flex-col items-center justify-center shrink-0">
            <span className="text-base sm:text-xl font-extrabold leading-none">۱۵</span>
            <span className="text-[11px] sm:text-xs font-semibold mt-1">میزان</span>
          </div>
          <div className="flex flex-col text-right min-w-0">
            <h3 className="text-[#0c3b80] font-bold text-xs sm:text-[15px] leading-snug">آغاز امتحانات دوره‌ای اول</h3>
            <p className="text-slate-600 text-[11px] sm:text-xs mt-1 leading-relaxed">صنف‌های متوسطه و لیسه</p>
          </div>
        </div>

        <div className="py-3 sm:py-4 flex items-center gap-3 sm:gap-3.5 hover:bg-slate-100/70 transition-colors rounded-lg px-1">
          <div className="bg-[#dcfce7] text-[#15803d] w-12 h-12 sm:w-15 sm:h-15 rounded-xl flex flex-col items-center justify-center shrink-0">
            <span className="text-base sm:text-xl font-extrabold leading-none">۲۰</span>
            <span className="text-[11px] sm:text-xs font-semibold mt-1">میزان</span>
          </div>
          <div className="flex flex-col text-right min-w-0">
            <h3 className="text-[#0c3b80] font-bold text-xs sm:text-[15px] leading-snug">جلسه والدین و معلمان</h3>
            <p className="text-slate-600 text-[11px] sm:text-xs mt-1 leading-relaxed">بحث پیرامون پیشرفت شاگردان</p>
          </div>
        </div>

        <div className="py-3 sm:py-4 flex items-center gap-3 sm:gap-3.5 hover:bg-slate-100/70 transition-colors rounded-lg px-1">
          <div className="bg-[#ffedd5] text-[#c2410c] w-12 h-12 sm:w-15 sm:h-15 rounded-xl flex flex-col items-center justify-center shrink-0">
            <span className="text-base sm:text-xl font-extrabold leading-none">۲۵</span>
            <span className="text-[11px] sm:text-xs font-semibold mt-1">میزان</span>
          </div>
          <div className="flex flex-col text-right min-w-0">
            <h3 className="text-[#0c3b80] font-bold text-xs sm:text-[15px] leading-snug">برنامه هفته فرهنگی</h3>
            <p className="text-slate-600 text-[11px] sm:text-xs mt-1 leading-relaxed">نمایشگاه علمی و هنری</p>
          </div>
        </div>

        <div className="py-3 sm:py-4 flex items-center gap-3 sm:gap-3.5 hover:bg-slate-100/70 transition-colors rounded-lg px-1">
          <div className="bg-[#ede9fe] text-[#312e81] w-12 h-12 sm:w-15 sm:h-15 rounded-xl flex flex-col items-center justify-center shrink-0">
            <span className="text-base sm:text-xl font-extrabold leading-none">۳۰</span>
            <span className="text-[11px] sm:text-xs font-semibold mt-1">میزان</span>
          </div>
          <div className="flex flex-col text-right min-w-0">
            <h3 className="text-[#0c3b80] font-bold text-xs sm:text-[15px] leading-snug">ختم ترم اول سال تعلیمی</h3>
            <p className="text-slate-600 text-[11px] sm:text-xs mt-1 leading-relaxed">و آغاز رخصتی‌های زمستانی</p>
          </div>
        </div>

        <div className="py-3 sm:py-4 flex items-center gap-3 sm:gap-3.5 hover:bg-slate-100/70 transition-colors rounded-lg px-1">
          <div className="bg-[#dcfce7] text-[#15803d] w-12 h-12 sm:w-15 sm:h-15 rounded-xl flex flex-col items-center justify-center shrink-0">
            <span className="text-base sm:text-xl font-extrabold leading-none">۵</span>
            <span className="text-[11px] sm:text-xs font-semibold mt-1">عقرب</span>
          </div>
          <div className="flex flex-col text-right min-w-0">
            <h3 className="text-[#0c3b80] font-bold text-xs sm:text-[15px] leading-snug">امتحانات سالانه</h3>
            <p className="text-slate-600 text-[11px] sm:text-xs mt-1 leading-relaxed">صنف‌های دهم الی دوازدهم</p>
          </div>
        </div>

      </div>

      <div className="pt-2 pb-5 px-4 flex justify-center">
        <a href="#" className="w-full sm:w-auto justify-center bg-[#0c3b80] hover:bg-[#092d63] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-sm">
          <span>مشاهده همه رویدادها</span>
        </a>
      </div>

    </div>
  )
}

export default Action
