import { Card, LocaLStorageFailure, ServerFailure } from "../../models";

/**
 * Contract of the repository used by the {@link Card}
 */
export interface CardRepository {
    /**
     * Contract of the getCardsApi method
     * Gets the data from the API and saves it on the local Storage
     * @returns Either the {@link Card}[] with only the mandatory fields or a {@link ServerFailure}
     */
    getCardsApi(): Promise<Card[] | ServerFailure>;
    /**
     * Contract of the getCardsLS method
     * Gets the data from the local Storage
     * @returns Either the {@link Card}[] with only the mandatory fields or a {@link LocaLStorageFailure}
     */
    getCardsLS(): Card[] | LocaLStorageFailure;
    /**
     * Contract of the getCardApi method
     * Gets the data of a specific card
     * @param id - The id of the {@link Card} that wants to get
     * @returns Either a {@link Card} full fields or a {@link ServerFailure}
     */
    getCardApi(id: string): Promise<Card | ServerFailure>;
}
