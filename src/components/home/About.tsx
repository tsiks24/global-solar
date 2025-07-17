import React from 'react'
import Image from 'next/image'
import Btn from '../shared/Btn'
import { IoIosCheckmark } from 'react-icons/io'
import { APP_NAME } from '@/lib/constants'


function About() {
  return (
    <div className='relative flex flex-col w-full justify-center items-center pt-[20px] md:pt-[100px]'>
         <div className='flex md:flex-row flex-col lg:w-[80%] w-[95%]  gap-10'>
                 <div className='flex-1 flex justify-center items-center'>
                      <Image alt={`${APP_NAME} about section`} className='h-auto w-full' src="/images/short1.webp" height={2000} width={4000}></Image>
                 </div>
                 <div className='flex-1'>
                     <div className='flex flex-col w-full '>
                            <h1 className='md:text-[40px]  text-[20px] pb-[10px] font-semibold '>Bringing Effective Green Energy Solutions</h1>
                            <p className='text-[16px] pb-[10px]'>We take pride in our unwavering commitment to excellence in the field of solar energy. Our reputable team is comprised of highly skilled professionals dedicated to providing you with the best solar solutions.</p>
                            <div className='py-[30px]'>

                          <div className='flex items-center gap-2 py-[4px]'> 
                              <div className='p-[4px] bg-[#6bd408] rounded-full hover:bg-green-950 hover:text-[#6bd408]'><IoIosCheckmark className='h-[20px] w-[20px]'/></div>
                              
                              <div><h1 className='md:text-[18px] text-[16px] '>Global Solar Pvt Ltd (2014 Zimbabwe)</h1></div>
                            </div>

                          <div className='flex items-center py-4 gap-2'> 
                              <div className='p-[4px] bg-[#6bd408] rounded-full hover:bg-green-950 hover:text-[#6bd408]'><IoIosCheckmark className='h-[20px] w-[20px]'/></div>
                              
                              <div><h1 className='md:text-[18px] text-[16px]'>Global Solar Zambia (2016 Zambia)</h1></div>
                            </div>

                           <div className='flex items-center gap-2 py-4'> 
                              <div className='p-[4px] bg-[#6bd408] rounded-full hover:bg-green-950 hover:text-[#6bd408]'><IoIosCheckmark className='h-[20px] w-[20px]'/></div>
                              
                              <div><h1 className='text-[18px]text-[16px] '>Solar Worldwide (2017 Malawi)</h1></div>
                            </div>

                              
                            </div>
                            <div><Btn href="/about" text='About Us' /></div>
                            
                           
                     </div>
                 </div>
         </div>
    </div>
  )
}

export default About
