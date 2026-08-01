import {it,expect,describe,beforeEach,afterEach,vi} from "vitest"
import { saveTokenToFile } from "./io";
import {promises as fs} from "fs"
vi.mock("fs")
vi.mock("path",()=>{
    return {
        default:{
            join:(...args)=>args[args.length-1]
        }
    }
})
it("should save the token to the file",()=>{
    const data="f628d72b6910ec00699026a49105b402f7556b6bd496f4b0c5e2b67d19a5aa55"
    const filePath="token.txt"

    saveTokenToFile(data,filePath)
    expect(fs.writeFile).toHaveBeenCalled()
    // expect(saveTokenToFile(data,filePath)).toBeDefined()
})