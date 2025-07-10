import React from 'react'
import Link from 'next/link'

interface Props {
    href:string;
    text:string;
    

}


const Btn = ({href, text}:Props) => {
  return (
    <div>
                  <Link href={href}>
                              <div className='card   bg-white '>
        
                        <p className='text-[#101f02] absolute font-semibold left-[20%] top-[30%] z-10'>{text}</p>
                        <div className='overlay'></div>
                        <div className='overlay2'></div>
                        
      
                         </div>
                   </Link>

       
   
    </div>
    
  )
}

export default   Btn