import React from 'react'

function Vertical() {
  return (
    <div className=' flex justify-evenly h-full absolute top-0 w-full'>

      <div className='relative w-[1px] h-full bg-[#a3a3a31a] overflow-hidden'>
        <div className='movingLin absolute w-[10px] h-[150px] bg-[#6bd408] opacity-100 rounded-[50%]'></div>
      </div>

       <div className='relative w-[1px] h-full bg-[#a3a3a31a] overflow-hidden'>
        <div className='movingLin1 absolute w-[10px] h-[150px] bg-[#6bd408] rounded-[50%]'></div>
      </div>

       <div className='relative w-[1px] h-full bg-[#a3a3a31a] overflow-hidden'>
        <div className='movingLin2 absolute w-[10px] h-[150px] bg-[#6bd408] rounded-[50%]'></div>
      </div>

       <div className='relative w-[1px] h-full bg-[#a3a3a31a] overflow-hidden'>
        <div className='movingLin3 absolute w-[10px] h-[150px] bg-[#6bd408]  rounded-[50%]'></div>
      </div>

    </div>
  )
}

export default Vertical
