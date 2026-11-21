import React from 'react'
import speaker from '../../assets/img/calender/speaker.png'
import PDFFile from '../../assets/img/calender/pdfFile.png'

const calenderTabs = () => {
    return (
        <section className='w-full px-30 py-5 flex flex-wrap content-center gap-15'>
            <div dir='rtl' className='w-80 h-87 rounded-2xl bg-background-cart border border-border overflow-hidden text-center flex flex-col items-center justify-between pb-4'>
                <div className='w-full h-13 bg-primary-dark font-bold text-white pr-2 py-1 text-2xl flex items-center justify-center'>اطلاعیه مهم</div>
                <img className='w-full h-28 object-cover' src={speaker} alt="" />
                <div className='w-full text-black px-3 text-center'>
                    <h1 className='my-1 font-bold text-red-800 text-[20px]'>تغییر برنامه درسی</h1>
                    <p className='mt-1 text-sm leading-6'>به اطلاع همه شاگردان و اولیای محترم می‌رساند <br /> که به دلیل برگزاری ویژه آموزشی <br /> برنامه درسی هفته آینده با تغییر جزئی همراه است</p>
                </div>
                <button className='w-50 h-10 bg-red-800 text-white rounded-full mt-2'>مشاهده جزئیات</button>
            </div>

            <div className='w-80 h-85 rounded-2xl bg-background-cart overflow-hidden text-center border border-border'>
                <div className='w-full h-13 bg-primary-dark font-bold text-white pr-2 py-1 text-2xl flex items-center justify-center'>تاریخ‌های مهم</div>
                <div className='w-full text-black text-center p-3'>
                    <ul className='w-full h-70 mt-1 flex flex-col gap-2'>
                        <li className='w-full h-12 flex rounded-xl border border-border overflow-hidden'>
                            <span className='w-[50%] h-full bg-background-light flex justify-center items-center border-l border-border'>آغاز سال تعلیمی</span>
                            <span className='w-[50%] h-full bg-background-light flex justify-center items-center'>۱ سنبله ۱۴۰۴</span>
                        </li>
                        <li className='w-full h-12 flex rounded-xl border border-border overflow-hidden'>
                            <span className='w-[50%] h-full bg-background-light flex justify-center items-center border-l border-border'>ختم سال تعلیمی</span>
                            <span className='w-[50%] h-full bg-background-light flex justify-center items-center'>۳۰ جوزا ۱۴۰۵</span>
                        </li>
                        <li className='w-full h-12 flex rounded-xl border border-border overflow-hidden'>
                            <span className='w-[50%] h-full bg-background-light flex justify-center items-center border-l border-border'>امتحانات دوره‌ای</span>
                            <span className='w-[50%] h-full bg-background-light flex justify-center items-center'>۱۵ - ۲۰ دلو ۱۴۰۴</span>
                        </li>
                        <li className='w-full h-12 flex rounded-xl border border-border overflow-hidden'>
                            <span className='w-[50%] h-full bg-background-light flex justify-center items-center border-l border-border'>امتحانات سالانه</span>
                            <span className='w-[50%] h-full bg-background-light flex justify-center items-center'>۵ - ۱۰ عقرب ۱۴۰۴</span>
                        </li>
                        <li className='w-full h-12 flex rounded-xl border border-border overflow-hidden'>
                            <span className='w-[50%] h-full bg-background-light flex justify-center items-center border-l border-border'>تعطیلات زمستانی</span>
                            <span className='w-[50%] h-full bg-background-light flex justify-center items-center'>۱ جدی - ۱۵ جدی ۱۴۰۴</span>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="w-80 rounded-2xl bg-[#f4f7fc] border border-blue-200/80 shadow-md overflow-hidden flex flex-col items-center text-center pb-5">
                <div className="w-full py-3 px-4 bg-primary-dark font-bold text-white text-xl flex items-center justify-center gap-2">
                    <span>دانلود برنامه کامل تقویم</span>
                </div>
                <div className="w-full flex justify-center items-center mt-5 mb-3">
                    <img className="w-28 h-28 object-contain" src={PDFFile} alt="" />
                </div>
                <div className="w-full px-4">
                    <p className="text-slate-700 text-sm font-medium leading-6">
                        برای دانلود تقویم آموزشی سال ۱۴۰۴-۱۴۰۶ لطفا روی دکمه زیر کلک کنید.
                    </p>
                </div>
                <button className="mt-5 px-8 py-2.5 bg-blue-950 transition-colors text-white font-bold text-sm rounded-full shadow-sm cursor-pointer">دانلود فایل PDF</button>
            </div>



        </section>
    )
}

export default calenderTabs
