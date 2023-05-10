export interface RequestMessage {
    Type: string;
    TimeStamp: string;
    TTL: any;
    CorrelationId: string;
    Payload: any;
}

export interface DataRequest<T> {
    Type: string;
    ApiVersion: string;
    Payload: T;
}
