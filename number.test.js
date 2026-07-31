import { describe, it, expect } from "vitest";
import { cleanNumbers } from "./number";

describe("cleanNumbers", () => {
  it("should return an array of numbers if an array of string numbers is provided", () => {
    const stringNumbers = ["2", "3"];

    const result = cleanNumbers(stringNumbers);

    expect(result[0]).toBeTypeOf("number");
    expect(result[1]).toBeTypeOf("number");
  });
});