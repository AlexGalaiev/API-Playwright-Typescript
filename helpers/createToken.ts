import { RequestHandler } from "../utils/reguestHandler";
import { request } from "@playwright/test";
import { APILogger } from "../utils/logger";
import { config } from "../api-test.config";

export async function createToken(userEmail: string, userPassword: string) {
  let context = await request.newContext();
  let logger = new APILogger();
  let api = new RequestHandler(context, config.baseEmail, logger);

    try{
        let response = await api
            .url(`${config.baseUrl}`)
            .path("/users/login")
            .body({ user: { email: userEmail, password: userPassword } })
            .POST_Request(200)
        //let body = await response.json()
        return `Token ${response.user.token}`

    } catch(error) {
        Error.captureStackTrace(error, createToken)
        throw error
    }finally{
        await context.dispose()
    }
}

export async function getNagaToken(userEmail: string){
    let context = await request.newContext()
    let logger = new APILogger();
    let api = new RequestHandler(context, config.nagaAPIURL, logger)

    let response = await api
      .url(config.nagaAPIURL)
      .path("/user/login")
      .headers({ Platform: "web-trader" })
      .body({
        user_name: userEmail,
        password: "xxA36VLk5eX7zWqBZM36Ppq8VUUD61ZR189d+g6fYmo=",
        device_uuid: "a8d2892bd0fa302022fce6bdf7e51da4",
        g_recaptcha_type: "geetest",
        get_user_info: true,
      })
      .POST_Request(200);
    let token = `JWT ${response.info.token}`
    let xsrf = response.info.xsrf
    return [token, xsrf]
}
