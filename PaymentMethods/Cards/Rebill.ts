export interface CardsRebillRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    BindingId: number;
}

export interface CardsRebillResponse {
    TransactionId: number;
    PaymentUrl: string;
}
