import { SearchIcon } from 'lucide-react'
   import { Input } from '@/components/ui/input'
   import { getAllCategories } from '@/lib/actions/products.actions'

   import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
   } from '@/components/ui/select'
   import { APP_NAME } from '@/lib/constants'
   const categories = await getAllCategories()

   
   export default async function Search() {
     return (
       <form
         action='/search'
         method='GET'
         className='flex justify-center items-center h-10 '
       >
         <Select  name='category ' >
           <SelectTrigger className='w-auto h-full  border-none  bg-gray-100 text-black rounded-r-none '>
             <SelectValue placeholder='All' />
           </SelectTrigger>
           <SelectContent position='popper'>
             <SelectItem value='all'>All</SelectItem>
             {categories.map((category) => (
               <SelectItem key={category} value={category}>
                 {category}
               </SelectItem>
             ))}
           </SelectContent>
         </Select>
         <Input
           className='flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-[36px]'
           placeholder={`Search Site ${APP_NAME}`}
           name='q'
           type='search'
         />
         <button
           type='submit'
           className='bg-primary h-[36px] text-white rounded-s-none rounded-e-md  px-3 py-2 '
         >
           <SearchIcon className='w-6 h-6' />
         </button>
       </form>
     )
   }