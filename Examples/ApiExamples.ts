import {AuthConfig} from "../Domain/AuthConfig";
import {CardsPaymentRequest} from "../PaymentMethods/Cards/Payment";
import {randomUUID} from "crypto";
import {ToolzoApi} from "../Domain/ToolzoApi";
import {CardsPayoutRequest} from "../PaymentMethods/Cards/Payout";
import {CardsRebillRequest} from "../PaymentMethods/Cards/Rebill";
import {CardsRefundRequest} from "../PaymentMethods/Cards/Refund";
import {CardsReversalRequest} from "../PaymentMethods/Cards/Reversal";
import {GetOrderStateRequest} from "../PaymentMethods/GetOrderState/GetOrderState";
import {PaymentLinkAddRequest} from "../PaymentMethods/PaymentLink/PaymentLink";
import {CardsPaymentLatamRequest} from "../PaymentMethods/Cards/PaymentLatam";
import {BankTransferEuPaymentRequest} from "../PaymentMethods/BankTransfer/EuPayment";
import {BankTransferChinaPaymentRequest} from "../PaymentMethods/BankTransfer/ChinaPayment";
import {BankTransferChinaPayoutRequest} from "../PaymentMethods/BankTransfer/ChinaPayout";
import {CryptoPaymentRequest} from "../PaymentMethods/Crypto/Payment";
import {CryptoPayoutRequest} from "../PaymentMethods/Crypto/Payout";
import {SepaPayoutRequest} from "../PaymentMethods/Sepa/Payout";
import {BoletoPaymentRequest} from "../PaymentMethods/Boleto/Payment";
import {PixPaymentRequest} from "../PaymentMethods/Pix/Payment";
import {LotteryPaymentRequest} from "../PaymentMethods/Lottery/Payment";
import {DepositExpressPaymentRequest} from "../PaymentMethods/DepositExpress/Payment";
import {PicPaymentPaymentRequest} from "../PaymentMethods/PicPayment/Payment";

export class ApiExamples {

    // region Cards

