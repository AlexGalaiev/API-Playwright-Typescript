import { config } from "../api-test.config";
import { test } from "../utils/fixtures";
import { getRandomNumber } from "../utils/randomData";
import { expect } from "playwright/test";

test.describe("Petshop GET reguests", async () => {

  let petId: number

  test.beforeEach("Add pet to shop", async ({ api, config }) => {
    petId = getRandomNumber()
    console.log('petId', petId)
    let response = await api
      .url(config.petShopUrl)
      .path("/pet")
      .headers({ Authorization: "special-key" })
      .body({
        id: petId,
        category: {
          id: 14888,
          name: `SnoopDogg_${petId}`,
        },
        name: `doggie_148881`,
        photoUrls: ["string"],
        tags: [
          {
            id: 6,
            name: "testAnimal",
          },
        ],
        status: "available",
      })
      .POST_Request(200);
      expect(response.id).toEqual(petId)
  });

  test("Get animal via petId", async ({ api,config }) => {
    console.log(petId)
    let response = await api
      .url(config.petShopUrl)
      .path(`/pet/${petId}`)
      .headers({ Authorization: "special-key" })
      .GET_Request(200);
    console.log(response.category.name);
    expect(response.category.name).toEqual(`SnoopDogg_${petId}`);
  })

  test('Login to platform by user', async({api, config})=>{
    let response = await api
    .url(config.petShopUrl)
    .path('/user/login')
    .params({username:'username_7639', password:'7639'})
    .GET_Request(200)

    expect(response.message).toContain('logged in user')
  })
  
})
