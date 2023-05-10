export interface CryptoPayoutRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    Address: string;
}

export interface CryptoPayoutResponse {
    TransactionId: number;
    OrderId: string;
}
