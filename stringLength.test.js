import {it,expect} from "vitest"
import { returrnStrlength } from "./math";

it("the number of length",()=>{
    const result = returrnStrlength("sujon biswas")
    expect(result).toBe(12)
    // expect(result).not.toBeTypeOf('number')
})