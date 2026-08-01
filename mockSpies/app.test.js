import {it,expect,describe,beforeEach,afterEach,vi} from "vitest"
import { generateToken } from "./app";

describe("generateToken()",()=>{
    it("should execute the logger funtion if passed",()=>{
        const logger=vi.fn()
        generateToken(logger)
        expect(logger).toHaveBeenCalled()
    })
});