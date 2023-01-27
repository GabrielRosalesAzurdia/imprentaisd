import { Category } from "../category/Category"

export interface Card{
    title:string
    description:string
    id:string
    image:string
    price:string
    category:Category
}