import { expect } from "@playwright/test"
import { FakeUser } from "../lessons/CreateNewFakeUser"
import {test} from "../utils/fixtures"
import { setTimeout } from 'timers/promises';
import { updatePost } from "../response-schema/NagaUserInfo/Naga_feed_updatePost";

test.describe('Feed tests', async()=>{

    let userId: number;
    let randomPerson: string;
    let posts:any

    test.beforeEach('Create post', async({apiNaga, config})=>{
        randomPerson = new FakeUser().username
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
        await setTimeout(3000)
    })

    test('Check and edit post', async({apiNaga, config})=>{
        posts = await apiNaga
        .url(config.nagaAPIURL)
        .path(`/user/activity/feed/profile/${userId}/browse`)
        .body({"from":0,"to":20,"filter":"all"})
        .POST_Request(200)
        expect(posts.data.user_events.user_message[0].data.description).toEqual(randomPerson)

        let activityId = posts.data.user_events.user_message[0].activity_id
        let newPost = await apiNaga
        .url(config.nagaAPIURL)
        .path(`/user/activity/status/${activityId}`)
        .body({
            "message": "updated post",
            "medias": {
                "images": [],
                "videos": [],
                "urls": []
            },
            "tagged_users": [],
            "tagged_symbols": [],
            "mood": null,
            "audience": null,
            "hashtags": [],
            "is_share_symbol_opinion": false,
            "id": `${activityId}`,
            "activity_id": `${activityId}`
        })
        .PUT_Request(200)
        expect(newPost.data.message).toEqual('updated post')
        let postUpdateResponseSchema = updatePost.toJSONSchema()
        let result = postUpdateResponseSchema.safeParse(newPost)
        expect(result.success).toBeTruthy()
    })



    test.afterEach('Delete posts', async({apiNaga, config})=>{
        let activityIds = posts.data.user_events.user_message[0].activity_id
        await apiNaga.url(config.nagaAPIURL)
        .path(`/user/activity/status/${activityIds}`)
        .body({activity_type: 1})
        .DELETE_Request(200)
    })

    
        
    })
