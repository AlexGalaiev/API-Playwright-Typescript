import { test } from "..//utils/fixtures";
import { getRandomNumber } from "../utils/randomData";
import { expect } from "playwright/test";
test.describe("User swagger", async () => {

  test("Create user", async ({ api, config }) => {
    let userId = getRandomNumber();
    console.log(userId)
    await api
      .url(config.petShopUrl)
      .path("/user")
      .headers({ Authorization: "special-key" })
      .body({
        id: userId,
        username: `username_${userId}`,
        firstName: `fname_${userId}`,
        lastName: `lname_${userId}`,
        email: `email_${userId}@i.ua`,
        password: `${userId}`,
        phone: "+380932323233",
        userStatus: 0,
      })
      .POST_Request(200)
  })

  test('Get user via username', async({api, config})=>{
    let response = await api
    .url(config.petShopUrl)
    .path(`/user/username_7639`)
    .GET_Request(200)

    expect(response.email).toEqual(`email_7639@i.ua`)
  })


});
