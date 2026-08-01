import { it, expect, beforeAll, afterAll, beforeEach, afterEach, describe } from "vitest"
import { User } from "./hooks";
const testEmail = "test@test.com"
let user;

beforeEach(() => {
    user = new User(testEmail)
})

describe("test", () => {
    
    it("should update the email", () => {

        const newTestEmail = "newTest@test.com"
        user.updateEmail(newTestEmail)
        expect(user.getEmail()).toBe(newTestEmail)
    })

    it("should get the email", () => {
        expect(user.getEmail()).toBe(testEmail)
    })

    it("should delete the email", () => {
        user.deleteEmail()
        expect(user.getEmail()).toBe(null)
    })

    it("should get the email length", () => {
        expect(user.getEmailLength()).toBe(testEmail.length)
    })

    it("should get the email capitalized", () => {
        expect(user.getEmailCapitalized()).toBe(testEmail.toUpperCase())
    })


})

it.concurrent("should update the email concurrently",()=>{
    const newTestEmail="newTest@test.com"
    user.updateEmail(newTestEmail)
    expect(user.getEmail()).toBe(newTestEmail)
})