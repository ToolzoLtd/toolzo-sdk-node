import {CardInfo} from "../../DTO/Common/CardInfo";

export interface CardsPayoutRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    Description: string;
    CardInfo: CardInfo;
}

export interface CardsPayoutResponse {
    TransactionId: number;
    OrderId: string;
}
