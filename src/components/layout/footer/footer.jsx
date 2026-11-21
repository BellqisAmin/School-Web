import React from 'react';

const Footer = () => {
  return (
    <footer dir="rtl" className="w-full bg-primary-dark text-white pt-10 pb-6 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* بخش اصلی */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/15">
          
          {/* ستون اول: لوگو و معرفی (در موبایل تمام عرض و راست‌چین) */}
          <div className="flex items-center gap-4 border-b border-white/10 pb-6 md:border-none md:pb-0">
            <figure className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-white/10 rounded-xl p-2 flex items-center justify-center">
              <img 
                src="1.png" 
                alt="لوگوی مکتب خصوصی امید فردا" 
                className="w-full h-full object-contain" 
              />
            </figure>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">مکتب خصوصی امید فردا</h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">دانش، اخلاق، آینده روشن</p>
            </div>
          </div>

          {/* در موبایل این دو بخش کنار هم (2 ستونه) قرار می‌گیرند تا ارتفاع فوتر زیاد نشود */}
          <div className="grid grid-cols-2 gap-6 md:col-span-1 lg:col-span-2 lg:grid-cols-2">
            
            {/* ستون دوم: لینک‌های مهم */}
            <div className="flex flex-col items-start lg:border-r lg:border-white/15 lg:pr-6 space-y-2.5">
              <span className="font-bold text-sm sm:text-base text-white mb-1">لینک‌های مهم</span>
              <a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-white transition">لینک‌های اصلی</a>
              <a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-white transition">درباره ما</a>
              <a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-white transition">تماس با ما</a>
            </div>

            {/* ستون سوم: اطلاعات تماس */}
            <div className="flex flex-col items-start lg:border-r lg:border-white/15 lg:pr-6 space-y-2.5">
              <span className="font-bold text-sm sm:text-base text-white mb-1">تماس با ما</span>
              <a dir="ltr" className="text-xs sm:text-sm text-gray-300 hover:text-white transition" href="tel:+93700123865">
                +93 700 123 865
              </a>
              <a className="text-xs sm:text-sm text-gray-300 hover:text-white transition break-all" href="mailto:info@omidfarda.af">
                info@omidfarda.af
              </a>
              <span className="text-xs sm:text-sm text-gray-300">کابل، افغانستان</span>
            </div>

          </div>

          {/* ستون چهارم: شبکه‌های اجتماعی */}
          <div className="flex flex-col items-start lg:border-r lg:border-white/15 lg:pr-6 pt-2 md:pt-0 border-t border-white/10 md:border-t-0">
            <p className="font-bold text-sm sm:text-base text-white mb-3">ما را دنبال کنید</p>
            <div className="flex gap-3 items-center">
              <a href="#" aria-label="جستجو" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                🔍
              </a>
              <a href="#" aria-label="ایده‌ها" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                💡
              </a>
              <a href="#" aria-label="برگزیده‌ها" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                ⭐
              </a>
            </div>
          </div>

        </div>

        {/* بخش کپی‌رایت */}
        <div className="pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>تمام حقوق مادی و معنوی این وب‌سایت محفوظ است.</p>
          <p>مکتب خصوصی امید فردا © {new Date().getFullYear()}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
