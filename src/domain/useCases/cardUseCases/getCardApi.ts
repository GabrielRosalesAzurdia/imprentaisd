import { Card, LocaLStorageFailure } from "../../models";
import { CardRepository } from "../../repositories";

/**
 * Contract of the getCardApi use case for {@link Card}
 */
export interface getCardApi {
    /**
     * Contract of the getCardApi use case method
     * Gets the data of a specific card
     * @param id - The id of the {@link Card} that wants to get
     * @returns Either a {@link Card} full fields or a {@link LocaLStorageFailure}
     */
    getCardApi(id: string): Promise<Card | LocaLStorageFailure>;
}

/**
 * Implementation of the getCardApi use case for {@link Card}
 */
export class getCardApiImpl implements getCardApi {
    /**
     * Connection with the repository
     */
    respository: CardRepository;

    /**
     * Creaetes an getCardApiImpl
     * @param repository - A repository {@link CardRepository}, when used give the
     * implementation of the repository CardRepositoryImpl
     */
    constructor(repository: CardRepository) {
        this.respository = repository;
    }

    /**
     * Implementation of the getCardApi method
     * Gets the data of a specific card
     * @param id - The id of the {@link Card} that wants to get
     * @returns Either a {@link Card} full fields or a {@link LocaLStorageFailure}
     */
    getCardApi(id: string): Promise<Card | LocaLStorageFailure> {
        return this.respository.getCardApi(id);
    }
}
