export interface PaymentLinkAddRequest {
    Name: string;
    Amount: number;
    Currency: string;
    Description: string;
    TTL: string;
    PaymentMethods: string[];
}

export interface PaymentLinkAddResponse {
    Link: string;
    OrderId: string;
}
