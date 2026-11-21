import React from 'react'
import Header from './header'
import Headtop from './headtop'
import Mobile from './mobile'

const Mainheader = () => {
  return (
    <div className='w-full h-20 bg-white '>
        <Headtop/>
        <Header/>
        <Mobile/>
    </div>
  )
}

export default Mainheader
