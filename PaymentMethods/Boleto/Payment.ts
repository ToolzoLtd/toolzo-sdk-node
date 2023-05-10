interface BoletoPaymentRequestClientInfo {
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
    Zip: string;
    Birth: string;
    TaxId: string;
}

export interface BoletoPaymentRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    ClientInfo: BoletoPaymentRequestClientInfo;
}

export interface BoletoPaymentResponse {
    Code: string;
    OrderId: string;
    TransactionId: number;
}
