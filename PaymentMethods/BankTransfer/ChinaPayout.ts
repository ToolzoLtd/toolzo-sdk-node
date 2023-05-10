interface BankTransferChinaPayoutClientInfo {
    FirstName: string;
    LastName: string;
}

export interface BankTransferChinaPayoutRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    BankCode: string;
    RecipientAccount: string;
    ClientInfo: BankTransferChinaPayoutClientInfo;
}

export interface BankTransferChinaPayoutResponse {
    TransactionId: number;
    OrderId: string;
}
