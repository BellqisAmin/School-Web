import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <div className='md:hidden relative w-full h-20 bg-white shadow-md flex items-center justify-between px-5 z-50'>
            
            <button 
                onClick={toggleMenu} 
                className='p-2 rounded-lg text-primary-blue hover:bg-blue-50 focus:outline-none transition-colors'
                aria-label="منو"
            >
                {isOpen ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button> 
            <Link to="/" className='flex items-center gap-2'>
                <div className='text-left'>
                    <h3 className='text-sm font-black text-primary-blue'>مکتب خصوصی امید فردا</h3>
                    <p className='text-[10px] text-gray-500 font-bold'>دانش، اخلاق و آینده روشن</p>
                </div>
                <img className='w-14 h-14 object-contain' src="1.png" alt="لوگو مکتب" />
            </Link>

            {isOpen && (
                <div 
                    onClick={closeMenu}
                    className='fixed inset-0 bg-black/50 backdrop-blur-xs z-40 transition-opacity'
                ></div>
            )}

            <nav className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div>
                    <div className='bg-primary-blue p-5 text-white flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <img className='w-11 h-11 bg-white rounded-full p-1 object-contain' src="1.png" alt="" />
                            <div>
                                <h4 className='font-black text-sm'>امید فردا</h4>
                                <span className='text-xs text-blue-200'>منوی دسترسی سریع</span>
                            </div>
                        </div>
                        <button onClick={closeMenu} className='text-white hover:text-gray-200 text-2xl font-bold'> ✕ </button>
                    </div>

                    <ul className='py-4 px-3 space-y-1 text-gray-700 font-bold text-[15px]'>
                        <li>
                            <Link to='/' onClick={closeMenu} className='block py-2.5 px-4 rounded-xl hover:bg-blue-50 hover:text-primary-blue transition-all'> صفحه اصلی </Link>
                        </li>
                        <li>
                            <Link to='/about' onClick={closeMenu} className='block py-2.5 px-4 rounded-xl hover:bg-blue-50 hover:text-primary-blue transition-all'>  درباره ما </Link>
                        </li>
                        <li>
                            <Link to='/lesssonsApp' onClick={closeMenu} className='block py-2.5 px-4 rounded-xl hover:bg-blue-50 hover:text-primary-blue transition-all'>  برنامه های آموزشی</Link>
                        </li>
                        <li>
                            <Link to='/teachers' onClick={closeMenu} className='block py-2.5 px-4 rounded-xl hover:bg-blue-50 hover:text-primary-blue transition-all'> معلمان و کادر اداری </Link>
                        </li>
                        <li>
                            <Link to='/Gallary' onClick={closeMenu} className='block py-2.5 px-4 rounded-xl hover:bg-blue-50 hover:text-primary-blue transition-all'>  گالری تصاویر </Link>
                        </li>
                        <li>
                            <Link to='/Calender' onClick={closeMenu} className='block py-2.5 px-4 rounded-xl hover:bg-blue-50 hover:text-primary-blue transition-all'> تقویم سال تعلیمی</Link>
                        </li>
                        <li>
                            <Link to='/contact' onClick={closeMenu} className='block py-2.5 px-4 rounded-xl hover:bg-blue-50 hover:text-primary-blue transition-all'> تماس با ما </Link>
                        </li>
                    </ul>
                </div>

                <div className='p-5 border-t border-gray-100 bg-gray-50'>
                    <Link onClick={closeMenu} className='block w-full py-3 bg-primary-blue text-white text-center font-black rounded-full shadow-lg hover:opacity-90 transition-all'> ثبت نام آنلاین </Link>
                    <p className='text-center text-xs text-gray-400 mt-3'>کابل، افغانستان</p>
                </div>

            </nav>
        </div>
    )
}

export default Mobile
