import { expect } from "@playwright/test"
import { FakeUser } from "../lessons/CreateNewFakeUser"
import {test} from "../utils/fixtures"

test.describe('Feed tests', async()=>{

    let userId;

    test('Create post', async({apiNaga, config})=>{
        let randomPerson = new FakeUser().username
        let createPost = await apiNaga
        .url(config.nagaAPIURL)
        .path("/user/activity/post_status")
        .body({
                "message": `${randomPerson}`,
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
        userId = createPost.data.data.data.user_id1 
        let posts = await apiNaga
        .url(config.nagaAPIURL)
        .path(`/user/activity/feed/profile/${userId}/browse`)
        .body({"from":0,"to":20,"filter":"all"})
        .POST_Request(200)
        console.log(posts)
        expect(posts.data.user_events.user_message[0].data.description).toEqual(randomPerson)

    })

})