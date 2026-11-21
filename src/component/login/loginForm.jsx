import React, { useState } from 'react';
import { 
  FaUser, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaRightToBracket, 
  FaTelegram, 
  FaGoogle, 
  FaGraduationCap, 
  FaCircleCheck 
} from "react-icons/fa6";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='w-full bg-background rounded-3xl shadow-lg border border-border p-5 md:p-7 relative mt-10 lg:mt-0'>
      
      {/* نشان سپر آبی بالای کارت */}
      <div className='w-20 h-20 mx-auto -mt-16 mb-3 bg-primary-blue border-4 border-background rounded-2xl shadow-md flex flex-col items-center justify-center text-text-white'>
        <FaGraduationCap className='text-[22px]' />
        <FaLock className='text-[16px] -mt-1' />
      </div>

      {/* بنر سرمه‌ای عنوان فرم */}
      <div className='bg-primary text-text-white rounded-2xl py-5 px-4 text-center mb-6 shadow-sm'>
        <h2 className='font-Estedad font-bold text-[20px] md:text-[24px] mb-1'>
          ورود به پنل شاگردان و والدین
        </h2>
        <p className='font-Vazirmatn text-[13px] text-border'>
          لطفاً اطلاعات کاربری خود را وارد کنید
        </p>
      </div>

      {/* فرم ورود */}
      <form className='flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>
        
        {/* فیلد نام کاربری */}
        <div className='relative flex items-center'>
          <span className='absolute right-4 text-primary text-[16px]'>
            <FaUser />
          </span>
          <input 
            type="text" 
            placeholder="نام کاربری (شماره شاگرد یا ایمیل)" 
            className='w-full bg-background-light border border-border rounded-xl py-3 pr-11 pl-4 font-Vazirmatn text-[13px] md:text-[14px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary-light'
          />
        </div>

        {/* فیلد رمز عبور */}
        <div className='relative flex items-center'>
          <span className='absolute right-4 text-primary text-[16px]'>
            <FaLock />
          </span>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="رمز عبور" 
            className='w-full bg-background-light border border-border rounded-xl py-3 pr-11 pl-11 font-Vazirmatn text-[13px] md:text-[14px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary-light'
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className='absolute left-4 text-text-secondary hover:text-primary text-[16px]'
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        {/* مرا به خاطر بسپار و فراموشی رمز */}
        <div className='flex items-center justify-between font-Vazirmatn text-[12px] md:text-[13px] px-1'>
          <label className='flex items-center gap-2 text-text-primary cursor-pointer'>
            <input type="checkbox" defaultChecked className='w-4 h-4 accent-primary rounded' />
            <span>مرا به خاطر بسپار</span>
          </label>
          <a href="#" className='text-primary-blue hover:underline'>
            رمز عبور خود را فراموش کرده‌اید؟
          </a>
        </div>

        {/* دکمه ورود به سیستم */}
        <button 
          type="submit" 
          className='w-full bg-primary hover:bg-primary-blue text-text-white font-Estedad font-bold text-[15px] md:text-[16px] py-3 rounded-full flex items-center justify-center gap-2 shadow-md transition mt-1'
        >
          <FaRightToBracket />
          <span>ورود به سیستم</span>
        </button>

      </form>

      {/* جداکننده «یا» */}
      <div className='flex items-center gap-3 my-4'>
        <span className='flex-1 h-px bg-border'></span>
        <span className='font-Vazirmatn-Bold text-[13px] text-text-primary'>یا</span>
        <span className='flex-1 h-px bg-border'></span>
      </div>

      {/* دکمه‌های ورود با تلگرام و گوگل */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5'>
        <button className='bg-primary-light hover:opacity-90 text-text-white font-Vazirmatn-Bold text-[13px] py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition'>
          <FaTelegram className='text-[18px]' />
          <span>ورود با تلگرام</span>
        </button>

        <button className='bg-background-light hover:bg-background-card border border-border text-text-primary font-Vazirmatn-Bold text-[13px] py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition'>
          <FaGoogle className='text-danger text-[16px]' />
          <span>ورود با گوگل</span>
        </button>
      </div>

      {/* باکس نکات مهم */}
      <div className='bg-background-card border border-border rounded-2xl p-4 flex items-start gap-3'>
        <FaCircleCheck className='text-primary-light text-[22px] shrink-0 mt-0.5' />
        <div className='font-Vazirmatn text-[12px] text-text-primary leading-6'>
          <h4 className='font-Vazirmatn-Bold text-[13px] mb-1'>نکات مهم:</h4>
          <ul className='list-disc pr-4 space-y-0.5'>
            <li>برای امنیت حساب خود، از رمز عبور قوی استفاده کنید.</li>
            <li>در صورت بروز مشکل، با اداره مکتب تماس بگیرید.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default LoginForm;
