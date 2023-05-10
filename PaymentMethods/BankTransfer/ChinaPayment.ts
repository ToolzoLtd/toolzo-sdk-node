interface BankTransferChinaPaymentClientInfo {
    PhoneNumber: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Zip: string
    Country: string;
    City: string;
    Address: string;
}

export interface BankTransferChinaPaymentRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    ReturnUrl: string;
    ClientInfo: BankTransferChinaPaymentClientInfo;
}

export interface BankTransferChinaPaymentResponse {
    TransactionId: number;
    OrderId: string;
    PaymentUrl: string;
}
