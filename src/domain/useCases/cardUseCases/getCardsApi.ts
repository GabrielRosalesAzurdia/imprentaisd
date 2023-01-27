import { Card, Failure } from "../../models";
import { CardRepository } from "../../repositories";

/**
 * Contract of the getCardsApi use case for {@link Card}
 */
export interface getCardsApi {
	/**
	 * Contract of the getCardsApi use case method
	 * Gets the data from the API and saves it on the local Storage
	 * @returns Either the {@link Card}[] with only the mandatory fields or a {@link Failure}
	 */
	getCardsApi(): Promise<Card[] | Failure>;
}

/**
 * Implementation of the getCardsApi use case for {@link Card}
 */
export class getCardsApiImpl implements getCardsApi {
	/**
	 * Connection with the repository
	 */
	respository: CardRepository;

	/**
	 * Creaetes an getCardsApiImpl
	 * @param repository - A repository {@link CardRepository}, when used give the
	 * implementation of the repository CardRepositoryImpl
	 */
	constructor(repository: CardRepository) {
		this.respository = repository;
	}

	/**
	 * Implementation of the getCardsApi use case method
	 * Gets the data from the API and saves it on the local Storage
	 * @returns Either the {@link Card}[] with only the mandatory fields or a {@link Failure}
	 */
	getCardsApi(): Promise<Card[] | Failure> {
		return this.respository.getCardsApi();
	}
}
