import {
    Card,
    CardRepository,
    Failure,
    LocaLStorageFailure,
    ServerFailure,
} from "../../../domain";
import {
    getCardsLSService,
    getCardsApiService,
    setCardsLSService,
    getCardApiService,
} from "../../services";

/**
 * Implementation of the repository used by the {@link Card}
 */
export class CardRepositoryImpl implements CardRepository {
    /**
     * Implementatino of the getCardsApi method
     * Gets the data from the API and saves it on the local Storage
     * @returns Either the {@link Card}[] with only the mandatory fields or a {@link Failure}
     */
    async getCardsApi(): Promise<Card[] | ServerFailure> {
        try {
            let data = await getCardsApiService();
            setCardsLSService(data);
            return JSON.parse(data);
        } catch {
            return new ServerFailure();
        }
    }

    /**
     * Implementation of the getCardsLS method
     * Gets the data from the local Storage
     * @returns Either the {@link Card}[] with only the mandatory fields or a {@link LocaLStorageFailure}
     */
    getCardsLS(): Card[] | LocaLStorageFailure {
        try {
            let data = getCardsLSService();
            return JSON.parse(data);
        } catch {
            setCardsLSService("");
            return new LocaLStorageFailure();
        }
    }

    /**
     * Implementation of the getCardApi method
     * Gets the data of a specific card
     * @param id - The id of the {@link Card} that wants to get
     * @returns Either a {@link Card} full fields or a {@link ServerFailure}
     */
    async getCardApi(id: string): Promise<Card | ServerFailure> {
        try {
            let data = await getCardApiService(id);
            return JSON.parse(data);
        } catch {
            return new ServerFailure();
        }
    }
}
