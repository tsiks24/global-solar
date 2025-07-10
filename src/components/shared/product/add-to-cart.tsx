/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useCartStore from '@/hooks/use-cart-store'
import { OrderItem } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface AddToCartProps {
  item: OrderItem
  minimal?: boolean
}

const AddToCart: React.FC<AddToCartProps> = ({ item, minimal = false }) => {
  const router = useRouter()
  const { addItem } = useCartStore()
  const [quantity, setQuantity] = useState<number>(1)
  const [message, setMessage] = useState<string | null>(null)

  const handleAddToCart = async () => {
    try {
      const itemId = await addItem(item, quantity)
      setMessage(`Added to cart! Item ID: ${itemId}`)
      router.push(`/cart/${itemId}`)
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)
    }
  }

  const handleBuyNow = async () => {
    try {
      await addItem(item, quantity)
      setMessage('Item added to cart! Redirecting to checkout...')
      router.push(`/checkout`)
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)
    }
  }

  return (
    <div className='w-full space-y-2'>
      {message && <div className="message">{message}</div>}
      {minimal ? (
        <Button
          className='rounded-full w-auto'
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      ) : (
        <>
          <Select
            value={quantity.toString()}
            onValueChange={(i) => setQuantity(Number(i))}
          >
            <SelectTrigger>
              <SelectValue>Quantity: {quantity}</SelectValue>
            </SelectTrigger>
            <SelectContent position='popper'>
              {Array.from({ length: item.countInStock }).map((_, i) => (
                <SelectItem key={i + 1} value={`${i + 1}`}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            className='rounded-full w-full'
            type='button'
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button
            variant='secondary'
            onClick={handleBuyNow}
            className='w-full rounded-full'
          >
            Buy Now
          </Button>
        </>
      )}
    </div>
  )
}

export default AddToCart