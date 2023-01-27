import { Category, Failure } from "../../models";
import { CategoryRepository } from "../../repositories";

/**
 * Contract of the getCategoriesApi use case for {@link Category}
 */
export interface getCategoriesApi {
	/**
	 * Contract of the getCategoriesApi use case method
	 * Gets the data from the API and saves it on the local Storage
	 * @returns Either the {@link Category}[] or a {@link Failure}
	 */
	getCategoriesApi(): Promise<Category[] | Failure>;
}

/**
 * Implementation of the getCategoriesApi use case for {@link Category}
 */
export class getCategoriesApiImpl implements getCategoriesApi {
	/**
	 * Connection with the repository
	 */
	respository: CategoryRepository;

	/**
	 * Creaetes an getCategoriesApiImpl
	 * @param repository - A repository {@link CategoryRepository}, when used give the
	 * implementation of the repository CardRepositoryImpl
	 */
	constructor(repository: CategoryRepository) {
		this.respository = repository;
	}

	/**
	 * Implementation of the getCategoriesApi use case method
	 * Gets the data from the API and saves it on the local Storage
	 * @returns Either the {@link Category}[] or a {@link Failure}
	 */
	getCategoriesApi(): Promise<Category[] | Failure> {
		return this.respository.getCategoriesApi();
	}
}
