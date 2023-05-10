import {CardInfo} from "../../DTO/Common/CardInfo";

export interface CardsPaymentRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    Description: string;
    RebillFlag: boolean;
    ReturnUrl: string;
    CardInfo: CardInfo;
}

export interface CardsPaymentResponse {
    TransactionId: number;
    PaymentUrl: string;
}
