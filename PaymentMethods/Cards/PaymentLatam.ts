import {CardInfo} from "../../DTO/Common/CardInfo";

export interface CardsPaymentLatamRequestClientInfo {
    PhoneNumber: string;
    FirstName: string;
    LastName: string;
    Email: string;
    TaxId: string;
    Zip: string
}

export interface CardsPaymentLatamRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    Description: string;
    RebillFlag: boolean;
    ReturnUrl: string;
    CardInfo: CardInfo;
    ClientInfo: CardsPaymentLatamRequestClientInfo;
}

export interface CardsPaymentLatamResponse {
    TransactionId: number;
    PaymentUrl: string;
}
