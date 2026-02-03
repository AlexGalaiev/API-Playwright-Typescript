import {test} from "..//utils/fixtures"

test.describe('Rozetka api test', async()=>{

    test('Login to rozetka via user', async({api, config})=>{
        let response = await api
        .url(config.rozetka)
        .path('frame/defender/verify/register')
        .headers({
            'origin':'https://connect.rozetka.com.ua',
            'content-type':'application/json'
        })
        .body({
            "client_id": "0b511783-e98e-4174-a802-0036e4518aa3",
            "policy_group": "otp",
            "user_marker": "+380932107253"
        })
        .POST_Request(200)
        console.log(response)
    })
})  