import { expect } from "chai"
import { correctLength } from "../../ts/helpers"

describe('Correct Length', () => {
    it('Return false if using a mode other than 0, 1, and 2', () => {
        expect(correctLength(3, 3, { collection: [1, 2, 3, 4, 5], minLength: 2, maxLength: 7 })).to.be.false
    })
})