import { config, off } from "process"
import { test } from "../utils/fixtures"
import { expect } from "@playwright/test"
import {z} from "zod" 

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
        expect(actualObject, `Payment with ${data.id} is not defined in response`).toBeDefined()
        
        let expectedObjectResponse = z.object({
            "id": z.literal(data.id),
            "internal_name": z.literal(data.key),
            "show_on_fsa": z.literal(data.fsa),
            "show_on_nm": z.literal(data.nm),
            "show_on_adgm": z.literal(data.adgm),
            "show_on_za": z.literal(data.za),
            "show_on_nm_es": z.literal(data.es),
            "icon":z.object({
                "id": z.number(),
                "name": z.string(),
                "alternativeText": z.string(),
                "url": z.url(),
                "width": z.number(),
                "height": z.number(),
                "formats": z.null()
        })
    })
    //let responsesArray = z.array(expectedObjectResponse)
    let result = expectedObjectResponse.safeParse(actualObject)
    expect(result.success).toBeTruthy()
    })
}})
