import { expect } from "@playwright/test"
import { FakeUser } from "../lessons/CreateNewFakeUser"
import {test} from "../utils/fixtures"

test.describe('Feed tests', async()=>{

    test('Create post', async({apiNaga, config})=>{
        let randomPerson = new FakeUser()
        let createPost = await apiNaga
        .url(config.nagaAPIURL)
        .path("/user/activity/post_status")
        .headers({'accept-version':'2.*'})
        .body({
                "message": `${randomPerson.username}`,
                "medias": {
                    "images": [],
                    "videos": [],
                    "urls": []
                },
                "tagged_users": [],
                "tagged_symbols": [],
                "audience": null,
                "hashtags": [],
                "is_share_symbol_opinion": false
        })
        .POST_Request(200)
    })
})