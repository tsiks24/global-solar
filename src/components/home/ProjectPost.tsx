'use client'

import React from 'react'
import { Proj } from '@/constants'
import Image from 'next/image';

import PostButton from '../posts/PostButton';
import Slider from 'react-slick';
import  "slick-carousel/slick/slick.css"
import  "slick-carousel/slick/slick-theme.css"


 const settings = {
    dots:false, 
    infinite:true, 
    speed:500,   
    autoplay:true,
    autoplaySpeed:5000,
    arrows:false,
    slidesToShow:3,
    slidesToScroll:1 ,
    responsive:[
      
      {
      breakpoint:1400,
      settings:{
        slidesToShow:2,
        slidesToScroll:2  
      }
      },
      {
      breakpoint:840,
      settings:{
        slidesToShow:1,
        slidesToScroll:1  
      }
      },
    ] 
  }
  

function ProjectPost() {

 
  


  return (
  <div className='w-full relative flex flex-col justify-center items-center pt-[20px] md:pt-[100px] '>
        <div className='flex flex-col lg:w-[80%] w-[95%] '>
           <div className='w-full justify-between flex flex-row'>
               <div>
                <h1 className='text-[20px] md:text-[40px] font-semibold pb-[10px]'>Solar Expertise You Can Trust</h1>
                  <p className='text-[16px] pb-[10px]'>Our dedication to solar energy excellence sets us apart. With a team of experienced professionals, we deliver innovative solar solutions tailored to your specific needs, ensuring reliability and efficiency in every project.

</p>
               </div>
               <div>
                   

               </div>

           </div>

            
                   <Slider {...settings}>
                              {Proj.slice().reverse().map((p,id)=>{

                   return(
                    
                       
                        <div  key={id} className='cary flex flex-col relative p-[40px] hover:bg-green-700'  style={{
                                      
                                  }}>
                             <div>
                                <Image alt="icon" src={p.source} width={200} height={200} className='h-[50px] w-[50px]' ></Image>
                             </div>
                               <div>
                                 <h1 className='text-[20px] font-bold pb-[10px]'>{p.name}</h1>
                               </div>
                             <div>
                                 <p className='text-[16px] pb-[10px]'>{p.desc}</p>
                             </div>
                       
                                <hr className='h-[2px]  border-none w-full bg-[#10e910]' />
                       
                         
                                  
                                  <PostButton id={p.id}/>
                                  
                              
                       
                           </div>
                    
                     
                   );
               })}  
                   </Slider>
                 
           
        </div>
   </div>
  )
}

export default ProjectPost