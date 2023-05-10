export interface BankTransferEuPaymentRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    ReturnUrl: string;
}

export interface BankTransferEuPaymentResponse {
    TransactionId: number;
    PaymentUrl: string;
}
