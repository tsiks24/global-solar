import React from 'react'
import Image from 'next/image'
import { BiArrowToRight } from 'react-icons/bi'

interface Props {
    
    src:string;
    name:string;
    exerpt:string;

}



const PostCard = ({src,name,exerpt}:Props) =>{
  return (
    <div className='w-full cary flex flex-col p-[40px] hover:bg-green-700'>
      <div>
         <Image alt="icon" src={src} width={200} height={200} className='h-[100px] w-[100px]' ></Image>
      </div>
        <div>
          <h1 className='text-[20px] font-bold pb-[10px]'>{name}</h1>
        </div>
      <div>
          <p className='text-[16px] pb-[10px]'>{exerpt}</p>
      </div>

         <hr className='h-[2px]  border-none w-full bg-[#10e910]' />

       <div className='w-full h-full flex flex-row justify-start reda pt-[10px]'>
           <div className=''><p className='text-[16px] read '>Read More</p></div>
           <div className='line'><hr className='h-[2px] border-none mt-[20px]  ml-[10px] w-[100px] bg-[#10e910]' /></div>
           <div className='p-2 ica'><BiArrowToRight className='h-[25px] w-[25px] '/> </div>
       </div>

    </div>
  )
}

export default PostCard