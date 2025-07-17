import React from 'react'
import Btn from '../shared/Btn'

function CTA() {
  return (
    <div className='flex flex-col justify-center items-center w-full py-[50px]'>
        <div className='flex flex-col w-[95%] md:w-[80%] bg-green-950 p-5 rounded-xl'>
            <div className='flex flex-row w-full '>
                <div className='flex-1 text-white'>
                         <div className='py-4 text-[18px] md:text-[20px] text-[#6bd408]'><h1>Join our team</h1></div>
                         <div className='py-4 font-bold text-[20px] md:text-[40px]'><h1>Build the Future with Global Solar</h1></div>
                        <div className='py-4'><h1>Invite change-makers to be part of a purpose-driven company shaping tomorrow through clean energy.</h1></div>
                        <Btn href='/' text='Join Us' />
                </div>
            </div> 
        </div>
    </div>
  )
}

export default CTA