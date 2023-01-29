import {
    Card,
    Category,
    CategoryRepository,
    LocaLStorageFailure,
    ServerFailure,
} from "../../../domain";
import {
    getCardsInCategoryApiService,
    getCategoriesApiService,
    getCategoriesLSService,
    setCardsLSService,
    setCategoriesLSService,
} from "../../services";

/**
 * Implementation of the repository used by the {@link Category}
 */
export class CategoryRepositoryImpl implements CategoryRepository {
    /**
     * Implementation of the getCategoriesApi method
     * Gets the data from the API and saves it on the local Storage
     * @returns Either the {@link Category}[] or a {@link ServerFailure}
     */
    async getCategoriesApi(): Promise<Category[] | ServerFailure> {
        try {
            let data = await getCategoriesApiService();
            setCategoriesLSService(data);
            return JSON.parse(data);
        } catch {
            return new ServerFailure();
        }
    }

    /**
     * Implementation of the getCategoriesLS method
     * Gets the data from the Local Storage
     * @returns Either the {@link Category}[] or a {@link LocaLStorageFailure}
     */
    getCategoriesLS(): Category[] | LocaLStorageFailure {
        try {
            let data = getCategoriesLSService();
            return JSON.parse(data);
        } catch {
            setCategoriesLSService("");
            return new LocaLStorageFailure();
        }
    }

    /**
     * Implementation of the getCardsInCategoryApi method
     * Gets the data from the API
     * @param id - the id of the {@link Category} to see it's cards
     * @returns Either the {@link Card}[] or a {@link ServerFailure}
     */
    async getCardsInCategoryApi(id: string): Promise<Card[] | ServerFailure> {
        try {
            let data = getCardsInCategoryApiService(id);
            return JSON.parse(data);
        } catch {
            return new ServerFailure();
        }
    }
}
