interface PicPaymentPaymentRequestClientInfo {
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
    Zip: string;
    Birth: string;
    TaxId: string;
}

export interface PicPaymentPaymentRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    ClientInfo: PicPaymentPaymentRequestClientInfo;
}

export interface PicPaymentPaymentResponse {
    PaymentUrl: string;
    OrderId: string;
    TransactionId: number;
}
