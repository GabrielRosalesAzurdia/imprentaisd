import {
    LocalStorageError,
    ServerError,
    Responses,
} from "../../../domain/models";

export function getCardsApiService(): Promise<string> {
    return mockBackendgetCardsApiService()
        .then((response) => {
            return response;
        })
        .catch((e) => {
            throw new ServerError("The api failed at the getCardsApiService");
        });
}

//? Functionality created in replacement of the API is going to be removed
const mockBackendgetCardsApiService = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                "[{id:1, title:'Compleaños playa', primaryImage:'x', category:1, price:29}, {id:2, title:'Boda en ruinas', primaryImage:'x', category:'2', price:30}, {id:3, title:'Compleaños pizza', primaryImage:'x', category:'1', price:44}]"
            );
        }, 2000);
    });
};

export function getCardsLSService(): string {
    let cards = localStorage.getItem("cardslist");
    if (!cards) {
        throw new LocalStorageError(
            "The local storage failed at the getCardsApiLSService"
        );
    }
    return cards;
}

export function setCardsLSService(cardslist: string): string {
    localStorage.setItem("cardslist", cardslist);
    return Responses.SUCCESS_GET;
}

export function getCardApiService(id: string): Promise<string> {
    throw new ServerError("The api failed at getCardApiService");
}

// const mockBackendsetCardsApiLSService = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(
//                 "[{id:'1', title:'Compleaños playa', primaryImage:'x', category:'1', price:'29', gallery:'[x,y]', description:'tarjeta de cumpleaños bien fresca'}, {id:'2', title:'Boda en ruinas', primaryImage:'x', category:'2', price:'30', gallery:'[x,y]', description:'Tarjeta para ocacion de bodas'}, {id:'3', title:'Compleaños pizza', primaryImage:'x', category:'1', price:'44', gallery:'[x,y]', description:'Cumpleaños en un restaurante'}]"
//             );
//         }, 2000);
//     });
// };
