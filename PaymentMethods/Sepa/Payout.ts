interface SepaPayoutRequestClientInfo {
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
    Country: string;
    City: string;
    Zip: string;
    Address: string;
    Birth: string;
}

interface SepaPayoutRequestAccount {
    Iban: string;
    Country: string;
}

export interface SepaPayoutRequest {
    OrderId: string;
    Amount: number;
    Currency: string;
    ClientInfo: SepaPayoutRequestClientInfo;
    Account: SepaPayoutRequestAccount;
}
export interface SepaPayoutResponse {
    OrderId: string;
    TransactionId: number;
}

