import * as React from 'react'
import Link from 'next/link'
import { X, ChevronRight, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'


export default function SideNav (){
 
  return (
    <Drawer  direction='right'>
      <DrawerTrigger className='header-button flex items-center !p-2   '>
        <LayoutGrid className='h-5 w-5 mr-1 text-white' />
      
      </DrawerTrigger>
      <DrawerHeader>
              <DrawerTitle className='flex items-center'>
                
               
              </DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
      <DrawerContent className='w-[350px] mt-0 top-0 bg-green-950 text-white z-100'>
        <div className='flex flex-col h-full'>
         
          <div className=' text-foreground flex items-center justify-between  '>
           
            <DrawerClose asChild>
              <Button size='icon' className='mr-2'>
                <X className='h-5 w-5 text-white hover:text-green-950' />
                <span className='sr-only'>Close</span>
              </Button>
            </DrawerClose>
          </div>

        
          <div className='flex-1 overflow-y-auto'>
            
            <nav className='flex flex-col pl-[40px] pt-[40px] text-white'>
              {navLinks.map((l,id) => (
                <DrawerClose asChild key={id}>
                  <Link
                    href={l.href}
                    className={`flex items-center justify-between item-button`}
                  >
                    <span>{l.name}</span>
                    <ChevronRight className='h-4 w-4' />
                  </Link>
                </DrawerClose>
              ))}
            </nav>
          </div>

        
        
        </div>
      </DrawerContent>
    </Drawer>
  )
}