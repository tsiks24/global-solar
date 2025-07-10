import React from 'react'
import BackgroundVideo from 'next-video/background-video'
import Vertical from '../shared/Vertical'

function Hero() {
  return (
    <div className='w-full md:h-[600px] lg:h-[780px] h-[400px] relative'>
        <div className='w-full h-full absolute overflow-hidden mt-[-120px] flex justify-center items-center '>
        <BackgroundVideo src={"/ene.mkv"} className='w-full h-full'>

        </BackgroundVideo>
        <Vertical/>
      <div className='w-full h-full absolute  top-0 opacity-50 bg-black z-10'></div>
        <div className=' absolute  w-[95%] md:w-[90%]  top-[30%] flex flex-col z-20 '>
           <div className=''>
                  <h1 className='text-white md:text-[80px] text-center font-bold text-[20px]  uppercase mx '>Global Solar  </h1>
            </div> 
            <div className='flex w-full justify-center items-center gap-5 md:gap-20 flex-row'>
                <div></div>
                 <div className=''><h1 className='text-white mx text-[20px] md:text-[80px]  text-center w-[60%] font-bold  uppercase'>Energy</h1></div>
                 <div><h1 className='text-white text-[16px] w-[50%] '> Our cutting-edge solar solutions are designed to save you money, reduce your carbon footprint</h1></div>
                 
            </div>
        
        </div>
       
    </div>
    </div>

  )
}

export default Hero