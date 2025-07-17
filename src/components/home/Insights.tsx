import React from 'react'
import Btn from '../shared/Btn'
import { News } from '@/constants'
import Image from 'next/image'

function Insights() {
  return (
    <div className='flex flex-col justify-center items-center w-full py-[50px]'>
          <div className='py-4 font-bold text-[20px] md:text-[40px]'><h1>Green Insights</h1></div>
          <div className='py-4'><h1>Explore how Global Solar transforms industries, communities, and the planet. </h1></div>
        <div className='flex flex-col gap-5 md:flex-row w-[95%] lg:w-[80%] '>
             {News.map((s, y) => (
               <div key={y} className='bg-green-950 shadow-xl shadow-green-950 flex-1 p-5 cursor-pointer'>
                <div>
                    <Image alt='Insights' src={s.src} width={1000} height={500} className='h-[200px] w-full'/>
                   </div>
                   <div className='p-2'><h1 className='text-[20px] text-[#6bd408] font-bold'>{s.name}</h1></div>
                   <div className='p-2'><h1 className='text-white'>{s.exerpt}</h1></div>
                   <Btn href='/resource' text='Read More'/>
               </div>        
                ))}
        </div>
    </div>
  )
}

export default Insights