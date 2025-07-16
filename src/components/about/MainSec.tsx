import React from 'react'
import Image from 'next/image'

function MainSec() {
  return (
    <div className='flex  flex-col w-full justify-center items-center '>
          <div className='flex flex-col w-[95%] lg:w-[80%]'>
            <div className='py-4 text-[20px]'><h1>About Us</h1></div>
             <div className='py-4 font-bold text-[40px]'><h1>Creating Impact Through Clean Innovation</h1></div>
              <div className='py-4'><h1>Global Solar is a renewable energy company committed to driving global sustainability through smart solar technology, empowering homes, businesses and communities to transition to a cleaner, more efficient and future-proof energy ecosystem.</h1></div>
               <div className='w-full flex gap-20'>
                      <div className='flex-2'>
                            <Image src='/hm.jpg' alt='about' width={2000} height={1000} className='rounded-xl w-full h-full'/>
                      </div>
                      <div className='flex-1 flex flex-col gap-5'>
                              <div className='flex-1 bg-black text-white p-5 rounded-xl'>
                                <div className='py-2 text-[20px] font-bold'><h1>Vision</h1></div>
                               <div className='py-2'><h1>To increase access to sustainable renewable
                                        energy and energy efficiency technologies to all
                                          citizens of Africa</h1></div>
                              </div>
                              <div className='flex-1 bg-[#6bd408] p-5 rounded-xl'>
                                <div className='py-2 text-[20px] font-bold'><h1>Mission</h1></div>
                                <div className='py-2'><h1>To reduce poverty and improve the quality of life
                                                        for people throughout Africa through the
                                                                promotion of affordable technology powered by
                                               renewable energy, distributed to people not served
                                                      by, or unable to afford connection to, an electricity
                                         grid.</h1></div>
                              </div>
                      </div>
               </div>

          </div>
    </div>
  )
}

export default MainSec
