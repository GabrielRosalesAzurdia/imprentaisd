import {
    LocalStorageError,
    Responses,
    ServerError,
} from "../../../domain/models";

export function getCategoriesApiService(): Promise<string> {
    return mockBackendgetCategoriesApiService()
        .then((response) => {
            return response;
        })
        .catch((e) => {
            throw new ServerError("Api failed at the getCategoriesApiService");
        });
}

//? Functionality created in replacement of the API is going to be removed
const mockBackendgetCategoriesApiService = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                "[{id:'1', title:'Compleaños', image:'x', description:'tarjetas para cumpleaños con diferentes diseños y para todas las edades'}, [{id:'2', title:'Bodas', image:'x', description:'tarjetas para bodas elegantes o casuales según el gusto'}"
            );
        }, 2000);
    });
};

export function setCategoriesLSService(cardslist: string): string {
    localStorage.setItem("categorieslist", cardslist);
    return Responses.SUCCESS_GET;
}

export function getCategoriesLSService(): string {
    let categorieslist = localStorage.getItem("categorieslist");
    if (!categorieslist) {
        throw new LocalStorageError(
            "Local Storage failed at the getCategoriesLSService"
        );
    }
    return categorieslist;
}

export function getCardsInCategoryApiService(id: string): string {
    throw new ServerError("Api failed at the getCardsInCategoryApiService");
}
