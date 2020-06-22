import { expect } from "chai"
import { isValidZIP as isValid } from "../ts/functions/index"

describe('ZIP code', () => {
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

        it('can be a object', () => {
            expect(isValid({} as any)).to.be.false
        })

        it('can be a number', () => {
            expect(isValid(55524)).to.be.true
        })

        it('can be a string', () => {
            expect(isValid('55524')).to.be.true
        })
    })

    describe('is valid', () => {
        it('when it has known ZIP Code', () => {
            expect(isValid(55564)).to.be.true;
            expect(isValid('55524')).to.be.true;
        })
    })

    describe('is invalid', () => {
        it('if does not has 5 digit number', () => {
            expect(isValid(555643)).to.be.false; // 6 digits
            expect(isValid('5552')).to.be.false; // 4 digits
        })

        it('if contain non numeric character', () => {
            expect(isValid('55$24')).to.be.false
            expect(isValid('55 24')).to.be.false
        })
    })
})