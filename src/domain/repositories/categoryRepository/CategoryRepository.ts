import {
    Card,
    Category,
    LocaLStorageFailure,
    ServerFailure,
} from "../../models";

/**
 * Contract of the repository used by the {@link Category}
 */
export interface CategoryRepository {
    /**
     * Contract of the getCategoriesApi method
     * Gets the data from the API and saves it on the local Storage
     * @returns Either the {@link Category}[] or a {@link ServerFailure}
     */
    getCategoriesApi(): Promise<Category[] | ServerFailure>;
    /**
     * Contract of the getCategoriesLS method
     * Gets the data from the Local Storage
     * @returns Either the {@link Category}[] or a {@link LocaLStorageFailure}
     */
    getCategoriesLS(): Category[] | LocaLStorageFailure;
    /**
     * Contract of the getCardsInCategoryApi method
     * Gets the data from the API
     * @param id - the id of the {@link Category} to see it's cards
     * @returns Either the {@link Card}[] or a {@link ServerFailure}
     */
    getCardsInCategoryApi(id: string): Promise<Card[] | ServerFailure>;
}
