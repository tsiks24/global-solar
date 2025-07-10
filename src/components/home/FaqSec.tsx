import React from 'react'
import Accordion from '../shared/Faq';

const faqs = [
  {
    question: "What is Solar Shop, and how will it help me?",
    answer:
      "Solar Shop provides various solar products and solutions to help customers harness renewable energy. It's suitable for homeowners and businesses looking to reduce energy costs and environmental impact.",
    isAccordionOpen: true
  },
  {
    question: "Is Solar Shop free to use?",
    answer:
      "While browsing and accessing information on Solar Shop is free, purchasing solar products and services requires payment. We offer competitive pricing and financing options.",
    isAccordionOpen: false
  },
  {
    question: "Can I use Solar Shop products for my home or business?",
    answer:
      "Yes, Solar Shop products are designed for both residential and commercial use, allowing you to tailor your solar energy solution to your specific needs.",
    isAccordionOpen: false
  },
  {
    question: "How can I get help if I have questions about solar products?",
    answer:
      "You can reach out to our customer support team via the contact form on our website or join our community forum for assistance from other solar enthusiasts.",
    isAccordionOpen: false
  }
];




function FaqSec() {
  return (
    <div className='w-full flex flex-col md:flex-row md:mb-[-180px] '>
      <div className='hidden bg-fixed bg-no-repeat flex-[1.8] h-[850px] relative  md:block'  style={{backgroundImage:'url(/soba.webp)'}}>
          <div className='w-full h-full absolute  top-0 opacity-50 bg-green-950 z-10'></div> 
          
        </div>
        <div className='flex-2 flex p-[40px]  flex-col items-center  bg-green-200'>
                    <div className='md:w-[80%] w-full'>
                   <h1 className='text-[20px] md:text-[40px] pb-[10px]  pl-[40px]  font-semibold'>Frequently Asked Questions</h1>
                  <p className='text-[16px] pb-[10px] pl-[40px] '>We take pride in our unwavering commitment to excellence in the field of solar energy. Our reputable team is comprised of highly skilled professionals dedicated to providing you with the best solar solutions.</p>
                    <div className="flex flex-col gap-4 divide-y">
          {faqs.map((d, i) => (
            <Accordion
              answer={d.answer}
              question={d.question}
              isAccordionOpen={d.isAccordionOpen}
              key={i}
            />
          ))}
        </div>
                  </div>

                 
        </div>
        <div className='md:hidden bg-fixed bg-no-repeat flex-[1.8] h-[800px] relative  '  style={{backgroundImage:'url(/soba.webp)'}}>
          <div className='w-full h-full absolute  top-0 opacity-50 bg-green-950 z-10'></div> 
          
        </div>
    </div> 
  )
}

export default FaqSec