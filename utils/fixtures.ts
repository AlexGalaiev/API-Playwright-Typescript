import {test as base} from "@playwright/test"
import { RequestHandler } from '../utils/reguestHandler';
import { APILogger } from "./logger";
import { config } from "../api-test.config";
import { getNagaToken } from "../helpers/createToken";


export type TestOptions = {
    appUrl: string;
    api: RequestHandler;
    config: typeof config;
    apiNaga: RequestHandler
} 

export const test = base.extend<TestOptions>({
    appUrl: ['', {option: true}],
    api: async({request}, use)=>{
        let logger = new APILogger
        let requestHandler = new RequestHandler(request, config.baseUrl, logger)
        await use(requestHandler)
    },
    config: async({}, use)=>{
        await use(config)
    }, 
    apiNaga: async({config, playwright}, use) =>{
        let logger = new APILogger
        let [token, xsrf] = await getNagaToken(config.baseEmail)
        let apiNaga = await playwright.request.newContext({
            extraHTTPHeaders:{
                'Platform':'web-trader',
                'Authorization':token,
                'xsrf':xsrf,
                'Content-Type':'application/json'
            }
        })
        let requestHandler = new RequestHandler(apiNaga, config.nagaAPIURL, logger)
        console.log('fixture')
        await use(requestHandler)
    },
})

