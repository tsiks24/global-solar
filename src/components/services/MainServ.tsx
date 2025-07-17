import React from 'react'
import Counter from '../shared/Counter'
import { servCount, Proj } from '@/constants'
import { Sun } from 'lucide-react'


function MainServ() {
  return (
    <div  className='flex flex-col w-full justify-center items-center md:mt-[-50px] mt-[-200px] '>
        <div className='flex flex-col w-[95%] lg:w-[80%] '>
               <div className='py-4 text-[18px] md:text-[20px]'><h1>Our Services</h1></div>
                 <div className='flex  flex-col  md:flex-row w-full'>
                    <div className='flex-1'>
                      <div className='py-4 font-bold text-[20px] md:text-[40px]'><h1>Revolutionizing Energy for Tomorrow’s World</h1></div>
                        <div className='py-4'><h1>At Global Solar, We design and implement clean energy systems that help people, businesses and the planet thrive efficiently, sustainably and intelligently.</h1></div>
                    </div>
                    <div className='flex-1 flex flex-row py-[10px] md:py-0 md:justify-end gap-10'>
                     {servCount.map((d, i) => (
                                 <Counter key={i} name={d.name} endNumber={d.count}/>
                               ))}
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-5'>
                       {Proj.map((a, b) => (
                                 <div key={b} className='p-8 text-green-900 bg-[#6bd408] flex-1 rounded-sm cursor-pointer'>
                                    <div className='p-2'><Sun className='h-10 w-10'/></div>
                                     <div className='p-2 font-bold text-[17px]'><h1>{a.name}</h1></div>
                                     <div className='p-2'><h1>{a.desc}</h1></div>
                                 </div>
                               ))}
                </div>

        </div>
    </div>
  )
}

export default MainServ
