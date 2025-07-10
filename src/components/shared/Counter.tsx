'use client'

import React from 'react'

import  { useEffect, useState } from 'react';

interface Props {
    name:string;
    endNumber:number;
    

}


const Counter = ({name, endNumber}:Props) => {
      const [count, setCount] = useState(0);
      
        useEffect(() => {
    let timer: NodeJS.Timeout;

    if (count < endNumber) {
      timer = setTimeout(() => {
        setCount((prevCount) => Math.min(prevCount + 1, endNumber));
      }, 100); // Adjust the speed of counting here
    }

    return () => clearTimeout(timer);
  }, [count, endNumber]);


  return (
    <div >
                 
    <div className='flex flex-col md:justify-center md:items-center h-full  w-full gap-5 px-[5px]'>
    <h1 className='md:text-[40px] lg:text-[80px] text-[20px] font-semibold text-green-950'>{count}+
      </h1>
      <h1 className='md:text-[16px] text-[12px] text-green-950'>{name}</h1>
      
    </div>
       
   
    </div>
    
  )
}

export default Counter