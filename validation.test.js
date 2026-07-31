import { it, expect, describe } from 'vitest'
import { validateArrayNotEmpty, validationEmail } from './validation';


describe("validationEmail()", () => {
    it("should validate a correct email address", () => {
        const email = "example@gmail.com"
        const result = () => validationEmail(email);
        expect(result).not.toThrow();
    })

    it("should throw error if an invalid email is passed", () => {
        const email = "example@gmailcom"
        const result = () => validationEmail(email);
        expect(result).toThrow();
    })

    it("should throw an error if an empty string is passed", () => {
        const email = ""
        const result = () => validationEmail(email);
        expect(result).toThrow();
    })

})

describe("validateArrayNotEmpty()", () => {
    it("should throw an error if an emapty array or not array", () => {
        const array = [2, 5]
        const resultfn = () => validateArrayNotEmpty(array)
        expect(resultfn).not.toThrow()
    })
})


