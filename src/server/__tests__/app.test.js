import request from "supertest"
import app from "../app"

describe("Test the root path of the API", () => {
    it("should respond to a GET method", () => {
        return request(app).get("/api/").then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe("Hello Server!");
        });
    });
});