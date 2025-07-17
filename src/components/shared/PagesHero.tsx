import React from 'react'
import Vertical from './Vertical';


interface Props {
    name:string;
    
}



const PagesHero= ({name}:Props)=> {
  return (
       <div className='relative'>
            <div className='flex mt-[-120px] absolute  flex-col w-full h-[300px] md:h-[400px] bg-cover bg-no-repeat bg-center ' style={{backgroundImage:'url(/long1.png)'}}>
       
        <Vertical/>
        <div className='w-full h-full absolute  top-0 opacity-50 bg-green-950 z-10'></div>
        <div className='w-full h-full'><h1 className='  text-[40px] top-[40%] w-full text-center  absolute font-bold z-12 text-white'>{name}</h1></div>
    </div>
       </div>
          

    
  )
}

export default  PagesHero
