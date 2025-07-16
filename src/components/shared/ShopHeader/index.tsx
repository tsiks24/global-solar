
   import Link from 'next/link'
   import Image from 'next/image'
   import { APP_NAME } from '@/lib/constants'
   import Search from './Search'
   import data from '@/lib/data'
   import UserButton from './UserButton'
   import CartButton from './CartButton'
   import Sidebar from './siderbar'
   import { getAllCategories } from '@/lib/actions/products.actions'
   

   export default async function Header() {
   const categories = await getAllCategories()
     return (
       <header className='bg-green-950  text-white w-full flex flex-col justify-center items-center'>
         <div className='px-2 lg:w-[80%] w-[95%] py-[20px]'>
           <div className='flex items-center justify-between '>
             <div className='flex items-center'>
               <Link
                 href='/'
                 className='flex items-center m-1 cursor-pointer '
               >
                 <Image
                   src='/soa.png'
                   className='w-[100px] h-[100px]'  width={1000} height={1000}
                   alt={`${APP_NAME} logo`}
                 />
                
               </Link>
             </div>
             <div className='hidden md:block flex-1 max-w-xl'>
               <Search/>
             </div>
              <div className='flex '>
         <nav className='flex justify-center items-center gap-10 w-full'>
           

           <CartButton/>

           <UserButton/>
         </nav>
       </div>
           </div>
           <div className='md:hidden block py-2'>
           <Search/>
          </div>
         </div>
         <div className='flex justify-center items-center px-3 mb-[1px] w-full  bg-[#151515]'>
         
        <Sidebar categories={categories} />
           <div className='flex items-center justify-between flex-wrap gap-3 overflow-hidden lg:w-[80%] w-[95%]  max-h-[42px]'>
             {data.headerMenus.map((menu) => (
               <Link
                 href={menu.href}
                 key={menu.href}
                 className=' !p-2'
               >
                 {menu.name}
               </Link>
             ))}
           </div>
         </div>
       </header>
     )
   }