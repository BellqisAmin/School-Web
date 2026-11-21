import React, { useState } from 'react';
import {
    FaCircleQuestion,
    FaChevronUp,
    FaChevronDown,
    FaSackDollar,
    FaBook,
    FaBullhorn,
    FaLocationDot,
    FaPhone
} from "react-icons/fa6";
import staff6 from '../../assets/img/staff6.webp';

const FaqList = () => {
    // شماره سوال باز (پیش‌فرض سوال ۱ باز است)
    const [openQuestion, setOpenQuestion] = useState(1);

    const toggleQuestion = (num) => {
        if (openQuestion === num) {
            setOpenQuestion(null);
        } else {
            setOpenQuestion(num);
        }
    };

    return (
        <div className='w-full bg-background border border-border rounded-2xl shadow-sm p-5 md:p-6'>

            {/* عنوان بالای باکس */}
            <div className='flex items-center gap-2.5 mb-6'>
                <FaCircleQuestion className='text-primary-blue text-[26px]' />
                <h2 className='text-text-primary font-Estedad font-bold text-[20px] md:text-[24px]'>
                    پرسش‌های متداول ثبت‌نام
                </h2>
            </div>

            {/* ردیف اول: سوال باز شده + تصویر چک‌لیست در سمت چپ */}
            <div className='flex flex-col md:flex-row items-stretch gap-4 mb-4'>

                {/* باکس سوال اول */}
                <div className='w-full border border-border rounded-2xl overflow-hidden bg-background-light'>
                    <button
                        onClick={() => toggleQuestion(1)}
                        className='w-full bg-primary text-text-white font-Estedad font-bold text-[15px] md:text-[16px] px-5 py-3.5 flex items-center justify-between text-right'
                    >
                        <span>برای ثبت‌نام شاگرد جدید چه مراحلی لازم است؟</span>
                        <span className='w-7 h-7 rounded-full bg-background text-primary flex items-center justify-center shrink-0'>
                            {openQuestion === 1 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}
                        </span>
                    </button>

                    {openQuestion === 1 && (
                        <div className='p-5 text-text-primary font-Vazirmatn text-[13px] md:text-[14px] leading-7'>
                            برای ثبت‌نام شاگرد جدید، ابتدا فرم ثبت‌نام را به صورت آنلاین یا حضوری تکمیل کنید، سپس مدارک مورد نیاز را ارائه داده و پس از بررسی، نتیجه به شما اطلاع داده خواهد شد.
                        </div>
                    )}
                </div>

                {/* تصویر چک‌لیست سمت چپ */}
                <div className='w-full md:w-44 shrink-0 bg-background-card border border-border rounded-2xl p-3 flex items-center justify-center'>
                    <img
                        src={staff6}
                        alt="مراحل ثبت‌نام"
                        className='w-28 h-28 object-contain'
                    />
                </div>

            </div>

            {/* بقیه سوالات آکاردئونی */}
            <div className='flex flex-col gap-3.5'>

                {/* سوال ۲ */}
                <div className='border border-border rounded-2xl overflow-hidden bg-background-light'>
                    <button
                        onClick={() => toggleQuestion(2)}
                        className='w-full px-5 py-3.5 flex items-center justify-between text-right hover:bg-background-card transition'
                    >
                        <div className='flex items-center gap-3'>
                            <FaSackDollar className='text-primary text-[22px] shrink-0' />
                            <span className='text-text-primary font-Estedad font-bold text-[15px] md:text-[16px]'>
                                فیس چگونه و در چه زمانی پرداخت می‌شود؟
                            </span>
                        </div>
                        <span className='w-7 h-7 rounded-full bg-background-card text-primary flex items-center justify-center shrink-0'>
                            {openQuestion === 2 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}
                        </span>
                    </button>

                    {openQuestion === 2 && (
                        <div className='px-5 pb-4 pt-2 border-t border-border text-text-secondary font-Vazirmatn text-[13px] md:text-[14px] leading-7'>
                            فیس مکتب به صورت ماهانه یا ربع‌وار در آغاز هر دوره از طریق بخش مالی مکتب یا حساب بانکی رسمی قابل پرداخت می‌باشد.
                        </div>
                    )}
                </div>

                {/* سوال ۳ */}
                <div className='border border-border rounded-2xl overflow-hidden bg-background-light'>
                    <button
                        onClick={() => toggleQuestion(3)}
                        className='w-full px-5 py-3.5 flex items-center justify-between text-right hover:bg-background-card transition'
                    >
                        <div className='flex items-center gap-3'>
                            <FaBook className='text-primary text-[22px] shrink-0' />
                            <span className='text-text-primary font-Estedad font-bold text-[15px] md:text-[16px]'>
                                مکتب کدام صنف‌ها را ارائه می‌کند؟
                            </span>
                        </div>
                        <span className='w-7 h-7 rounded-full bg-background-card text-primary flex items-center justify-center shrink-0'>
                            {openQuestion === 3 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}
                        </span>
                    </button>

                    {openQuestion === 3 && (
                        <div className='px-5 pb-4 pt-2 border-t border-border text-text-secondary font-Vazirmatn text-[13px] md:text-[14px] leading-7'>
                            مکتب خصوصی امید فردا از صنف اول (دوره ابتدائیه) تا صنف دوازدهم (دوره لیسه) مطابق نصاب تعلیمی وزارت معارف فعالیت دارد.
                        </div>
                    )}
                </div>

                {/* سوال ۴ */}
                <div className='border border-border rounded-2xl overflow-hidden bg-background-light'>
                    <button
                        onClick={() => toggleQuestion(4)}
                        className='w-full px-5 py-3.5 flex items-center justify-between text-right hover:bg-background-card transition'
                    >
                        <div className='flex items-center gap-3'>
                            <FaBullhorn className='text-primary text-[22px] shrink-0' />
                            <span className='text-text-primary font-Estedad font-bold text-[15px] md:text-[16px]'>
                                نتایج از چه طریقی اعلام می‌شوند؟
                            </span>
                        </div>
                        <span className='w-7 h-7 rounded-full bg-background-card text-primary flex items-center justify-center shrink-0'>
                            {openQuestion === 4 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}
                        </span>
                    </button>

                    {openQuestion === 4 && (
                        <div className='px-5 pb-4 pt-2 border-t border-border text-text-secondary font-Vazirmatn text-[13px] md:text-[14px] leading-7'>
                            نتایج امتحانات از طریق برد اعلانات مکتب، اطلاع‌رسانی پیامکی به والدین و همچنین در بخش اخبار همین وب‌سایت اعلام می‌گردد.
                        </div>
                    )}
                </div>

                {/* سوال ۵ */}
                <div className='border border-border rounded-2xl overflow-hidden bg-background-light'>
                    <button
                        onClick={() => toggleQuestion(5)}
                        className='w-full px-5 py-3.5 flex items-center justify-between text-right hover:bg-background-card transition'
                    >
                        <div className='flex items-center gap-3'>
                            <FaLocationDot className='text-primary text-[22px] shrink-0' />
                            <span className='text-text-primary font-Estedad font-bold text-[15px] md:text-[16px]'>
                                چگونه به مکتب مراجعه کنیم؟
                            </span>
                        </div>
                        <span className='w-7 h-7 rounded-full bg-background-card text-primary flex items-center justify-center shrink-0'>
                            {openQuestion === 5 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}
                        </span>
                    </button>

                    {openQuestion === 5 && (
                        <div className='px-5 pb-4 pt-2 border-t border-border text-text-secondary font-Vazirmatn text-[13px] md:text-[14px] leading-7'>
                            شما می‌توانید همه‌روزه در ساعات کاری به آدرس ولایت کابل، ناحیه ۳، سرک گل سرخ، مقابل پارک صلح مراجعه نمایید.
                        </div>
                    )}
                </div>

                {/* سوال ۶ */}
                <div className='border border-border rounded-2xl overflow-hidden bg-background-light'>
                    <button
                        onClick={() => toggleQuestion(6)}
                        className='w-full px-5 py-3.5 flex items-center justify-between text-right hover:bg-background-card transition'
                    >
                        <div className='flex items-center gap-3'>
                            <FaPhone className='text-primary text-[22px] shrink-0' />
                            <span className='text-text-primary font-Estedad font-bold text-[15px] md:text-[16px]'>
                                در چه ساعات می‌توان با اداره تماس گرفت؟
                            </span>
                        </div>
                        <span className='w-7 h-7 rounded-full bg-background-card text-primary flex items-center justify-center shrink-0'>
                            {openQuestion === 6 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}
                        </span>
                    </button>

                    {openQuestion === 6 && (
                        <div className='px-5 pb-4 pt-2 border-t border-border text-text-secondary font-Vazirmatn text-[13px] md:text-[14px] leading-7'>
                            اداره مکتب از روز شنبه تا پنج‌شنبه، از ساعت ۸:۰۰ صبح الی ۲:۰۰ بعد از ظهر پاسخگوی تماس‌های شما می‌باشد.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default FaqList;
