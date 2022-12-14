const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

describe("When initially some blogs are added to db", () => {
  test("Blogs are returned as json", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Verify the uniuque identifier property is named id", async () => {
    const response = await api.get("/api/blogs");
    const idArray = response.body.map((blog) => blog.id);
    for (let i in idArray) {
      expect(i).toBeDefined();
    }
  });
});

afterAll(() => {
  mongoose.connection.close();
});
