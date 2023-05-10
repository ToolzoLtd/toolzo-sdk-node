interface DepositExpressPaymentRequestClientInfo {
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
    Zip: string;
    Birth: string;
    TaxId: string;
}

export interface DepositExpressPaymentRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    Bank: string;
    ClientInfo: DepositExpressPaymentRequestClientInfo;
}

export interface DepositExpressPaymentResponse {
    Owner: string;
    Bank: string;
    Agency: number;
    Number: string;
    OwnerDocument: string;
    OrderId: string;
    TransactionId: number;
}
