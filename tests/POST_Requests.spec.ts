import { expect, request } from "playwright/test";
import { test } from "../utils/fixtures";
import { createToken } from "../helpers/createToken";

test.describe("Bondar academy", async () => {
  let createdAricleSlug;
  let updatedArticleSlug;
  let token: string;
  
  test.beforeAll('Get token', async({api, config})=>{
          token = await createToken(config.baseEmail, config.basePassword)
      })

  test("Create, update, delete article", async ({ api }) => {
    let response = await api
      .path("/articles")
      .headers({ Authorization: token })
      .body({
        article: {
          title: "Created article",
          description: "autotest",
          body: "body text",
          tagList: ["playwright"],
        },
      })
      .POST_Request(201);
    createdAricleSlug = response.article.slug;
    let updatedArticle = await api
      .path(`/articles/${createdAricleSlug}`)
      .body({
        article: {
          title: "updated article",
          description: "autotest",
          body: "body text",
          tagList: ["playwright"],
        },
      })
      .headers({ Authorization: token })
      .PUT_Request(200);
    expect(updatedArticle.article.title).toContain("updated");
    updatedArticleSlug = updatedArticle.article.slug;
    await api
      .path(`/articles/${updatedArticleSlug}`)
      .headers({ Authorization: token })
      .DELETE_Request(204);
  });
});
