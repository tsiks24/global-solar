import React from 'react';
import { Proj } from '@/constants';
import Image from 'next/image';
import PagesHero from '@/components/shared/PagesHero';

interface ParamsType {
  params: {
    idx: string;
  };
}

const Page: React.FC<ParamsType> = ({ params }) => {
  const { idx } = params;

  const newsItem = Proj.find(item => item.id === idx);

  return (
    <div className='flex flex-col bg-green-200'>
      <div className='w-full h-[400px] bg-green-200'>
        <div className='w-full'>
          <PagesHero name={newsItem?.name || ''} />
        </div>
      </div>

      <div className='w-full flex justify-center flex-col items-center'>
        <div className='flex pb-[70px] flex-col w-[80%]'>
          <h1 className='text-[20px] md:text-[40px] font-bold text-green-800'>{newsItem?.name}</h1>
          <div className='w-full flex flex-col md:flex-row gap-10'>
            <div className='flex-1 bg-white p-[20px]'>
              <Image
                src={newsItem?.source || ''}
                alt='image'
                width={500}
                height={500}
                className='w-[50px] h-[50px] rounded-xl p-2'
              />
              <div className='p-2'>
                {newsItem?.desc}
              </div>
            </div>
            <div className='flex-1'>
              <div className='text-[20px] md:text-[40px] font-bold text-green-800'>
                <h1>Other Services</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;