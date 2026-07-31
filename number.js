import { transformToNumber } from "./transformToNumber";

export function cleanNumbers(inputNumber) {
  const numbers = [];

  for (const numberInput of inputNumber) {
    const number = transformToNumber(numberInput);
    numbers.push(number);
  }

  return numbers;
}