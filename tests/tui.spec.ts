import {test} from "../utils/fixtures"

test('Tui login user', async({api, config})=>{
    let response = await api
    .url(config.tuiURL)
    .path('/accounts.login')
    .headers({
        "content-type":"application/x-www-form-urlencoded",
    })
    .body({
        "loginID":"sashagalaievsecond@gmail.com",
        "password":"Test123!",
        "APIKey":"3_2a2E-f6RXOVzzgC24sReKDz4N8luhuZcrGKAxp5v7W6T3SZEPpsxOhV3C5TXsV3G",
        "pageURL":"https://www.tui.nl/mijntui/"
    })
    .POST_Request(200)
    console.log(response)
})