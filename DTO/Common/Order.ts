export interface Order {
    TransactionId: number;
    OrderId: string;
    DateTime: Date;
    ExecDateTime: Date;
    Amount: number;
    Currency: string;
    State: string;
    StateDescription: string;
    PresentState: string;
    PresentStateDescription: string;
    LinkId: number;
}
