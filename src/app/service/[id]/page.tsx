import React from 'react'
import Image from 'next/image';
import { Proj } from '@/constants';
import PagesHero from '@/components/shared/PagesHero';






export default async function page(props: {
  params: Promise<{
    id: string
  }>
}) {

    const params = await props.params

     const { id } = params

     const serv = Proj.find(item => item.id === id);

   
return ( 
  
     <div className=' w-full flex justify-center flex-col items-center'>

         <div className='h-[400px] w-full'> 
        <div className='w-full'>
                <PagesHero name={serv?.name || ''}/>
        </div>
      </div>
      <div className='flex justify-start  flex-col w-[95%] lg:w-[80%]'>
              <h1 className='text-[20px] md:text-[40px] font-bold text-green-600'>{serv?.name}</h1>
              <div className='w-full flex flex-col md:flex-row gap-10'>
                        <div className='flex-1 '>
                            <Image src={serv?.source || ''}
                            alt='image'
                            width={500}
                            height={500}
                            className='w-[50px] h-[50px] rounded-xl'
                            >

                            </Image>
                        </div>
                        <div className='flex-1'>
                            {serv?.desc}
                        </div>
              </div>
      </div>
         
     </div>
)
}




