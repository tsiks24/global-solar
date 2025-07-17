import React from 'react'
import PagesHero from '@/components/shared/PagesHero'
import MainServ from '@/components/services/MainServ'
import CTA from '@/components/services/CTA'

function page() {
  return (
   <div className='w-full flex flex-col'>
      <div className='h-[400px] w-full'> 
        <div className='w-full'>
                <PagesHero name='Services'/>
        </div>
      </div>
      <MainServ/>
      <CTA/>
    
    </div>
  )
}

export default page