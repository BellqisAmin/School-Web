import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='hidden md:flex w-full h-24 bg-white gap-3 p-2'>
      <figure className='w-80 h-full flex items-center'>
        <img className='w-30 h-full object-cover' src="1.png" alt="" />
        <div className='w-50 h-13 text-center text-primary-blue font-black'>
            <h3>مکتب خصوصی امید فردا</h3>
            <p>دانش, اخلاق, و اینده روشن</p>
        </div>
      </figure>
      <ul className='w-200  h-full text-primary-blue text-[17px] flex justify-center items-center text-center gap-8'>
        <li className='font-black'><Link>صفحه اصلی</Link></li>
        <li className='font-black'><Link>درباره ما</Link></li>
        <li className='font-black'><Link to={'/lesssonsApp'}>برنامه های اموزشی</Link></li>
        <li className='font-black'><Link>ثبت نام</Link></li>
        <li className='font-black'><Link to={'/teachers'}>معلمان کادر اداری</Link></li>
        <li className='font-black'><Link to={'/Gallary'}>گالری</Link></li>
        <li className='font-black'><Link>تماس با ما</Link></li>
        <li className='font-black'><Link to={'/Calender'}>تقویم سال تعلیمی</Link></li>
      </ul>
      <div className='w-50 h-full p-3 flex justify-center'>
        <a href="" className='flex sm:w-20 md:w-19 lg:w-45 h-full bg-primary-blue justify-center items-center font-black rounded-full sm:text-[16px] lg:text-[17px] text-white'>ثبت نام انلاین</a>
      </div>
    </div>
  )
}

export default Header