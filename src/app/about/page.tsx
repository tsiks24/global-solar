import React from 'react'
import PagesHero from '@/components/shared/PagesHero'
import MainSec from '@/components/about/MainSec'
import Values from '@/components/about/Values'
import ClientSec from '@/components/about/ClientSec'
import CallToAction from '@/components/about/CallToAction'




function page() {
  return (
    <div className='w-full flex flex-col'>
      <div className='h-[400px] w-full'> 
        <div className='w-full'>
                <PagesHero name='About'/>
        </div>
      </div>
         <MainSec/>
         <Values/>
         <CallToAction/>
         <ClientSec/>
         
    </div>
    
  )
}

export default page