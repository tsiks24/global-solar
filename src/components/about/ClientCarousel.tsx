'use client'

import React from 'react'
import { clientsData } from '@/constants';
import Slider from 'react-slick';
import  "slick-carousel/slick/slick.css"
import  "slick-carousel/slick/slick-theme.css"
import Image from 'next/image';


const settings = {
    dots:false, 
    infinite:true, 
    speed:500,   
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false,
    slidesToShow:4,
    slidesToScroll:1 ,
    responsive:[
      
      {
      breakpoint:1400,
      settings:{
        slidesToShow:3,
        slidesToScroll:1  
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

function ClientCarousel() {
  return (

                   <Slider {...settings}>
                              {clientsData.slice().reverse().map((p,id)=>{

                   return(
                    
                       
                        <div  key={id} className=''>
                                      
                             
                                <Image alt="icon" src={p.src} width={2000} height={2000} className='h-[200px] w-[230px]' ></Image>
                            
                    
                           </div>
                    
                     
                   );
               })}  
                   </Slider>
                 
   
  )
}

export default ClientCarousel