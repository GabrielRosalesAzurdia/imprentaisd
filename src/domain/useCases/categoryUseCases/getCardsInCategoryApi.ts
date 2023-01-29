import { Card, Category, LocaLStorageFailure } from "../../models";
import { CategoryRepository } from "../../repositories";

/**
 * Contract of the getCardsInCategoryApi use case for {@link Category}
 */
export interface getCardsInCategoryApi {
    /**
     * Contract of the getCardsInCategoryApi use case method
     * Gets the data from the API
     * @param id - the id of the {@link Category} to see it's cards
     * @returns Either the {@link Card}[] or a {@link LocaLStorageFailure}
     */
    getCardsInCategoryApi(id: string): Promise<Card[] | LocaLStorageFailure>;
}

/**
 * Implementation of the getCardsInCategoryApi use case for {@link Category}
 */
export class getCardsInCategoryApiImpl implements getCardsInCategoryApi {
    /**
     * Connection with the repository
     */
    respository: CategoryRepository;

    /**
     * Creaetes an getCardsInCategoryApiImpl
     * @param repository - A repository {@link CategoryRepository}, when used give the
     * implementation of the repository CardRepositoryImpl
     */
    constructor(repository: CategoryRepository) {
        this.respository = repository;
    }

    /**
     * Implementation of the getCardsInCategoryApi use case method
     * Gets the data from the API
     * @param id - the id of the {@link Category} to see it's cards
     * @returns Either the {@link Card}[] or a {@link LocaLStorageFailure}
     */
    getCardsInCategoryApi(id: string): Promise<Card[] | LocaLStorageFailure> {
        return this.respository.getCardsInCategoryApi(id);
    }
}
