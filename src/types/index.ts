
import z from "zod";
 import {
     CartSchema,
     OrderItemSchema,
     ProductInputSchema,
     UserInputSchema,
     UserSignInSchema,
     UserSignUpSchema,
     ShippingAddressSchema,
     OrderInputSchema,
     ReviewInputSchema,
     
   } from '@/lib/validator'


    export type IProductInput = z.infer<typeof ProductInputSchema>
    export type Data = {
       
       users: IUserInput[]
      products: IProductInput[]
      reviews: {
       title: string
      rating: number
      comment: string
      }[]
      headerMenus: {
        name: string
        href: string
      }[]
      carousels: {
        image: string
        url: string
        title: string
        buttonCaption: string
        isPublished: boolean
      }[]
    }

  export type OrderItem = z.infer<typeof OrderItemSchema>
  export type Cart = z.infer<typeof CartSchema>

  export type IUserInput = z.infer<typeof UserInputSchema>
  export type IUserSignIn = z.infer<typeof UserSignInSchema>

   
export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>

export type IOrderInput = z.infer<typeof OrderInputSchema>
export type IReviewInput = z.infer<typeof ReviewInputSchema>
export type IReviewDetails = IReviewInput & {
  _id: string
  createdAt: string
  user: {
    name: string
  }[]}
  
export type IOrderList = IOrderInput & {
  _id: string
  user: {
    name: string
    email: string
  }
  createdAt: Date
}