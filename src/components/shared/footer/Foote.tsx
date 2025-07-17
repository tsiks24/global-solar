import React from 'react'
import Link from 'next/link'
import { usefulLinks } from '@/constants'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa'
import { BiPhoneCall,BiMapPin,BiMessage } from 'react-icons/bi'

import { FaDotCircle } from 'react-icons/fa'
import { shopLinks,quickLinks } from '@/constants'



function Foote() {
  return (
    <div className='bg-green-100'>
    <div className=" w-full pb-5  pt-[50px] ">
    <div className="h-full w-full flex flex-col items-center  justify-center">

      <div className='flex flex-wrap md:flex-row flex-col w-full '>

             
               <div className='flex-1 px-[20px] border-r border-gray-200'>
                         <div className="col-span-1 text-center md:text-start md:justify-start md:items-start flex flex-col justify-center items-center ">
                            <h1 className="text-green-950 md:text-[30px] text-[20px] font-bold py-4" >Global Solar</h1>
                             <p className="text-green-950 pb-2 pt-4">
                            A global network that offers knowledge, tools, and resources for decision-makers and practitioners to enhance solar energy adoption and promote sustainable living in their communities.
                                    </p>
                      <div className='flex flex-row w-full gap-3 md:items-start md:justify-start items-center justify-center'>
                               <div className='border-gray-200 border p-2 cursor-pointer'><FaFacebook className='h-[25px] w-[25px] text-green-950'/></div>
                               <div className='border-gray-200 border p-2 cursor-pointer'><FaTwitter className='h-[25px] w-[25px] text-green-950'/></div>
                               <div className='border-gray-200 border p-2 cursor-pointer'><FaInstagram className='h-[25px] w-[25px] text-green-950'/></div>
                               <div className='border-gray-200 border p-2 cursor-pointer'><FaLinkedin className='h-[25px] w-[25px] text-green-950'/></div>
                        </div>
                          </div>
               </div>
               <div className='flex-3 flex justify-center flex-wrap  items-center px-[20px]'>
                <div className='flex flex-col w-full'>
                 
                      <div className="grid grid-cols-1 md:grid-cols-4  flex-wrap  pb-8">
        <div className="col-span-1 text-center md:text-start md:justify-start md:items-start flex flex-col justify-center items-center ">
          <h1 className="text-green-950 md:text-[30px] text-[20px] font-bold py-4" >Quick Links</h1>
               <div className="flex flex-col text-green-950">
            {quickLinks.map((link) => (
              <Link href={link.href} key={link.name} className="py-2">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:ml-12 text-center md:text-start">
          <h1 className="font-semibold text-green-950  md:text-[30px] text-[20px]   py-4 ">Useful Links</h1>
          <div className="flex flex-col text-green-950">
            {usefulLinks.map((link) => (
              <Link href={link.href} key={link.name} className="py-2">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

          <div className="col-span-1 text-center md:text-start">
          <h1 className="font-semibold text-green-950 py-4 md:text-[30px] text-[20px]  ">Shop</h1>
         <div className="flex flex-col text-green-950">
            {shopLinks.map((link) => (
              <Link href={link.href} key={link.name} className="py-2">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-1 text-center md:text-start">
          <h1 className="font-semibold  text-green-950 md:text-[30px] text-[20px] py-4  ">Contact </h1>
          <div className='flex flex-row w-full gap-2 py-2 justify-center items-center md:items-start md:justify-start'>
            <div className='border-gray-200 border p-2 cursor-pointer'><BiPhoneCall className='h-[25px] w-[25px] text-green-950'/></div>
            <p className="py-2 text-green-950">078565789 </p>
          </div>

          <div className='flex flex-row w-full gap-2 py-2 justify-center items-center md:items-start md:justify-start'>
            <div className='border-gray-200 border p-2 cursor-pointer'><BiMapPin className='h-[25px] w-[25px] text-green-950'/></div>
            <p className="py-2 text-green-950">Harare</p>
          </div>

          <div className='flex flex-row w-full gap-2 py-2 justify-center items-center md:items-start md:justify-start'>
            <div className='border-gray-200 border p-2 cursor-pointer'><BiMessage className='h-[25px] w-[25px] text-green-950'/></div>
            <p className="py-2 text-green-950">globalsolar@gmail.com </p>
          </div>
        </div>

      
      </div>
                </div>
       
               </div>
      </div>


      
                  <hr className='h-[1px] w-full bg-gray-200 border-none' />
      <div className="w-full px-[20px] text-center py-5 flex md:flex-row flex-col  justify-between items-center">
        
        <div className="py-8 text-green-950">&copy; 2025 All rights reserved | Global Solar Energy  </div>
        <div className='flex flex-row text-green-950 gap-2 items-center justify-center '>
          <p className='cursor-pointer'>Privacy Policy</p>
          <FaDotCircle className='h-[10px] w-[10px]' />
          <p className='cursor-pointer'>Terms of Service</p>

        </div>

       
      </div>
    </div>
  </div>
  </div>
  )
}

export default Foote