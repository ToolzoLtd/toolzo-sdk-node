interface CryptoPaymentClientInfo {
    Email: string;
}

export interface CryptoPaymentRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    ReturnUrl: string;
    Description: string;
    ClientInfo: CryptoPaymentClientInfo;
}

export interface CryptoPaymentResponse {
    TransactionId: number;
    OrderId: string;
    Method: string;
    PaymentUrl: string;
}
