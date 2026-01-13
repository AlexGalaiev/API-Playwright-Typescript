import { test } from "../utils/fixtures"
import { expect } from "@playwright/test"
import {paymentMethods} from "../response-schema/website_response_schemas"
import { productVericalsSchema } from "../response-schema/website_response_schemas"

test.describe("Naga website. Check payment providers", async()=>{

let response: any

test.beforeAll("Get exist response", async({api,config})=>{
    response = await api
        .url(config.websiteNaga)
        .path('/get-payment-methods')
        .GET_Request(200)
})

type PaymentMethod = {
    id: number,
    key: string,
    fsa: boolean,
    nm: boolean,
    adgm: boolean,
    za: boolean,
    es: boolean
}
const payments: PaymentMethod[] = [
    {id:1, key:'mastercard', fsa:true, adgm:true, nm:true, za:true, es:false},
    {id:2, key:'maestro', fsa:true, adgm:true, nm:true, za:true, es:false},
    {id:3, key:'visa-electron', fsa:true, adgm:true, nm:true, za:true, es:false},
    {id:4, key:'neteller', fsa:true, adgm:true, nm:true, za:true, es:false},
    {id:5, key:'visa', fsa:true, adgm:true, nm:true, za:true, es:false},
    {id:6, key:'skrill', fsa:true, adgm:false, nm:true, za:true, es:false},
    {id:7, key:'equals', fsa:true, adgm:false, nm:true, za:false, es:false},
    {id:8, key:'eurobank', fsa:false, adgm:false, nm:false, za:false, es:true},
    {id:9, key:'alphabank', fsa:false, adgm:false, nm:false, za:false, es:true},
    {id:10, key:'neteller-nm-es', fsa:false, adgm:false, nm:false, za:false, es:true},
    {id:11, key:'pay-pal', fsa:false, adgm:false, nm:false, za:false, es:true},
    {id:12, key:'skrill-nm-es', fsa:false, adgm:false, nm:false, za:false, es:true},
    {id:13, key:'equals-nm-es', fsa:false, adgm:false, nm:false, za:false, es:true}
]
for(const data of payments) {
    test(`Check payment method -${data.id}-${data.key}`, async({api, config})=>{
        let actualObject = response.find((item:any) => item.id === data.id )
        expect(actualObject, `Payment with ${data.id} is not defined in response`).toBeTruthy()
        let expectedObjectResponse = paymentMethods(data.id, data.key, data.fsa, data.nm, data.adgm, data.za, data.es)
    let result = expectedObjectResponse.safeParse(actualObject)
    expect(result.success).toBeTruthy()
    })
}})

test.describe('Naga website - product verticals', async()=>{
    let response: any
    
    test.beforeAll('Get product verticals response', async({api, config})=>{
        response = await api.url(config.websiteNaga).path("/get-products-verticals").GET_Request(200)
    })

    type ProductVerticals = {
        id: number,
        key: string,
        fsa: boolean,
        nm: boolean,
        adgm: boolean,
        za: boolean
    }
    const productVerticals: ProductVerticals[] = [
        {'id':3, 'key':'crypto', 'fsa':true, 'nm':false, 'adgm':true, 'za':true},
        {'id':5, 'key':'crypto-nm', 'fsa':false, 'nm':true, 'adgm':false, 'za':false},
        {'id':2, 'key':'invest', 'fsa':true, 'nm':true, 'adgm':true, 'za':false},
        {'id':4, 'key':'pay', 'fsa':true, 'nm':false, 'adgm':true, 'za':true},
        {'id':6, 'key':'pay-nm', 'fsa':false, 'nm':true, 'adgm':false, 'za':false},
        {'id':1, 'key':'trade', 'fsa':true, 'nm':true, 'adgm':true, 'za':true}
    ]
    for(const products of productVerticals){
        test(`Checlk product ->${products.key} with different regulation`, async()=>{
            let activeTab = response.find((item:any)=> item.id === products.id)
            expect(activeTab, `Tab ${activeTab} is not been displayed`).toBeDefined()
            let instrumentTab= productVericalsSchema(products.id, products.key, products.fsa, products.nm, products.adgm, products.za)
            let result = instrumentTab.safeParse(activeTab)
            expect(result.success).toBeTruthy()

        })
    }

})

