const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");

// Global ------------------------

let token;
// login, receive token, token used for tests
beforeEach(async done => {
  await db("users").truncate();
  request(server)
  .post("/api/auth/register")
  .send({
    username: "user",
    password: "pw"
  })
  .end((err, response) => {
    // log response if needed to see if variables/objects being stored
    // console.log(response)
    token = response.body.token; // save the token
    done();
  });
});

// TEST SUITES

// server

describe('server', () => {

  let meal = { item_name: "Burger" };

  describe('GET /api/meals', () => {

    test('should set testing environment', () => {
      expect(process.env.DB_ENV).toBe("testing");
    });

    test('should return JSON', () => {
      return request(server)
        .get("/api/meals")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });
    
    test('should return status code 401 when not authorized', () => {
      return request(server)
        .get("/api/meals")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    
    test.skip('should return status code 200 when authorized', () => {
      return request(server)
        .post("Authorization", `${token}`)
        .get("/api/meals")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });

  describe.skip('', () => {
    
  })
  
  
});
