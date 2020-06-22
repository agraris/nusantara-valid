import { expect } from "chai"
import { isValid } from "./_nomorIndukSiswaNasional"
import { NISN_LENGTH } from "../datas/nisn"

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
    })

    describe('is invalid', () => {
        it('if it does not match NISN length of ' + NISN_LENGTH + ' digit number', () => {
            expect(isValid('00612312345')).to.be.false // Have 11 digits
            expect(isValid('999123123')).to.be.false // Have 9 digits
        })
    })
})