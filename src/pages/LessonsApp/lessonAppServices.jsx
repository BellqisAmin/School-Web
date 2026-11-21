import React from 'react'
import first from '../../assets/img/LessonsApp/first.webp'
import fullLesson from '../../assets/img/LessonsApp/full lesson.jpeg'
import between from '../../assets/img/LessonsApp/between.jpg'
import unevercery from '../../assets/img/LessonsApp/unevercery.jpg'

const LessonAppServices = () => {
  return (
    <div className='w-full grid sm:grid-cols-2 p-3 md:flex gap-3 mb-3'>
      <div className='min-w-[20%] h-full p-3 border-2 rounded-xl border-blue-500 bg-background-light flex flex-wrap text-center items-center'>
        <img className='w-full h-25 object-cover' src={first} alt="" />
        <h1 className='block w-full my-2 text-primary font-bold'>آموزش های تکمیلی</h1>
        <span className='block w-full'>کمپیوتر زبان و مهارت های تکمیلی</span>
        <a className='block my-2 w-full text-primary' href="">مشهاده جزییات →</a>
      </div>
      <div className='min-w-[20%] h-full p-3 border-2 rounded-xl border-blue-500 bg-background-light flex flex-wrap text-center items-center'>
        <img className='w-full h-25 object-cover' src={fullLesson} alt="" />
        <h1 className='block my-2 w-full text-primary font-bold'>ابتدنایه</h1>
        <span className='block w-full'>مبانی و علم مهارت پایه</span>
        <a className='block my-2 w-full text-primary' href="">مشهاده جزییات →</a>
      </div>
      <div className='min-w-[20%] h-full p-3 border-2 rounded-xl border-blue-500 bg-background-light flex flex-wrap text-center items-center'>
        <img className='w-full h-25 object-cover' src={between} alt="" />
        <h1 className='block my-2 w-full text-primary font-bold'>متوسطه</h1>
        <span className='block w-full'>مضامین علمی و مهارت های تحلیلی</span>
        <a className='block my-2 w-full text-primary' href="">مشهاده جزییات →</a>
      </div>
      <div className='min-w-[30%] h-full p-3 border-2 rounded-xl border-blue-500 bg-background-light flex flex-wrap text-center items-center'>
        <img className='w-full h-25 object-cover' src={unevercery} alt="" />
        <h1 className='block my-2 w-full text-primary font-bold'>لیسه</h1>
        <span className='block w-full'>مضامین تخصصی و آمادگی کانکور</span>
        <a className='block my-2 w-full text-primary' href="">مشهاده جزییات →</a>
      </div>
    </div>
  )
}

export default LessonAppServices
