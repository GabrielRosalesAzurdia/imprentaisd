import { Category } from "../category/Category"

/**
 * Interface for the diferent cards in the store
 */
export interface Card{
    title:string
    id:string
    primaryImage:string
    category:Category
    price:string
    gallery?:string[]
    description?:string
}