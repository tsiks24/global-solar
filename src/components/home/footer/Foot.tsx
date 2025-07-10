import React from 'react'
import Link from 'next/link'
import { usefulLinks } from '@/constants'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa'
import { BiPhoneCall,BiMapPin,BiMessage } from 'react-icons/bi'
import Image from 'next/image'
import { FaDotCircle } from 'react-icons/fa'



function Foot() {
  return (
    <div className='bg-green-950'>
    <div className=" w-full pb-5  pt-[250px] ">
    <div className="h-full w-full flex flex-col items-center flex-wrap justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 w-[90%] lg:w-[80%] gap-6 pb-8">
        <div className="col-span-1 text-center md:text-start md:justify-start md:items-start flex flex-col justify-center items-center ">
           <Image className='w-[150px] h-[30px]  mt-[23px]' src={'/so.png'} width={2000} height={100} alt='logo'></Image>
          <p className="text-white pb-2 pt-4">
          A global network that provides knowledge,tools and resources for decision makers and practitioners to scale up sustainable living in their communities
          </p>
          <div className='flex flex-row w-full gap-3 md:items-start md:justify-start items-center justify-center'>
                  <div className='bg-green-900 p-2 cursor-pointer'><FaFacebook className='h-[25px] w-[25px] text-green-600'/></div>
                  <div className='bg-green-900 p-2 cursor-pointer'><FaTwitter className='h-[25px] w-[25px] text-green-600'/></div>
                  <div className='bg-green-900 p-2 cursor-pointer'><FaInstagram className='h-[25px] w-[25px] text-green-600'/></div>
                  <div className='bg-green-900 p-2 cursor-pointer'><FaLinkedin className='h-[25px] w-[25px] text-green-600'/></div>
          </div>
        </div>

        <div className="col-span-1 md:ml-12 text-center md:text-start">
          <h1 className="font-semibold  md:text-[30px] text-[20px] text-white   py-4">Useful Links</h1>
          <div className="flex flex-col text-white">
            {usefulLinks.map((link) => (
              <Link href={link.href} key={link.name} className="py-2">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      

        <div className="col-span-1 text-center md:text-start">
          <h1 className="font-semibold text-white md:text-[30px] text-[20px] py-4  ">Contact </h1>
          <div className='flex flex-row w-full gap-2 py-2 justify-center items-center md:items-start md:justify-start'>
            <div className='bg-green-500 p-2 cursor-pointer'><BiPhoneCall className='h-[25px] w-[25px] text-green-950'/></div>
            <p className="py-2 text-white">078565789</p>
          </div>

          <div className='flex flex-row w-full gap-2 py-2 justify-center items-center md:items-start md:justify-start'>
            <div className='bg-green-500 p-2 cursor-pointer'><BiMapPin className='h-[25px] w-[25px] text-green-950'/></div>
            <p className="py-2 text-white">Harare </p>
          </div>

          <div className='flex flex-row w-full gap-2 py-2 justify-center items-center md:items-start md:justify-start'>
            <div className='bg-green-500 p-2 cursor-pointer'><BiMessage className='h-[25px] w-[25px] text-green-950'/></div>
            <p className="py-2 text-white">globalsolar@gmail.com </p>
          </div>
        </div>

          <div className="col-span-1 text-center md:text-start">
          <h1 className="font-semibold text-white py-4 md:text-[30px] text-[20px]  ">Explore</h1>
          <Link href="/" className="text-white py-2">Privacy Policy</Link>
          <br />
          <Link href="/" className=" text-white py-2">Terms of Use</Link>
        </div>
      </div>
                  <hr className='h-[1px] w-[80%] bg-[#10e910] border-none' />
      <div className="w-[95%] lg:w-[80%] text-center py-5 flex md:flex-row flex-col  justify-between items-center">
        
        <div className="py-8 text-white ">&copy; 2025 All rights reserved | Global Solar Energy  </div>
        <div className='flex flex-row text-white gap-2 items-center justify-center '>
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

export default Foot