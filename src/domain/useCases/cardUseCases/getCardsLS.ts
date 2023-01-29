import { Card, LocaLStorageFailure } from "../../models";
import { CardRepository } from "../../repositories";

/**
 * Contract of the getCardsLS use case for {@link Card}
 */
export interface getCardsLS {
    /**
     * Contract of the getCardsLS use case method
     * Gets the data from the the local Storage
     * @returns Either the {@link Card}[] with only the mandatory fields or a {@link LocaLStorageFailure}
     */
    getCardsLS(): Card[] | LocaLStorageFailure;
}

/**
 * Implementation of the getCardsLS use case for {@link Card}
 */
export class getCardsLSImpl implements getCardsLS {
    /**
     * Connection with the repository
     */
    respository: CardRepository;

    /**
     * Creaetes an getCardsLSImpl
     * @param repository - A repository {@link CardRepository}, when used give the
     * implementation of the repository CardRepositoryImpl
     */
    constructor(repository: CardRepository) {
        this.respository = repository;
    }

    /**
     * Implementation of the getCardsLS use case method
     * Gets the data from the local Storage
     * @returns Either the {@link Card}[] with only the mandatory fields or a {@link LocaLStorageFailure}
     */
    getCardsLS(): Card[] | LocaLStorageFailure {
        return this.respository.getCardsLS();
    }
}
