import { expect } from "chai"
import { isValidTelephoneNumber as isValid } from "../ts/functions/index"

describe('Telephone number', () => {

    it('cannot be empty', () => {
        expect(isValid('')).to.be.false;
    })

    it('cannot be null', () => {
        expect(isValid(null as any)).to.be.false;
    })

    describe('type', () => {
        it('cannot be a boolean', () => {
            expect(isValid(true as any)).to.be.false;
            expect(isValid(false as any)).to.be.false;
        })

        it('cannot be a array', () => {
            expect(isValid([] as any)).to.be.false;
        })

        it('cannot be a object', () => {
            expect(isValid({} as any)).to.be.false;
        })

        it('cannot be a number', () => {
            expect(isValid(12345 as any)).to.be.false;
        })
    })

    describe('is not Valid when it has', () => {
        it('unknown cellular prefix', () => {
            expect(isValid('0999123456')).to.be.false;
        })
    })

    describe('is Valid when it has', () => {
        it('known landline areacode', () => {
            expect(isValid('0274123456')).to.be.true;
        })
    })

})
