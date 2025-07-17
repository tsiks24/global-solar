import React from 'react'
import Image from 'next/image'

function MainSec() {
  return (
    <div className='flex  flex-col w-full justify-center items-center md:mt-[-50px] mt-[-200px] '>
          <div className='flex flex-col w-[95%] lg:w-[80%]'>
            <div className='py-4 text-[18px] md:text-[20px]'><h1>About Us</h1></div>
             <div className='py-4 font-bold text-[20px] md:text-[40px]'><h1>Creating Impact Through Clean Innovation</h1></div>
              <div className='py-4'><h1>The company was incorporated in 2014 in Zimbabwe and is registered with the
Zimbabwe Energy Regulation Authority, ZERA and the Engineering Council of
Zimbabwe, ECZ, Member of Zimbabwe Institution of Engineers
Installed and Sold more than 3MW of Solar Panels since 2014 to individual and
commercial clients
Produced more than 1,5 million LED bulbs and LED Tubes to date
BRANDS-Global Solar, iSIBANE, RAMBI
We try to give back to the community through our corporate social responsibility
program FLAMES.
With FLAMES, we have managed to improve the lives of several families living in
rural areas with the donation of small solar home systems and biomass cook stoves.</h1></div>
               <div className='w-full flex  flex-col md:flex-row gap-20'>
                      <div className='flex-2'>
                            <Image src='/images/short1.webp' alt='about' width={2000} height={1000} className='rounded-xl w-full h-full'/>
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
