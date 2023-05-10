import {CardInfo} from "../../DTO/Common/CardInfo";
import {Order} from "../../DTO/Common/Order";
import {BinInfo} from "../../DTO/Common/BinInfo";
import {ErrorResponse} from "../../DTO/Common/ErrorResponse";

export interface GetOrderStateResponseClientInfo {
    PhoneNumber: string;
    FirstName: string;
    LastName: string;
    Email: string;
    TaxId: string;
    Zip: string
}

export interface GetOrderStateRequest {
    OrderId: string;
}

export interface GetOrderStateResponse {
    Order: Order;
    CardInfo: CardInfo;
    ClientInfo: GetOrderStateResponseClientInfo;
    BinInfo: BinInfo;
    PaymentError: ErrorResponse;
}
