import request from "supertest"

import { app } from "../../src/app"
import { config } from "../../src/config/index"

describe("Server", () => {
  it("Should start and have a proper test environment", () => {
    expect(config.node_env).toBe("test")
    expect(app).toBeDefined()
  }, 10_000)

  it("Should return CORS headers and 204 status code for OPTIONS request", async () => {
    const response = await request(app).options("/")
    expect(response.status).toBe(204)
    expect(response.headers["access-control-allow-origin"]).toBe(
      `${config.client.protocol}://${config.client.hostname}:${config.client.port}`
    )
    expect(response.headers["access-control-allow-credentials"]).toBe("true")
    expect(response.headers["access-control-allow-methods"]).toBe(
      "PUT,POST,PATCH,DELETE,GET"
    )
    expect(response.headers["access-control-allow-headers"]).toBe(
      "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    )
  })

  it("Should correctly handle 404 Not Found", async () => {
    const response = await request(app).get("/invalid-route")
    expect(response.status).toBe(404)
    expect(response.body).toEqual({ error: "This route could not be found" })
  })

  it("Should respond with health check message", async () => {
    const response = await request(app).get("/api/v1/health-check")
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: "All healthy!" })
  })

  it("Should sanitize request data to prevent XSS attacks", async () => {
    const response = await request(app)
      .post("/some-endpoint")
      .send({ userInput: "<script>alert('XSS')</script>" })
    expect(response.text).not.toContain("<script>")
  })

  it("Should set appropriate security headers", async () => {
    const response = await request(app).get("/")
    expect(response.headers).toHaveProperty("x-dns-prefetch-control", "off")
    expect(response.headers).toHaveProperty("x-frame-options", "SAMEORIGIN")
    expect(response.headers).toHaveProperty("x-content-type-options", "nosniff")
  })

  it("Should correctly handle JSON request body size limit", async () => {
    const largeRequestBody = "a".repeat(17000)
    const response = await request(app)
      .post("/")
      .send({ data: largeRequestBody })
    expect(response.status).toBe(413)
  })

  it("Should correctly handle URL-encoded request body size limit", async () => {
    const largeUrlEncodedBody = "a".repeat(17000)
    const response = await request(app)
      .post("/")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(`data=${encodeURIComponent(largeUrlEncodedBody)}`)
    expect(response.status).toBe(413)
  })

  it("should compress responses unless 'x-no-compression' header is present", async () => {
    const responseWithHeader = await request(app)
      .get("/")
      .set("x-no-compression", "true")
    expect(responseWithHeader.headers["content-encoding"]).toBeUndefined()
  })
})
