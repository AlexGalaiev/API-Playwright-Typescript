import { expect } from "@playwright/test"
import {test} from "../utils/fixtures"
import { userDelivery } from "../response-schema/zakaz.ua_userDelivery"
import { UserProfile } from "../response-schema/zakaz.ua_userProfile"

test.describe('Zakaz.ua -> User profile', async()=>{
    let response: any
    let userId: string

    test.beforeAll('Get userId', async({api, config})=>{
        response = await api
        .url(config.zakazURL)
        .path('/user/login/')
        .body({
            "login": `${config.zakazUser}`,
            "password": `${config.zakazPassword}`
        })
        .POST_Request_withSavingState(200, '.auth/zakazUa_StorateState.json')
        userId = response.user_id
    })
    
    test.use({'storageState':'.auth/zakazUa_StorateState.json'})
    test('API.Check User delivery', async({api, config})=>{
        let responseData = await api
        .url(config.zakazURL)
        .path('/user/delivery')
        .body({'x-chain':'*'})
        .GET_Request(200)

        expect(responseData.delivery.address.plan.type).toEqual("apartment")
        expect(responseData.delivery.address.plan.street).toEqual("Воскресенская улица")
        expect(responseData.delivery.address.plan.region_id).toEqual("kiev")
        expect(responseData.delivery.address.plan.delivery_service_id).toEqual("zakaz")
        let result = userDelivery.safeParse(responseData)
        expect(result.success).toBeTruthy()
    })

    test.use({'storageState':'.auth/zakazUa_StorateState.json'})
    test('Api. Check user profile', async({api, config})=>{
        let responseData = await api
        .url(config.zakazURL)
        .path('/user/profile/')
        .GET_Request(200)

        expect(responseData.login.phone).toEqual("380932107253")
        expect(responseData.emails[0].email).toEqual("sashagalaievsecond@gmail.com")
        expect(responseData.name).toEqual("Александр")
        expect(responseData.meta_user_id).toEqual(userId)
        
        let result = UserProfile.safeParse(responseData)
        expect(result.success).toBeTruthy()
    })
})