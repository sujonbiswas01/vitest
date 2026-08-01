import {it,expect,beforeAll,afterAll,beforeEach,afterEach} from "vitest"
import { User } from "./hooks";

it("should update the email",()=>{
    const testEmail="test@test.com"
    const newTestEmail="newTest@test.com"
    const user=new User(testEmail)
    user.updateEmail(newTestEmail)
    expect(user.getEmail()).toBe(newTestEmail)
})

it("should get the email",()=>{
    const testEmail="test@test.com"
    const user=new User(testEmail)
    expect(user.getEmail()).toBe(testEmail)
})

it("should delete the email",()=>{
    const testEmail="test@test.com"
    const user=new User(testEmail)
    user.deleteEmail()
    expect(user.getEmail()).toBe(null)
})

it("should get the email length",()=>{
    const testEmail="test@test.com"
    const user=new User(testEmail)
    expect(user.getEmailLength()).toBe(testEmail.length)
})

it("should get the email capitalized",()=>{
    const testEmail="test@test.com"
    const user=new User(testEmail)
    expect(user.getEmailCapitalized()).toBe(testEmail.toUpperCase())
})