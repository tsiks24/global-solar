'use client'

import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navLinks } from '@/constants'
import Btn from '../Btn'
import { APP_NAME } from '@/lib/constants'
import SideNav from './SideNav'


  



const Navbar = () => {
  
const [isScrolled, setIsScrolled] = useState(false);

const handleScroll = () => {
    setIsScrolled(window.scrollY > 60); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
 
 

  return (
    <header id='navbar ' className=''>
        <nav  className={` flex flex-col justify-center items-center py-[20px] w-full  z-[80] transition-all duration-100 ${isScrolled ? 'fixed z-[100] bg-green-950 transition-transform' : 'relative bg-transparent  '} `}>
      
         <div className=' lg:w-[80%] w-[95%] flex flex-row justify-between h-[80px] items-center '>

          <div className=''>
            <Link href={'/'}>
                  <Image className='w-[130px] h-[80px]' src={'/soa.png'} width={2000} height={100} alt={`${APP_NAME} logo`}></Image>
            </Link>
           
          </div>
                         
             <div className={`md:flex  justify-center flex-row transition-all hidden duration`}
                  >
                 
                 {navLinks.map((link,id)=>{

                   return(
                     <Link key={id} href={link.href} 
                    
                     className={ "py-4 px-4 text-[18px] text-white hover:py-4 "}
                     >
                     {link.name}
                     </Link>
                   );
          })}
               </div> 
                       
              
                
                <div className='md:hidden '>
                 
                   <SideNav/>
                    
              
                </div> 

               
                
                

                

               


               <div className='md:w-[20%] hidden  md:flex justify-end'>
                    <Btn href='/about' text='Get A Quote'/>
                </div>  
                         </div>
                        
       </nav>
    </header>
    
  )
}

export default Navbar 