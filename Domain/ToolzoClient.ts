import {AuthConfig} from "./AuthConfig";
import {RequestMessage} from "../DTO/Infastructure/RequestMessage";
import axios from "axios";
import * as cryptoJS from "crypto-js";
import {ResponseMessage} from "../DTO/Infastructure/ResponseMessage";

export class ToolzoClient {
    private readonly _config: AuthConfig;

    constructor(config: AuthConfig) {
        this._config = config;
    }

    public async SendAsync(requestMessage: RequestMessage): Promise<ResponseMessage> {
        const payload = JSON.stringify(requestMessage);
        const secret = cryptoJS.enc.Base64.parse(this._config.SecretKey);
        const hmac = cryptoJS.HmacSHA1(payload, secret);
        const signature = cryptoJS.enc.Base64.stringify(hmac);
        const httpMessage = {
            ApiKey: this._config.ApiKey,
            Payload: btoa(payload),
            Signature: signature
        }
        const result = await axios.post(`${this._config.Host}/api/v1/`,JSON.stringify(httpMessage))
        const parsedWordArray = cryptoJS.enc.Base64.parse(result.data.Payload);
        const parsedStr = parsedWordArray.toString(cryptoJS.enc.Utf8);
        return JSON.parse(parsedStr);
    }
}
