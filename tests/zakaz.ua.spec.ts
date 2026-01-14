import { expect } from "@playwright/test"
import {test} from "../utils/fixtures"
import { userDelivery } from "../response-schema/zakaz.ua_userDelivery"

test.describe('Zakaz.ua -> User profile', async()=>{
    let response: object

    test.beforeAll('Get userId', async({api, config})=>{
        response = await api
        .url(config.zakazURL)
        .path('/user/login/')
        .body({
            "login": `${config.zakazUser}`,
            "password": `${config.zakazPassword}`
        })
        .POST_Request_withSavingState(200, '.auth/zakazUa_StorateState.json')
    })
    
    test.use({'storageState':'.auth/zakazUa_StorateState.json'})
    test('API.Check User delivery', async({api, config})=>{
        let response = await api
        .url(config.zakazURL)
        .path('/user/delivery')
        .body({'x-chain':'*'})
        .GET_Request(200)

        expect(response.delivery.address.plan.type).toEqual("apartment")
        expect(response.delivery.address.plan.street).toEqual("Воскресенская улица")
        expect(response.delivery.address.plan.region_id).toEqual("kiev")
        expect(response.delivery.address.plan.delivery_service_id).toEqual("zakaz")
        let userDeliveryJSONSchema = userDelivery.toJSONSchema()
        let result =  userDeliveryJSONSchema.safeParc
    })
})