/**
 * 	Represents a generic Failure
 */
export class Failure {}

/**
 * 	Represents a Server Failure, use when facing a ServerRrror
 *  @implements Failure
 */
export class ServerFailure implements Failure {}

/**
 * 	Represents a Local Storage Failure, use when facing a LocalStorageError
 *  @implements Failure
 */
export class LocaLStorageFailure implements Failure {}
