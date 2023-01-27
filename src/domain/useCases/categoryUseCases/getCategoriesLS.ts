import { Category, LocaLStorageFailure } from "../../models";
import { CategoryRepository } from "../../repositories";

/**
 * Contract of the getCategoriesLS use case for {@link Category}
 */
export interface getCategoriesLS {
	/**
	 * Contract of the getCategoriesLS use case method
	 * Gets the data from the Local Storage
	 * @returns Either the {@link Category}[] or a {@link LocaLStorageFailure}
	 */
	getCategoriesLS(): Category[] | LocaLStorageFailure;
}

/**
 * Implementation of the getCategoriesLS use case for {@link Category}
 */
export class getCategoriesLSImpl implements getCategoriesLS {
	/**
	 * Connection with the repository
	 */
	respository: CategoryRepository;

	/**
	 * Creaetes an getCategoriesLSImpl
	 * @param repository - A repository {@link CategoryRepository}, when used give the
	 * implementation of the repository CardRepositoryImpl
	 */
	constructor(repository: CategoryRepository) {
		this.respository = repository;
	}

	/**
	 * Implementation of the getCategoriesLS use case method
	 * Gets the data from the Local Storage
	 * @returns Either the {@link Category}[] or a {@link LocaLStorageFailure}
	 */
	getCategoriesLS(): Category[] | LocaLStorageFailure {
		return this.respository.getCategoriesLS();
	}
}
