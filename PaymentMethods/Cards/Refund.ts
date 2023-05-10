export interface CardsRefundRequest {
    OrderId: string;
    Amount: number;
    Description: string;
    ParentOrderId: string;
}

export interface CardsRefundResponse {
    TransactionId: number;
    PaymentUrl: string;
}
