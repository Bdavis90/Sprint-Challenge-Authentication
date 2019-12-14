const server = require("./server");
const request = require("supertest");
const db = require("../database/dbConfig");

// beforeEach(async () => {
//   await db("users").truncate();
// });

// describe("Post to /register", () => {
//   it("responds with 201 OK", () => {
//     return request(server)
//       .post("/api/auth/register")
//       .send({ username: "b", password: "abc123" })
//       .set("Content-Type", "application/json")
//       .then(res => {
//         expect(res.status).toBe(201);
//       });
//   });

//   it("responds with 201", () => {
//     return request(server)
//       .post("/api/auth/register")
//       .send({ username: "b", password: "abc123" })
//       .set("Content-Type", "application/json")
//       .then(res => {
//         expect(res.body.username).toEqual("b");
//       });
//   });
// });

// describe("POST to /login", () => {
//   it("responds with 200 Ok", () => {
//     return request(server)
//       .post("/api/auth/login")
//       .send({ username: "bdavis", password: "abc123" })
//       .then(res => {
//         expect(res.body).toEqual({ username: "bdavis", password: "abc123" });
//       });
//   });
// });

describe("auth-router.js", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("POST to /api/auth/register", () => {
    it("responds with 201 OK", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "TestBlake", password: "TestBlake" })
        .expect(201);

      done();
    });

    it("responds with JSON", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "test", password: "test" })
        .expect("Content-Type", /json/i);

      done();
    });
  });

  describe("POST  to /api/auth/login", () => {
    it("responds with 200 OK", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "BlakeTest", password: "BlakeTest" });

      request(server)
        .post("/api/auth/login")
        .send({ username: "TakeTest", password: "MakeTest" })
        .expect(200);

      done();
    });

    it("responds with JSON", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "TableBlake", password: "TableMake" });

      request(server)
        .post("/api/auth/login")
        .send({ username: "Skewers", password: "Brewers" })
        .expect("Content-Type", /json/i);

      done();
    });
  });
});
