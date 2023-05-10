import {AuthConfig} from "./AuthConfig";
import {ToolzoClient} from "./ToolzoClient";
import {CardsPaymentRequest, CardsPaymentResponse} from "../PaymentMethods/Cards/Payment";
import {ErrorResponse} from "../DTO/Common/ErrorResponse";
import {DataRequest, RequestMessage} from "../DTO/Infastructure/RequestMessage";
import {
    BankTransfer, Boleto,
    Cards,
    Crypto, DepositExpress, Lottery,
    MessageTypes,
    OrderState,
    PaymentLink, PicPayment, Pix,
    Sepa
} from "../DTO/Infastructure/MessageTypes";
import {randomUUID} from "crypto";
import {CardsPayoutRequest, CardsPayoutResponse} from "../PaymentMethods/Cards/Payout";
import {CardsRebillRequest, CardsRebillResponse} from "../PaymentMethods/Cards/Rebill";
import {CardsRefundRequest, CardsRefundResponse} from "../PaymentMethods/Cards/Refund";
import {CardsReversalRequest, CardsReversalResponse} from "../PaymentMethods/Cards/Reversal";
import {GetOrderStateRequest, GetOrderStateResponse} from "../PaymentMethods/GetOrderState/GetOrderState";
import {PaymentLinkAddRequest, PaymentLinkAddResponse} from "../PaymentMethods/PaymentLink/PaymentLink";
import {CardsPaymentLatamRequest, CardsPaymentLatamResponse} from "../PaymentMethods/Cards/PaymentLatam";
import {BankTransferEuPaymentRequest, BankTransferEuPaymentResponse} from "../PaymentMethods/BankTransfer/EuPayment";
import {
    BankTransferChinaPaymentRequest,
    BankTransferChinaPaymentResponse
} from "../PaymentMethods/BankTransfer/ChinaPayment";
import {
    BankTransferChinaPayoutRequest,
    BankTransferChinaPayoutResponse
} from "../PaymentMethods/BankTransfer/ChinaPayout";
import {CryptoPaymentRequest, CryptoPaymentResponse} from "../PaymentMethods/Crypto/Payment";
import {CryptoPayoutRequest, CryptoPayoutResponse} from "../PaymentMethods/Crypto/Payout";
import {SepaPayoutRequest, SepaPayoutResponse} from "../PaymentMethods/Sepa/Payout";
import {BoletoPaymentRequest, BoletoPaymentResponse} from "../PaymentMethods/Boleto/Payment";
import {PixPaymentRequest, PixPaymentResponse} from "../PaymentMethods/Pix/Payment";
import {LotteryPaymentRequest, LotteryPaymentResponse} from "../PaymentMethods/Lottery/Payment";
import {DepositExpressPaymentRequest, DepositExpressPaymentResponse} from "../PaymentMethods/DepositExpress/Payment";
import {PicPaymentPaymentRequest, PicPaymentPaymentResponse} from "../PaymentMethods/PicPayment/Payment";

export class ToolzoApi {
    private readonly _apiVersion: string;
    private readonly _toolzoClient: ToolzoClient;

    constructor(config: AuthConfig) {
        this._apiVersion   = config.ApiVersion;
        this._toolzoClient = new ToolzoClient(config);
    }

    async CardsPaymentAsync(request: CardsPaymentRequest, result: (res: CardsPaymentResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Cards.Payment, this._apiVersion, request, result, error);
    }

    async CardsPaymentLatamAsync(request: CardsPaymentLatamRequest, result: (res: CardsPaymentLatamResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Cards.PaymentLatam, this._apiVersion, request, result, error);
    }

    async CardsPayoutAsync(request: CardsPayoutRequest, result: (res: CardsPayoutResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Cards.Payout, this._apiVersion, request, result, error);
    }

    async CardsRebillAsync(request: CardsRebillRequest, result: (res: CardsRebillResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Cards.Rebill, this._apiVersion, request, result, error);
    }

    async CardsRefundAsync(request: CardsRefundRequest, result: (res: CardsRefundResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Cards.Refund, this._apiVersion, request, result, error);
    }

    async CardsReversalAsync(request: CardsReversalRequest, result: (res: CardsReversalResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Cards.Reversal, this._apiVersion, request, result, error);
    }

    async GetOrderStateAsync(request: GetOrderStateRequest, result: (res: GetOrderStateResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(OrderState.GetOrderState, this._apiVersion, request, result, error);
    }

    async PaymentLinkAsync(request: PaymentLinkAddRequest, result: (res: PaymentLinkAddResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(PaymentLink.Add, this._apiVersion, request, result, error);
    }

    async BankTransferEuPaymentAsync(request: BankTransferEuPaymentRequest, result: (res: BankTransferEuPaymentResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(BankTransfer.EuPayment, this._apiVersion, request, result, error);
    }

    async BankTransferChinaPaymentAsync(request: BankTransferChinaPaymentRequest, result: (res: BankTransferChinaPaymentResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(BankTransfer.ChinaPayment, this._apiVersion, request, result, error);
    }

    async BankTransferChinaPayoutAsync(request: BankTransferChinaPayoutRequest, result: (res: BankTransferChinaPayoutResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(BankTransfer.ChinaPayout, this._apiVersion, request, result, error);
    }

    async CryptoPaymentAsync(request: CryptoPaymentRequest, result: (res: CryptoPaymentResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Crypto.Payment, this._apiVersion, request, result, error);
    }

    async CryptoPayoutAsync(request: CryptoPayoutRequest, result: (res: CryptoPayoutResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Crypto.Payout, this._apiVersion, request, result, error);
    }

    async SepaPayoutAsync(request: SepaPayoutRequest, result: (res: SepaPayoutResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Sepa.Payout, this._apiVersion, request, result, error);
    }

    async BoletoPaymentAsync(request: BoletoPaymentRequest, result: (res: BoletoPaymentResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Boleto.Payment, this._apiVersion, request, result, error);
    }

    async PixPaymentAsync(request: PixPaymentRequest, result: (res: PixPaymentResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Pix.Payment, this._apiVersion, request, result, error);
    }

    async LotteryPaymentAsync(request: LotteryPaymentRequest, result: (res: LotteryPaymentResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(Lottery.Payment, this._apiVersion, request, result, error);
    }

    async DepositExpressPaymentAsync(request: DepositExpressPaymentRequest, result: (res: DepositExpressPaymentResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(DepositExpress.Payment, this._apiVersion, request, result, error);
    }

    async PicPaymentPaymentAsync(request: PicPaymentPaymentRequest, result: (res: PicPaymentPaymentResponse) => void, error: (err: ErrorResponse) => void) {
        await this.ExecuteAsync(PicPayment.Payment, this._apiVersion, request, result, error);
    }


    private async ExecuteAsync<TRequest, TResponse>(type: string, apiVersion: string, request: TRequest, result: (res: TResponse) => void, error: (err: ErrorResponse) => void) {
        const requestMessage: RequestMessage = {
            Type: MessageTypes.Request,
            CorrelationId: randomUUID(),
            TimeStamp: new Date().toJSON(),
            TTL: "00:02:00",
            Payload: {
                Type: type,
                ApiVersion: apiVersion,
                Payload: request,
            } as DataRequest<TRequest>
        }

        console.log(requestMessage);

        const responseMessage = await this._toolzoClient.SendAsync(requestMessage);

        console.log(responseMessage);

        if (responseMessage.Type == MessageTypes.Response) result(responseMessage.Payload as TResponse);
        if (responseMessage.Type == MessageTypes.Error) error(responseMessage.Payload as ErrorResponse);
    }
}
