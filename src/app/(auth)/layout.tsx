import { APP_COPYRIGHT } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col items-center min-h-screen highlight-link bg-green-100 '>
      <header className='mt-8'>
        <Link href='/'>
          <Image
            src='/so.png'
            alt='logo'
           className='w-[150px] h-[30px]'  width={2000} height={100}
            priority
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Link>
      </header>
      <main className='mx-auto max-w-sm min-w-80 p-4'>{children}</main>
      <footer className=' flex-1 mt-8  bg-green-950 w-full flex flex-col gap-4 items-center p-8 text-sm'>
        <div className='flex justify-center space-x-4'>
          <Link href='/page/conditions-of-use'>Conditions of Use</Link>
          <Link href='/page/privacy-policy'> Privacy Notice</Link>
          <Link href='/page/help'> Help </Link>
        </div>
        <div>
          <p className='text-gray-400'>{APP_COPYRIGHT}</p>
        </div>
      </footer>
    </div>
  )
}