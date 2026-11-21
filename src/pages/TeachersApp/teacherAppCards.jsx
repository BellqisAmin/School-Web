import React from 'react'
import AbderrahmanNori from '../../assets/img/TeacherApp/AbderrahmanNori.jpg'
import FaridMohamady from '../../assets/img/TeacherApp/FaridMohamady.webp'
import FatimaSadiqi from '../../assets/img/TeacherApp/FatimaSadiqi.webp'
import JawidHaidari from '../../assets/img/TeacherApp/JawidHaidari.webp'
import MariamMerzai from '../../assets/img/TeacherApp/MariamMerzai.jpg'
import NasirAhmady from '../../assets/img/TeacherApp/NasirAhmady.jpg'
import SomaiaAhmadi from '../../assets/img/TeacherApp/SomaiaAhmadi.jpg'
import ZainabQarimy from '../../assets/img/TeacherApp/ZainabQarimy.webp'

const TeacherAppCards = () => {
    return (
        <section className="w-full max-w-7xl mx-auto mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" dir="rtl">

            <div className="w-full bg-background-light border-2 border-blue-200 rounded-xl p-3 text-center flex flex-col justify-between shadow-sm">
                <div>
                    <img className="w-full h-56 sm:h-48 rounded-lg mx-auto mb-3 object-cover object-top" src={AbderrahmanNori} alt="استاد عبدالرحمن نوری" />
                    <h2 className="text-xl font-bold text-blue-900">استاد عبدالرحمن نوری</h2>
                    <p className="text-blue-600 text-sm mb-3">معلم فزیک</p>
                </div>
                <div>
                    <div className="text-sm text-gray-700 p-3 border-y border-blue-100 space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2">🎓 لیسانس فزیک</p>
                        <p className="flex items-center justify-center md:justify-start gap-2">⏳ ۷ سال تجربه</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">📞</button>
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">✉️</button>
                    </div>
                </div>
            </div>
            <div className="w-full bg-background-light border-2 border-blue-200 rounded-xl p-3 text-center flex flex-col justify-between shadow-sm">
                <div>
                    <img className="w-full h-56 sm:h-48 rounded-lg mx-auto mb-3 object-cover object-top" src={ZainabQarimy} alt="خانم زینب کریمی" />
                    <h2 className="text-xl font-bold text-blue-900">خانم زینب کریمی</h2>
                    <p className="text-blue-600 text-sm mb-3">معلم علوم</p>
                </div>
                <div>
                    <div className="text-sm text-gray-700 p-3 border-y border-blue-100 space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2">🎓 لیسانس علوم طبی</p>
                        <p className="flex items-center justify-center md:justify-start gap-2">⏳ ۶ سال تجربه</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">📞</button>
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">✉️</button>
                    </div>
                </div>
            </div>

            <div className="w-full bg-background-light border-2 border-blue-200 rounded-xl p-3 text-center flex flex-col justify-between shadow-sm">
                <div>
                    <img className="w-full h-56 sm:h-48 rounded-lg mx-auto mb-3 object-cover object-top" src={FaridMohamady} alt="استاد فرید محمدی" />
                    <h2 className="text-xl font-bold text-blue-900">استاد فرید محمدی</h2>
                    <p className="text-blue-600 text-sm mb-3">معلم ریاضی</p>
                </div>
                <div>
                    <div className="text-sm text-gray-700 p-3 border-y border-blue-100 space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2">🎓 لیسانس ریاضی</p>
                        <p className="flex items-center justify-center md:justify-start gap-2">⏳ ۸ سال تجربه</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">📞</button>
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">✉️</button>
                    </div>
                </div>
            </div>

            <div className="w-full bg-background-light border-2 border-blue-200 rounded-xl p-3 text-center flex flex-col justify-between shadow-sm">
                <div>
                    <img className="w-full h-56 sm:h-48 rounded-lg mx-auto mb-3 object-cover object-top" src={SomaiaAhmadi} alt="خانم سمیه احمدی" />
                    <h2 className="text-xl font-bold text-blue-900">خانم سمیه احمدی</h2>
                    <p className="text-blue-600 text-sm mb-3">معلم زبان انگلیسی</p>
                </div>
                <div>
                    <div className="text-sm text-gray-700 p-3 border-y border-blue-100 space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2">🎓 لیسانس زبان انگلیسی</p>
                        <p className="flex items-center justify-center md:justify-start gap-2">⏳ ۵ سال تجربه</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">📞</button>
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">✉️</button>
                    </div>
                </div>
            </div>

            <div className="w-full bg-background-light border-2 border-blue-200 rounded-xl p-3 text-center flex flex-col justify-between shadow-sm">
                <div>
                    <img className="w-full h-56 sm:h-48 rounded-lg mx-auto mb-3 object-cover object-top" src={FatimaSadiqi} alt="خانم فاطمه صادیقی" />
                    <h2 className="text-xl font-bold text-blue-900">خانم فاطمه صادیقی</h2>
                    <p className="text-blue-600 text-sm mb-3">معلم ادبیات</p>
                </div>
                <div>
                    <div className="text-sm text-gray-700 p-3 border-y border-blue-100 space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2">🎓 لیسانس ادبیات فارسی</p>
                        <p className="flex items-center justify-center md:justify-start gap-2">⏳ ۷ سال تجربه</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">📞</button>
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">✉️</button>
                    </div>
                </div>
            </div>

            <div className="w-full bg-background-light border-2 border-blue-200 rounded-xl p-3 text-center flex flex-col justify-between shadow-sm">
                <div>
                    <img className="w-full h-56 sm:h-48 rounded-lg mx-auto mb-3 object-cover object-top" src={JawidHaidari} alt="استاد جاوید حیدری" />
                    <h2 className="text-xl font-bold text-blue-900">استاد جاوید حیدری</h2>
                    <p className="text-blue-600 text-sm mb-3">معلم کمپیوتر</p>
                </div>
                <div>
                    <div className="text-sm text-gray-700 p-3 border-y border-blue-100 space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2">🎓 لیسانس کمپیوتر</p>
                        <p className="flex items-center justify-center md:justify-start gap-2">⏳ ۸ سال تجربه</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">📞</button>
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">✉️</button>
                    </div>
                </div>
            </div>
            <div className="w-full bg-background-light border-2 border-blue-200 rounded-xl p-3 text-center flex flex-col justify-between shadow-sm">
                <div>
                    <img className="w-full h-56 sm:h-48 rounded-lg mx-auto mb-3 object-cover object-top" src={MariamMerzai} alt="خانم مریم مرضایی" />
                    <h2 className="text-xl font-bold text-blue-900">خانم مریم مرضایی</h2>
                    <p className="text-blue-600 text-sm mb-3">معلم تعلیمات اسلامی</p>
                </div>
                <div>
                    <div className="text-sm text-gray-700 p-3 border-y border-blue-100 space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2">🎓 لیسانس علوم دینی</p>
                        <p className="flex items-center justify-center md:justify-start gap-2">⏳ ۶ سال تجربه</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">📞</button>
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">✉️</button>
                    </div>
                </div>
            </div>

            <div className="w-full bg-background-light border-2 border-blue-200 rounded-xl p-3 text-center flex flex-col justify-between shadow-sm">
                <div>
                    <img className="w-full h-56 sm:h-48 rounded-lg mx-auto mb-3 object-cover object-top" src={NasirAhmady} alt="استاد نصیر احمدی" />
                    <h2 className="text-xl font-bold text-blue-900">استاد نصیر احمدی</h2>
                    <p className="text-blue-600 text-sm mb-3">معلم تاریخ</p>
                </div>
                <div>
                    <div className="text-sm text-gray-700 p-3 border-y border-blue-100 space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2">🎓 لیسانس تاریخ</p>
                        <p className="flex items-center justify-center md:justify-start gap-2">⏳ ۱۰ سال تجربه</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">📞</button>
                        <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full text-lg transition">✉️</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TeacherAppCards
