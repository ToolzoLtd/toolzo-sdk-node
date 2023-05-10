import {AuthConfig} from "./Domain/AuthConfig";
import {ApiExamples} from "./Examples/ApiExamples";

const config: AuthConfig= {
    ApiKey: "28bd2741023249e6b32c029f82d2bddd",
    SecretKey: "l+q+Pk/MDvFGO/9+PJsyRSHGIVVoPrSgD37rNQ4tVcHUL4yWkjDqHKOd65pyZEIB9/wza9FPsG42jWBdHrOiyw==",
    Host: "https://s3.tlzdevstage.com",
    ApiVersion: "1"
};

(async function start() {
     await ApiExamples.CardsPaymentAsync(config);
    // await ApiExamples.CardsPaymentLatamAsync(config);
    // await ApiExamples.CardsPayoutAsync(config);
    // await ApiExamples.CardsRebillAsync(config);
    // await ApiExamples.CardsRefundAsync(config);
    // await ApiExamples.CardsReversalAsync(config);
    // await ApiExamples.GetOrderStateAsync(config);
    // await ApiExamples.PaymentLinkAsync(config);
    // await ApiExamples.BankTransferEuPaymentAsync(config);
    // await ApiExamples.BankTransferChinaPaymentAsync(config);
    // await ApiExamples.BankTransferChinaPayoutAsync(config);
    // await ApiExamples.CryptoPaymentAsync(config);
    // await ApiExamples.CryptoPayoutAsync(config);
    // await ApiExamples.PicPaymentPaymentAsync(config);
    // await ApiExamples.SepaPayoutAsync(config);
    // await ApiExamples.PixPaymentAsync(config);
    // await ApiExamples.LotteryPaymentAsync(config);
    // await ApiExamples.BoletoPaymentAsync(config);
    // await ApiExamples.DepositExpressPaymentAsync(config);
})();
