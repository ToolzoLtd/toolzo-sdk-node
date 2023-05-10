interface PixPaymentRequestClientInfo {
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
    Zip: string;
    Birth: string;
    TaxId: string;
}

export interface PixPaymentRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    ClientInfo: PixPaymentRequestClientInfo;
}

export interface PixPaymentResponse {
    Code: string;
    OrderId: string;
    TransactionId: number;
}