    static async CardsPaymentAsync(config: AuthConfig): Promise<void> {
        const request: CardsPaymentRequest = {
            OrderId: randomUUID(),
            Amount: 100,
            Currency: "USD",
            RebillFlag: true,
            Description: "TEST",
            ReturnUrl: "http://google.com",
            CardInfo: {
                CardNumber: "4111111111111111",
                CardHolder: "XXX XXX",
                ExpirationMonth: "12",
                ExpirationYear: "2024",
                Cvv: "123"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.CardsPaymentAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    static async CardsPaymentLatamAsync(config: AuthConfig): Promise<void> {
        const request: CardsPaymentLatamRequest = {
            OrderId: randomUUID(),
            Amount: 100,
            Currency: "USD",
            RebillFlag: true,
            Description: "TEST",
            ReturnUrl: "http://google.com",
            CardInfo: {
                CardNumber: "4111111111111111",
                CardHolder: "XXX XXX",
                ExpirationMonth: "12",
                ExpirationYear: "2024",
                Cvv: "123"
            },
            ClientInfo: {
                PhoneNumber: "+33512345678",
                FirstName: "John",
                LastName: "Doe",
                Email: "doejohn@gmail.com",
                TaxId: "50284414727",
                Zip: "38082365"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.CardsPaymentLatamAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    static async CardsPayoutAsync(config: AuthConfig): Promise<void> {
        const request: CardsPayoutRequest = {
            OrderId: randomUUID(),
            Amount: 100,
            Currency: "USD",
            Description: "TEST",
            CardInfo: {
                CardNumber: "4111111111111111",
                CardHolder: "XXX XXX",
                ExpirationMonth: "12",
                ExpirationYear: "2024",
                Cvv: "123"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.CardsPayoutAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    static async CardsRebillAsync(config: AuthConfig): Promise<void> {
        const request: CardsRebillRequest = {
            OrderId: randomUUID(),
            Amount: 100,
            Currency: "USD",
            BindingId: 2515871 // your BindingId
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.CardsRebillAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    static async CardsRefundAsync(config: AuthConfig): Promise<void> {
        const request: CardsRefundRequest = {
            OrderId: randomUUID(),
            Amount: 100,
            Description: "TEST",
            ParentOrderId: '228c82e7-6b87-43a6-ab79-464ab864febe' // your ParentOrderId
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.CardsRefundAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    static async CardsReversalAsync(config: AuthConfig): Promise<void> {
        const request: CardsReversalRequest = {
            OrderId: randomUUID(),
            ParentOrderId: 'ecce05f2-5a58-4fa2-a44c-5c1652840c97', // your ParentOrderId
            Description: "TEST"
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.CardsReversalAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    // endregion

    //region OrderState

    static async GetOrderStateAsync(config: AuthConfig): Promise<void> {
        const request: GetOrderStateRequest = {
            OrderId: 'ecce05f2-5a58-4fa2-a44c-5c1652840c97' // your OrderId
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.GetOrderStateAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    //endregion

    // region PaymentLink

    static async PaymentLinkAddAsync(config: AuthConfig): Promise<void> {
        const request: PaymentLinkAddRequest = {
            Name: "PaymentLink_Test",
            Amount: 100,
            Currency: "USD",
            Description: "TEST",
            TTL: "00:20:00",
            PaymentMethods: [
                "CARDS"
            ]
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.PaymentLinkAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    // endregion

    // region BankTransfer

    static async BankTransferEuPaymentAsync(config: AuthConfig): Promise<void> {
        const request: BankTransferEuPaymentRequest = {
            OrderId: randomUUID(),
            Amount: 100,
            Currency: "USD",
            ReturnUrl: "http://google.com",
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.BankTransferEuPaymentAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    static async BankTransferChinaPaymentAsync(config: AuthConfig): Promise<void> {
        const request: BankTransferChinaPaymentRequest = {
            OrderId: randomUUID(),
            Amount: 100,
            Currency: "USD",
            ReturnUrl: "http://google.com",
            ClientInfo: {
                FirstName: "John",
                LastName: "Doe",
                Email: "johndoe@gmail.com",
                PhoneNumber: "+33512345678",
                Zip: "123456",
                Country: "France",
                City: "Paris",
                Address: "Mira street"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.BankTransferChinaPaymentAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    static async BankTransferChinaPayoutAsync(config: AuthConfig): Promise<void> {
        const request: BankTransferChinaPayoutRequest = {
            OrderId: randomUUID(),
            Amount: 100,
            Currency: "EUR",
            BankCode: "ICBC",
            RecipientAccount: "4564984561151",
            ClientInfo: {
                FirstName: "John",
                LastName: "Doe"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.BankTransferChinaPayoutAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    // endregion

    // region Crypto

    static async CryptoPaymentAsync(config: AuthConfig): Promise<void> {
        const request: CryptoPaymentRequest = {
            OrderId: randomUUID(),
            Amount: 158700,
            Currency: "BTC",
            ReturnUrl: "https://google.com",
            Description: "This is description",
            ClientInfo: {
                Email: "johndoe@gmail.com"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.CryptoPaymentAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    static async CryptoPayoutAsync(config: AuthConfig): Promise<void> {
        const request: CryptoPayoutRequest = {
            OrderId: randomUUID(),
            Amount: 1587,
            Currency: "BTC",
            Address: "mqgsvC1CsPCW2NMaXAdFZFdqKhGH5kgAtC"
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.CryptoPayoutAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    // endregion

    // region Boleto

    static async BoletoPaymentAsync(config: AuthConfig): Promise<void> {
        const request: BoletoPaymentRequest = {
            OrderId: randomUUID(),
            Amount: 5000,
            Currency: "USD",
            ClientInfo: {
                FirstName: "John",
                LastName: "Doe",
                PhoneNumber: "+33512345678",
                Email: "johnd@gmail.com",
                TaxId: "50284414727",
                Zip: "12345",
                Birth: "1990-01-01T00:00:00"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.BoletoPaymentAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    // endregion

    // region DepositExpress

    static async DepositExpressPaymentAsync(config: AuthConfig): Promise<void> {
        const request: DepositExpressPaymentRequest = {
            OrderId: randomUUID(),
            Amount: 5000,
            Currency: "USD",
            Bank: "itau",
            ClientInfo: {
                FirstName: "John",
                LastName: "Doe",
                PhoneNumber: "+33512345678",
                Email: "johnd@gmail.com",
                TaxId: "50284414727",
                Zip: "12345",
                Birth: "1990-01-01T00:00:00"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.DepositExpressPaymentAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    // endregion

    // region Lottery

    static async LotteryPaymentAsync(config: AuthConfig): Promise<void> {
        const request: LotteryPaymentRequest = {
            OrderId: randomUUID(),
            Amount: 5000,
            Currency: "USD",
            ClientInfo: {
                FirstName: "John",
                LastName: "Doe",
                PhoneNumber: "+33512345678",
                Email: "johnd@gmail.com",
                TaxId: "50284414727",
                Zip: "12345",
                Birth: "1990-01-01T00:00:00"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.LotteryPaymentAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    // endregion

    // region PicPayment

    static async PicPaymentPaymentAsync(config: AuthConfig): Promise<void> {
        const request: PicPaymentPaymentRequest = {
            OrderId: randomUUID(),
            Amount: 5000,
            Currency: "USD",
            ClientInfo: {
                FirstName: "John",
                LastName: "Doe",
                PhoneNumber: "+33512345678",
                Email: "johnd@gmail.com",
                TaxId: "50284414727",
                Zip: "12345",
                Birth: "1990-01-01T00:00:00"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.PicPaymentPaymentAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    // endregion

    // region Pix

    static async PixPaymentAsync(config: AuthConfig): Promise<void> {
        const request: PixPaymentRequest = {
            OrderId: randomUUID(),
            Amount: 5000,
            Currency: "USD",
            ClientInfo: {
                FirstName: "John",
                LastName: "Doe",
                PhoneNumber: "+33512345678",
                Email: "johnd@gmail.com",
                TaxId: "50284414727",
                Zip: "12345",
                Birth: "1990-01-01T00:00:00"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.PixPaymentAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    // endregion

    // region Sepa

    static async SepaPayoutAsync(config: AuthConfig): Promise<void> {
        const request: SepaPayoutRequest = {
            OrderId: randomUUID(),
            Amount: 5000,
            Currency: "USD",
            ClientInfo: {
                FirstName: "John",
                LastName: "Doe",
                PhoneNumber: "+33512345678",
                Email: "johnd@gmail.com",
                Country: "AT",
                City: "Copenhagen",
                Zip: "12345",
                Address: "123, Park Lane",
                Birth: "1990-01-01T00:00:00"
            },
            Account: {
                Iban: "DE89370400440532013000",
                Country: "AT"
            }
        };
        const toolzoApi = new ToolzoApi(config);

        await toolzoApi.SepaPayoutAsync(request,
            result => {
                //Your success logic here
            },
            error => {
                //Your failed logic here
            });
    }

    // endregion
}
