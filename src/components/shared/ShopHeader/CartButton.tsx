'use client'

    import { ShoppingCart } from 'lucide-react'
    import Link from 'next/link'
    import useIsMounted from '@/hooks/use-is-mounted'
    import { cn } from '@/lib/utils'
    import useCartStore from '@/hooks/use-cart-store'
    import useCartSidebar from '@/hooks/use-cart-sidebar'


    export default function CartButton() {

      const isMounted = useIsMounted()
      const {
        cart: { items },
      } = useCartStore()
      const cartItemsCount = items.reduce((a, c) => a + c.quantity, 0)
      const isCartSidebarOpen = useCartSidebar()

      return (
        <Link href='/cart' className='px-1 header-button'>
          <div className='flex items-end text-xs relative'>
            <ShoppingCart className='h-6 w-6 text-white' />

            {isMounted && (
              <span
                className={cn(
                  `  px-1 rounded-full text-green-600 text-base font-bold absolute right-[27px] top-[-10px] z-10`,
                  cartItemsCount >= 10 && 'text-sm px-0 p-[1px]'
                )}
              >
                {cartItemsCount}
              </span>
            )}
            <span className='font-bold text-transparent'>Cart</span>
            {isCartSidebarOpen && (
                  <div
             className={`absolute top-[20px] right-[-16px] rotate-[-90deg] z-10 w-0 h-0 border-l-[7px] border-r-[7px] border-b-[8px] border-transparent border-b-background`}>

                </div>
  )
}
          </div>
        </Link>
      )
    }