import { expect, request } from "playwright/test"
import {test} from "../utils/fixtures"
import { APILogger } from "../utils/logger"
import { createToken } from "../helpers/createToken"

test.describe('Bondar Academy', async()=>{

    let token: string;

    test.beforeAll('Get token', async({config})=>{
        token = await createToken(config.baseEmail, config.basePassword)
    })


    test('Get number of articles', async({api}) =>{
    let tagsExample = ["Test","Git","Zoom","Bondar Academy","YouTube","Blog","qa career","QA Skills","Value-Focused","GitHub"]
    let response = await api
    .path('/tags').GET_Request(200)
    expect(response.tags.length).toEqual(10)
    expect(response.tags).toEqual(tagsExample)
})

test('Get first article', async({api})=>{
    let response = await api
    .path('/articles')
    .params({limit: '3', offset:'1'})
    .GET_Request(200)

    expect(response.articles[0].slug).toContain('The-value-of-pre-recorded-video-classes')
    expect(response.articles[0].title).toContain('The value of pre-recorded video classes.')
})

test('Get user info', async({api, config})=>{
    let response = await api
    .url(config.baseUrl)
    .path('/user')
    .headers({'Authorization': token})
    .GET_Request(200)
    expect(response.user.id).toEqual(37486)
    expect(response.user.email).toEqual('testTrading@i.ua')
    expect(response.user.username).toEqual('testTrading2')
})
})


