import {it,expect,beforeAll,afterAll,beforeEach,afterEach} from "vitest"
import { User } from "./hooks";
 const testEmail="test@test.com"
let user;

beforeEach(()=>{
    user=new User(testEmail)
})
it("should update the email",()=>{
   
    const newTestEmail="newTest@test.com"
    user.updateEmail(newTestEmail)
    expect(user.getEmail()).toBe(newTestEmail)
})

it("should get the email",()=>{
    expect(user.getEmail()).toBe(testEmail)
})

it("should delete the email",()=>{
    user.deleteEmail()
    expect(user.getEmail()).toBe(null)
})

it("should get the email length",()=>{
    expect(user.getEmailLength()).toBe(testEmail.length)
})

it("should get the email capitalized",()=>{
    expect(user.getEmailCapitalized()).toBe(testEmail.toUpperCase())
})