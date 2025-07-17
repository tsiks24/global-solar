'use client';

import BrowsingHistoryList from '@/components/shared/BrowsingHistoryList';
import ProductPrice from '@/components/shared/product/ProductPrice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useCartStore from '@/hooks/use-cart-store';
import { APP_NAME, FREE_SHIPPING_MIN_PRICE } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function CartPage() {
  const {
    cart: { items, itemsPrice },
    updateItem,
    removeItem,
  } = useCartStore();
  const router = useRouter();

  return (
    <div className='py-[80px] flex flex-col w-full justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4 w-[95%] lg:w-[80%]'>
        {items.length === 0 && (
          <Card className='col-span-4 rounded-none shadow-none border-none bg-green-100'>
            <CardHeader className='md:text-[40px] font-bold text-green-700 flex justify-center items-center text-[20px]'>
              Your Shopping Cart is empty
            </CardHeader>
            <CardContent className='flex gap-5 justify-center items-center'>
              Continue shopping on 
              <Link href={'/shop'}>
                <Image className='w-[130px] h-[80px]' src={'/soa.png'} width={2000} height={100} alt={`${APP_NAME} logo`} />
              </Link>
            </CardContent>
          </Card>
        )}
        {items.length > 0 && (
          <>
            <div className='col-span-3'>
              <Card className='rounded-none shadow-none'>
                <CardHeader className='text-3xl pb-0'>
                  Shopping Cart
                </CardHeader>
                <CardContent className='p-4'>
                  <div className='flex justify-end border-b mb-4'>Price</div>
                  {items.map((item) => (
                    <div
                      key={item.clientId}
                      className='flex flex-col md:flex-row justify-between py-4 border-b gap-4'
                    >
                      <Link href={`/product/${item.slug}`}>
                        <div className='relative w-40 h-40'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes='20vw'
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      </Link>
                      <div className='flex-1  space-y-4'>
                        <Link
                          href={`/product/${item.slug}`}
                          className='text-lg hover:no-underline'
                        >
                          {item.name}
                        </Link>
                        <div className='flex  gap-2 items-center'>
                          <Select
                            value={item.quantity.toString()}
                            onValueChange={(value) => updateItem(item, Number(value))}
                          >
                            <SelectTrigger className='w-auto'>
                              <SelectValue>
                                Quantity: {item.quantity}
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent position='popper'>
                              {Array.from({ length: item.countInStock }).map((_, i) => (
                                <SelectItem key={i + 1} value={`${i + 1}`}>
                                  {i + 1}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Button variant={'outline'} onClick={() => removeItem(item)}>
                            Delete
                          </Button>
                          {item.category === 'Solar Packages' && (
                        <div className='flex gap-2 '>
                          <Button variant='outline' onClick={() => {/* Action for Button 1 */}}>
                            <Link   href={`/search?category=Batteries`}>
                             Add Batteries
                            </Link>
                         
                          </Button>
                          <Button variant='outline' onClick={() => {/* Action for Button 2 */}}>
                           <Link   href={`/search?category=Solar Panels`}>
                             Add Pannels
                            </Link>
                          </Button>
                        </div>
                      )}
                        </div>
                      </div>
                      <div >
                        <p className='text-right'>
                          {item.quantity > 1 && (
                            <>
                              {item.quantity} x
                              <ProductPrice price={item.price} plain />
                              <br />
                            </>
                          )}

                          <span className='font-bold text-lg'>
                            <ProductPrice price={item.price * item.quantity} plain />
                          </span>
                        </p>
                      </div>

                      {/* Check if category is Solar Package */}
                    
                    </div>
                  ))}
                  <div className='flex justify-end text-lg my-2'>
                    Subtotal (
                    {items.reduce((acc, item) => acc + item.quantity, 0)}{' '}
                    Items):{' '}
                    <span className='font-bold ml-1'>
                      <ProductPrice price={itemsPrice} plain />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className='rounded-none shadow-none'>
                <CardContent className='py-4 space-y-4'>
                  {itemsPrice < FREE_SHIPPING_MIN_PRICE ? (
                    <div className='flex-1'>
                      Add{' '}
                      <span className='text-green-700'>
                        <ProductPrice price={FREE_SHIPPING_MIN_PRICE - itemsPrice} plain />
                      </span>{' '}
                      of eligible items to your order to qualify for FREE Shipping
                    </div>
                  ) : (
                    <div className='flex-1'>
                      <span className='text-green-700'>
                        Your order qualifies for FREE Shipping
                      </span>{' '}
                      Choose this option at checkout
                    </div>
                  )}
                  <div className='text-lg'>
                    Subtotal (
                    {items.reduce((acc, item) => acc + item.quantity, 0)}{' '}
                    items):{' '}
                    <span className='font-bold'>
                      <ProductPrice price={itemsPrice} plain />
                    </span>
                  </div>
                  <Button onClick={() => router.push('/checkout')} className='rounded-full w-full'>
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
      <BrowsingHistoryList className='mt-10' />
    </div>
  );
}