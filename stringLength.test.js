import {it,expect} from "vitest"
import { returrnStrlength } from "./stringLength";


it("the number of length",()=>{
    const result = returrnStrlength("sujon biswas")
    expect(result).toBe(12)
    expect(result).toBeTypeOf('number')
    expect(result).not.toBeTypeOf("string")
})