import React from 'react'
import Btn from '../shared/Btn'

function Banner() {
  return (
        <div className='flex w-full flex-col justify-end items-end mb-[-180px] relative z-40'>
        <div className='flex flex-col w-[90%] justify-center items-center bg-green-300 py-[10px]'>
               <div className='flex justify-center flex-col gap-10 w-full p-[40px]  '>
                   
                     <h1 className='text-[20px] md:text-[40px] md:pb-[10px] font-semibold '>Bringing Effective Green Energy Solutions</h1>
                            <p className='text-[16px] md:pb-[10px]'>We take pride in our unwavering commitment to excellence in the field of solar energy. Our reputable team is comprised of highly skilled professionals dedicated to providing you with the best solar solutions.</p>
                            <div><Btn href="/" text='Our Services' /></div>
                        

                   
               </div>
        </div>
    </div>
  )
}

export default Banner