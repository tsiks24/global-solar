import { Card, CardContent } from '@/components/ui/card'

   import { getProductBySlug,  getRelatedProductsByCategory } from '@/lib/actions/products.actions'
   import BrowsingHistoryList from '@/components/shared/BrowsingHistoryList'
   import AddToCart from '@/components/shared/product/add-to-cart'
   import { generateId,round2 } from '@/lib/utils'
   import ProductPrice from '@/components/shared/product/ProductPrice'

  
   import ProductGallery from '@/components/shared/product/ProductGallery'
   import { Separator } from '@/components/ui/separator'
   import ProductSlider from '@/components/shared/product/ProductSlider'
   import Rating from '@/components/shared/product/Rating'

   export async function generateMetadata(props: {
     params: Promise<{ slug: string }>
   }) {
     const params = await props.params
     const product = await getProductBySlug(params.slug)
     if (!product) {
       return { title: 'Product not found' }
     }
     return {
       title: product.name,
       description: product.description,
     }
   }

   export default async function ProductDetails(props: {
     params: Promise<{ slug: string }>
     searchParams: Promise<{ page: string; color: string; size: string }>
   }) {
     const searchParams = await props.searchParams

     const { page, } = searchParams

     const params = await props.params

     const { slug } = params

     const product = await getProductBySlug(slug)

     const relatedProducts = await getRelatedProductsByCategory({
       category: product.category,
       productId: product._id,
       page: Number(page || '1'),
     })

     return (
       <div className='py-[80px] flex flex-col justify-center items-center w-full'>
         <section className='w-[95%] lg:w-[80%]'>
           <div className='grid grid-cols-1 md:grid-cols-5  '>
             <div className='col-span-2'>
               <ProductGallery images={product.images} />
             </div>
             

          <div className='flex w-full flex-col gap-2 md:p-5 col-span-2'>
              <div className='flex flex-col gap-3'>
                  <p className='p-medium-16 rounded-full bg-grey-500/10   text-grey-500'>
                   Brand {product.brand} {product.category}
                 </p>
                 <h1 className='font-bold text-lg lg:text-xl'>
                   {product.name}
                 </h1>
                 <div className='flex items-center gap-2'>
                   <span>{product.avgRating.toFixed(1)}</span>
                   <Rating rating={product.avgRating} />
                   <span>{product.numReviews} ratings</span>
                 </div>
                 <Separator />
                 <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                   <div className='flex gap-3'>
                     <ProductPrice
                       price={product.price}
                       listPrice={product.listPrice}
                       isDeal={product.tags.includes('todays-deal')}
                       forListing={false}
                     />
                   </div>
                 </div>
               </div>
               <div>
                 
               </div>
               <Separator className='my-2' />
               <div className='flex flex-col gap-2'>
                 <p className='p-bold-20 text-grey-600'>Description:</p>
                 <p className='p-medium-16 lg:p-regular-18'>
                   {product.description}
                 </p>
               </div>
             </div>
             <div>
               <Card className='shadow-none'>
                 <CardContent className='p-4 flex flex-col  gap-4'>
                   <ProductPrice price={product.price} />

                   {product.countInStock > 0 && product.countInStock <= 3 && (
                     <div className='text-destructive font-bold'>
                       {`Only ${product.countInStock} left in stock - order soon`}
                     </div>
                   )}
                   {product.countInStock !== 0 ? (
                     <div className='text-green-700 text-xl'>In Stock</div>
                   ) : (
                     <div className='text-destructive text-xl'>
                       Out of Stock
                     </div>
                   )}

                   {product.countInStock !== 0 && (
                        <div className='flex justify-center items-center'>
                          <AddToCart
                            item={{
                              clientId: generateId(),
                              product: product._id,
                              countInStock: product.countInStock,
                              name: product.name,
                              slug: product.slug,
                              category: product.category,
                              price: round2(product.price),
                              quantity: 1,
                              image: product.images[0],
                            }}
                          />
                        </div>
                      )}
                 </CardContent>
               </Card>

                
             </div>
           </div>

          
         </section>

         <section className='w-[95%] lg:w-[80%] mt-10'>
           <ProductSlider
             products={relatedProducts.data}
             title={`Most Bought in ${product.category}`}
           />
         </section>
      
      <section>
     <BrowsingHistoryList className='w-[95%] lg:w-[80%] mt-10' />
     </section>

       </div>
     )
   }