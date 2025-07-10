import React from 'react'
import ShopCard from '@/components/shop/ShopCard'
import { getAllCategories, getProductsForCard, getProductsByTag } from '@/lib/actions/products.actions'
import { toSlug } from '@/lib/utils'
import ProductSlider from '@/components/shared/product/ProductSlider'
import { CardContent } from '@/components/ui/card'
import BrowsingHistoryList from '@/components/shared/BrowsingHistoryList'



async function page() {
 
  const featured = await getProductsByTag({tag:'featured'})
   const categories = (await getAllCategories()).slice(0, 4)
     const newArrivals = await getProductsForCard({
       tag: 'new-arrival',
       limit: 4,
     })
     const featureds = await getProductsForCard({
       tag: 'featured',
       limit: 4,
     })
     const mostBought = await getProductsForCard({
       tag: 'most-bought',
       limit: 4,
     })
     const cards = [
       {
         title: 'Categories to explore',
         link: {
           text: 'See More',
           href: '/search',
         },
         items: categories.map((category) => ({
           name: category,
           image: `/images/${toSlug(category)}.webp`,
           href: `/search?category=${category}`,
         })),
       },
       {
         title: 'Explore New Products',
         items: newArrivals,
         link: {
           text: 'View All',
           href: '/search?tag=new-arrival',
         },
       },
       {
         title: 'Discover Most Bought',
         items: mostBought,
         link: {
           text: 'View All',
           href: '/search?tag=new-arrival',
         },
       },
       {
         title: 'Featured Products',
         items: featureds,
         link: {
           text: 'Shop Now',
           href: '/search?tag=new-arrival',
         },
       },
     ]
     
  return (
    <div className='flex flex-col w-full justify-center items-center '>
      
     
     
    
        <div className='md:p-4 md:space-y-4 lg:w-[80%]  w-[95%]'>
             <ShopCard cards={cards} />

             <CardContent className='p-4 items-center gap-3'>
              <ProductSlider title={"Featured Products"} products={featured}></ProductSlider>
             </CardContent>
        </div>
           
  
     <div className='p-4 bg-background'>
     <BrowsingHistoryList />
   </div>
  
    </div>
  )
}

export default page