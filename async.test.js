import {it,expect,beforeAll,afterAll,beforeEach,afterEach} from "vitest"
import CryptoJS from "crypto-js";
import { encrypMessage, encrypMessagePromize } from "./async";
beforeAll(()=>{
    console.log("before all")
})
afterAll(()=>{
    console.log("after all")
})
beforeEach(()=>{
    console.log("before each")
})
afterEach(()=>{
    console.log("after each")
})
it("should encrypt a message",async()=>{
    const message="Programming Hero"
    const secretKey="458963"
    const encryptedData=await new Promise((resolve,reject)=>{
         encrypMessage(message,secretKey,(message)=>{resolve(message)})
    })
    expect(encryptedData).toBeDefined()
})

it("should also just pass",async()=>{
    const message="Programming Hero"
    const secretKey="458963"
    const encryptedData= await encrypMessagePromize(message,secretKey,(message)=>{resolve(message)})
    expect(encryptedData).toBeDefined()
})

it("should also just pass",async()=>{
    const message="Programming Hero"
    const secretKey="458963"
    const encryptedData= await encrypMessagePromize(message,secretKey,(message)=>{resolve(message)})
    expect(encryptedData).toBeDefined()
    const decryptedData=CryptoJS.AES.decrypt(encryptedData,secretKey).toString(CryptoJS.enc.Utf8)
    expect(decryptedData).toBe(message)
})