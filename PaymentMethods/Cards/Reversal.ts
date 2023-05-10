export interface CardsReversalRequest {
    OrderId: string;
    ParentOrderId: string;
    Description: string;
}

export interface CardsReversalResponse {
    TransactionId: number;
    PaymentUrl: string;
}
