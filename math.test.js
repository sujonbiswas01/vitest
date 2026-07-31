import { expect, it } from 'vitest'
import { add } from './math'

// it('sum of the array', () => {
//     const numbers=[20,30,50]
//     const exptectresult=numbers.reduce((acc,cur)=>acc+cur,0)
//     const result =add(numbers)
//   expect(result).toBe(exptectresult)
// })


// it('it shound provide nan if atleast one invalid number is provided', () => {
//     const numbers=["20","30","50"]
//     const exptectresult=numbers.reduce((acc,cur)=> +acc + +cur)
//     const result =add(numbers)
//   expect(result).toBe(exptectresult)
// })



// it("It should throw an error if no argument is passed",()=>{
//     const resultfn =()=>{
//         add()
//     }
//     expect(resultfn).toThrow()
// })

it("It should throw an error if multiple argument is provided",()=>{
    const resultfn =()=>{
        add(1,2,3,4)
    }
    expect(resultfn).toThrow();
})


