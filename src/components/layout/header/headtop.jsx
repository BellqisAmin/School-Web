import React from 'react'

const Headtop = () => {
  return (
    <div className='hidden md:flex w-full h-11 bg-primary-blue items-center'>
      <div className='w-[50%] h-full text-white flex gap-25 items-center px-7'>
        <p>کابل افغانستان</p>
        <a href="">+۹۰۷۰۰۱۲۳A۵۶</a>
        <p>info@omidfarda.af</p>
      </div>
      <div className='w-[50%] h-full text-white px-16 items-center flex justify-end gap-5'>
        <a href="" className='w-5 h-5 flex rounded-full justify-center text-center items-center bg-white text-black'>f</a>
        <a href="" className='w-5 h-5 flex rounded-full justify-center text-center items-center bg-white text-black'>y</a>
        <a href="" className='w-5 h-5 flex rounded-full justify-center text-center items-center bg-white text-black'>t</a>
        <a href="" className='w-5 h-5 flex rounded-full justify-center text-center items-center bg-white text-black'>in</a>
      </div>
    </div>
  )
}

export default Headtop
