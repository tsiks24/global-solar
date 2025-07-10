import React from 'react'
import PagesHero from '@/components/shared/PagesHero'

function page() {
  return (
   <div className='w-full flex flex-col'>
      <div className='h-[400px] w-full'> 
        <div className='w-full'>
                <PagesHero name='Services'/>
        </div>
      </div>
    
    </div>
  )
}

export default page