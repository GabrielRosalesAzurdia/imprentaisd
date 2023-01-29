import { Category } from "../category/Category";

/**
 * Interface for the diferent cards in the store
 */
export interface Card {
    title: string;
    id: number;
    primaryImage: string;
    category: number;
    price: number;
    gallery?: string[];
    description?: string;
}
