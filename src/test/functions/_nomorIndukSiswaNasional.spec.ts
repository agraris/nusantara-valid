import { expect } from "chai"
import { isValidNISN as isValid } from "../../ts/functions/index"
import { NISN_LENGTH, NISN_AGE_VALIDITY } from "../../ts/datas/nisn"

describe('NISN', () => {
    it('cannot be empty', () => {
        expect(isValid('')).to.be.false
    })

    it('cannot be null', () => {
        expect(isValid(null as any)).to.be.false
    })

    describe('type', () => {
        it('cannot be a boolean', () => {
            expect(isValid(true as any)).to.be.false
            expect(isValid(false as any)).to.be.false
        })

        it('cannot be a array', () => {
            expect(isValid([] as any)).to.be.false
        })

        it('cannot be a object', () => {
            expect(isValid({} as any)).to.be.false
        })

        it('cannot be a number', () => {
            expect(isValid(1234567890 as any)).to.be.false
        })

        it('can be a string', () => {
            expect(isValid('0061231234' as any)).to.be.true
        })
    })

    describe('is valid', () => {
        it('if it contains ' + NISN_LENGTH + ' digit numbers', () => {
            expect(isValid('0061231234')).to.be.true // Birth year => 2006
            expect(isValid('9991231234')).to.be.true // Birth year => 1999
        })

        it('if it still inside student periode of ' + NISN_AGE_VALIDITY + ' years', () => {
            expect(isValid('0061231234')).to.be.true // Birth year => 2006
            expect(isValid('9991231234')).to.be.true // Birth year => 1999
        })
    })

    describe('is invalid', () => {
        it('if it does not match NISN length of ' + NISN_LENGTH + ' digit number', () => {
            expect(isValid('00612312345')).to.be.false // Have 11 digits
            expect(isValid('999123123')).to.be.false // Have 9 digits
        })

        it('too old to be a student', () => {
            expect(isValid('9951231234')).to.be.false // Birth year => 1995
            expect(isValid('9881231234')).to.be.false // Birth year => 1998
        })

        it('student birth years is surpassing current year', () => {
            expect(isValid('0341231234')).to.be.false // Birth year => 2034
            expect(isValid('0991231234')).to.be.false // Birth year => 2099
        })
    })
})