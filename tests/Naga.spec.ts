import { test } from "..//utils/fixtures";
import { config } from "../api-test.config";
import { expect } from "@playwright/test";
import { schemaValidation } from "../utils/schema-validator";
import { console } from "inspector";

test.describe("Naga Login", async () => {

  test('Get userInfo data', async({apiNaga, config})=>{
    let userInfo = await apiNaga
    .url(config.nagaAPIURL)
    .path('/user/info')
    .GET_Request(200)

    console.log(1221212121212121)

    //await schemaValidation('NagaUserInfo', 'GET_userInfo', userInfo)
    expect(userInfo.data.user_name).toEqual('testTrading')
  })

  test('Get List of linked accounts', async({apiNaga})=>{
    let responseData = await apiNaga
    .url(config.nagaAPIURL)
    .path('/broker/list_linked_accounts')
    .headers({'accept-version':'1.*'})
    .POST_Request(200)

    console.log('tuttttttttt')
    expect(responseData.data.login).toEqual('8001018')
    expect(responseData.data.login).toEqual('2641312')

  })

})