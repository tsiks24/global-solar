"use client"
import { useRouter } from 'next/navigation'

import React from 'react'
import { BiArrowToRight } from 'react-icons/bi';

interface Props{
    id:string;
}

function PostButton({id}:Props) {

    const router = useRouter()
  
    function handleClick(){
        router.push(`/posts/${id}`)
    }


    return (
    
    <button onClick={handleClick} className='  cursor-pointer'>
             <div className='w-full h-full flex flex-row justify-start reda pt-[10px]'>
       <div className=''><p className='text-[16px] read '>Read More</p></div>
       <div className='line'><hr className='h-[2px] border-none mt-[20px]  ml-[10px] w-[100px] bg-[#10e910]' /></div>
       <div className='p-2 ica cursor-pointer'><BiArrowToRight className='h-[25px] w-[25px] '/> </div>
                 </div>
    </button>
  )
}

export default PostButton