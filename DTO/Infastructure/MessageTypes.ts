export enum MessageTypes {
    Request = "Request",
    RequestWithCryptogram = "RequestWithCryptogram",
    Response = "Response",
    Error = "Error"
}

export enum Cards {
    Payment  = "Cards.Payment",
    PaymentLatam = "CardsLatam.Payment",
    Payout   = "Cards.Payout",
    Rebill   = "Cards.Rebill",
    Refund   = "Cards.Refund",
    Reversal = "Cards.Reversal"
}

export enum OrderState {
    GetOrderState = "GetOrderState"
}

export enum PaymentLink {
    Add = "PaymentLink.Add"
}

export enum Crypto {
    Payment = "Crypto.Payment",
    Payout  = "Crypto.Payout"
}

export enum BankTransfer {
    EuPayment    = "BankTransferEu.Payment",
    ChinaPayment = "BankTransferChina.Payment",
    ChinaPayout  = "BankTransferChina.Payout"
}

export enum Boleto {
    Payment = "Boleto.Payment"
}

export enum DepositExpress {
    Payment = "DepositExpress.Payment"
}

export enum Lottery {
    Payment = "Lottery.Payment"
}

export enum PicPayment {
    Payment = "PicPay.Payment"
}

export enum Pix {
    Payment = "Pix.Payment"
}

export enum Sepa {
    Payout = "Sepa.Payout"
}
