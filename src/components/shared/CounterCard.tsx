import React from 'react'
import { counteData } from '@/constants'
import Counter from '../shared/Counter'

function CounterCard() {
  return (
    <div className='flex w-full flex-col md:justify-end justify-center items-center md:items-end mt-[-140px] md:mt-[-230px] relative z-40'>
        <div className='flex flex-col w-[95%] md:w-[90%] justify-center items-center bg-green-400 py-[20px]'>
              <div className='flex justify-between  px-[20px]  w-full flex-row '>
                     {counteData.map((con,id) =>(

                         <div key={id}>
                               <Counter name={con.name} endNumber={con.count} /> 
                         </div>

                     ))}
               </div>
        </div>
    </div>
  )
}

export default CounterCard