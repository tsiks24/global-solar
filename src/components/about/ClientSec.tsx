import React from 'react'
import ClientCarousel from './ClientCarousel'


function ClientSec() {
  return (
    <div className='flex flex-col w-full justify-center items-center py-[50px]'>
        <div className='w-[95%] lg:w-[80%] flex flex-col'>
            <div className='py-4 text-[20px] text-center'><h1>Our Clients</h1></div>
             <div className='py-4 font-bold text-[40px] text-center'><h1>Trusted by industry innovators worldwide</h1></div>

          <ClientCarousel/>
        </div>

    </div>
  )
}

export default ClientSec