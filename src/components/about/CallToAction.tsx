import React from 'react'
import Btn from '../shared/Btn'

function CallToAction() {
  return (
    <div className='flex relative flex-col w-full justify-center items-center bg-fixed bg-center bg-no-repeat md:my-[50px] py-[50px]' style={{backgroundImage:'url(/images/cta2.webp)'}}>
        <div className='w-full h-full absolute  top-0 opacity-70 bg-gray-950 z-10'></div>
        <div className=' flex flex-col md:flex-row w-[95%] lg:w-[80%] z-12 '>
            <div className='flex-1 '>
                   <div className='py-4 text-[20px] text-white'><h1>Start Today</h1></div>
             <div className='py-4 font-bold text-[20px] md:text-[40px] text-white z-12'><h1>Ready to switch to solar? Let’s start the journey.</h1></div>
              <div className='py-4 text-white'> <h1>With Global Solar, solar isn’t complicated. It’s reliable, intelligent, and built to perform. Let’s bring clean energy to life together.</h1></div>
              <Btn text='Start Now' href='/'/>
            </div>
            <div className='flex-1'>

            </div>
        </div>
    </div>
  )
}

export default CallToAction