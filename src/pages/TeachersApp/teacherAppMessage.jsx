import React from 'react'
import manager from '../../assets/img/TeacherApp/manager.png'

const TeacherAppMessage = () => {
    return (
        <div className="w-full h-auto min-h-70 bg-background-cart flex py-6 px-3 justify-center" dir="rtl" >
            <div className="w-full max-w-7xl rounded-md flex flex-col md:flex-row items-center justify-between gap-6 p-2">

                <img className="hidden lg:block h-full max-h-64 object-contain" src="1.png" alt="" />

                <div className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-right order-2 md:order-1">
                    <h3 className="w-full font-bold text-lg md:text-xl text-primary-dark">پیام مدیر مکتب</h3>
                    <p className="w-full md:w-[95%] mt-3 font-medium text-sm md:text-base leading-relaxed text-justify md:text-right">
                        ما به عنوان تیمی متعهد از معلمان و کادر اداری، باور داریم که آموزش باکیفیت، کلید ساختن آینده روشن برای فرزندان عزیز این سرزمین است، هدف ما ایجاد محیطی علمی، اخلاقی و پرورش استعدادها می‌باشد تا شاگردان ما در مسیر موفقیت قدم بردارند.
                    </p>
                    <button className="px-6 py-2.5 bg-primary-dark rounded-full text-white text-sm md:text-base mt-5 transition-transform hover:scale-105">
                        بیشتر بخوانید ←
                    </button>
                </div>

                <img
                    className="w-full max-w-xs sm:max-w-sm md:w-64 lg:w-80 h-56 md:h-64 object-cover object-top rounded-xl order-1 md:order-2 shadow-sm"
                    src={manager}
                    alt="مدیر مکتب"
                />
            </div>
        </div >
    )
}

export default TeacherAppMessage
