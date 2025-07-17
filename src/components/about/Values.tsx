import React from 'react'


function Values() {
  return (
    <div className='flex flex-col w-full justify-center items-center py-[50px]'>
           <div className='flex flex-col w-[95%] lg:w-[80%]'>
            <div className='py-4 text-[18px] md:text-[20px] text-center'><h1>Our Values</h1></div>
             <div className='py-4 font-bold text-[20px] md:text-[40px] text-center'><h1>Clean Energy, Clear Commitment</h1></div>
              <div className='py-2 text-center'><h1>To increase access to sustainable renewable
                                        energy and energy efficiency technologies to all
                                          citizens of Africa</h1></div>
             <div className='flex flex-col md:flex-row pt-10 w-full gap-5 md:gap-20'>
                <div className='flex-1 relative bg-cover bg-no-repeat rounded-xl' style={{backgroundImage:'url(/short2.png)'}}>
                  
                   <div className='md:absolute bottom-5 left-5 right-[-6px] rounded-xl border-white border-[10px]  text-[#6bd408] bg-black p-10'> <h1 className='text-[20px]'>Innovation in product and service quality</h1></div>
                </div>
                <div className='flex-1 flex-col flex gap-5 '>
                     <div className='flex-1 flex flex-col md:flex-row gap-5'>
                          <div className='flex-1 p-5 rounded-xl border-[5px] border-[#6bd408]'>
                            <h1 className='text-[18px] font-bold py-2'>Research</h1>
                           <h1>Continuous research and development in products a processes</h1>
                          </div>
                           <div className='flex-1 p-5 rounded-xl border-[5px] border-[#6bd408]'>
                             <h1 className='text-[18px] font-bold py-2'>Quality Products</h1>
                            <h1>User and eco friendly products and services</h1>
                          </div>
                     </div>

                     <div className='flex-1 flex flex-col md:flex-row gap-5'>
                          <div className='flex-1 p-5 rounded-xl border-[5px] border-[#6bd408]'>
                            <h1 className='text-[18px] font-bold py-2'>Service Delivery</h1>
                             <h1>Timely service delivery, and consistent customerrelationship management</h1>
                          </div>
                           <div className='flex-1 p-5 rounded-xl border-[5px] border-[#6bd408]'>
                              <h1 className='text-[18px] font-bold py-2'>Sustainibility</h1>
                              <h1>Environmental sustainability and Corporate SocialResponsibility (CSR)</h1>
                          </div>
                     </div>
                     

                </div>
             </div>

           </div>
    </div>
  )
}

export default Values