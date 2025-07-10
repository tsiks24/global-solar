import * as React from 'react'
import Link from 'next/link'
import { X, ChevronRight, UserCircle, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SignOut } from '@/lib/actions/user.actions'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { auth } from '@/auth'

export default async function Sidebar({
  categories,
}: {
  categories: string[]
}) {
  const session = await auth()

  return (
    <Drawer  direction='right'>
      <DrawerTrigger className='header-button flex items-center !p-2  '>
        <LayoutGrid className='h-5 w-5 mr-1' />
      
      </DrawerTrigger>
      <DrawerContent className='w-[350px] mt-0 top-0 bg-green-950 text-white'>
        <div className='flex flex-col h-full'>
          {/* User Sign In Section */}
          <div className=' text-foreground flex items-center justify-between  '>
            <DrawerHeader>
              <DrawerTitle className='flex items-center'>
                <UserCircle className='h-6 w-6 mr-2 text-white' />
                {session ? (
                  <DrawerClose asChild>
                    <Link href='/account'>
                      <span className='text-lg font-semibold text-white'>
                        Hello, {session.user.name}
                      </span>
                    </Link>
                  </DrawerClose>
                ) : (
                  <DrawerClose asChild>
                    <Link href='/sign-in'>
                      <span className='text-lg font-semibold text-white'>
                        Hello, sign in
                      </span>
                    </Link>
                  </DrawerClose>
                )}
              </DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <DrawerClose asChild>
              <Button size='icon' className='mr-2'>
                <X className='h-5 w-5 text-white hover:text-green-950' />
                <span className='sr-only'>Close</span>
              </Button>
            </DrawerClose>
          </div>

          {/* Shop By Category */}
          <div className='flex-1 overflow-y-auto'>
            <div className='p-4 border-b'>
              <h2 className='text-lg font-semibold text white'>Shop By Department</h2>
            </div>
            <nav className='flex flex-col pl-[40px] pt-[40px] text-white'>
              {categories.map((category) => (
                <DrawerClose asChild key={category}>
                  <Link
                    href={`/search?category=${category}`}
                    className={`flex items-center justify-between item-button`}
                  >
                    <span>{category}</span>
                    <ChevronRight className='h-4 w-4' />
                  </Link>
                </DrawerClose>
              ))}
            </nav>
          </div>

          {/* Setting and Help */}
          <div className='border-t flex flex-col '>
            <div className='p-4'>
              <h2 className='text-lg font-semibold text-white'>Help & Settings</h2>
            </div>
            <DrawerClose className='pl-[40px]' asChild>
              <Link href='/account' className='item-button'>
                Your account
              </Link>
            </DrawerClose >{' '}
            <DrawerClose  className='pl-[40px]' asChild>
              <Link href='/page/customer-service' className='item-button'>
                Customer Service
              </Link>
            </DrawerClose>
            {session ? (
              <form action={SignOut} className='w-full pl-[40px]'>
                <Button
                  className='w-full justify-start item-button text-base text-white'
                  variant='ghost'
                >
                  Sign out
                </Button>
              </form>
            ) : (
              <Link href='/sign-in' className='item-button text-white pl-[40px] pb-[20px]'>
                Sign in
              </Link>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}