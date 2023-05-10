interface LotteryPaymentRequestClientInfo {
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
    Zip: string;
    Birth: string;
    TaxId: string;
}

export interface LotteryPaymentRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    ClientInfo: LotteryPaymentRequestClientInfo;
}

export interface LotteryPaymentResponse {
    BankNo: string;
    Code: string;
    OrderId: string;
    TransactionId: number;
}
