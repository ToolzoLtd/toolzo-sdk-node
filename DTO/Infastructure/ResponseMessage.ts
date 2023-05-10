export interface ResponseMessage {
    Type: string;
    TimeStamp: Date;
    CorrelationId: string;
    ExecutionDuration: any;
    Payload: object;
}
