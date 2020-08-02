import { expect } from "chai"
import { isValidZIP, isValidZIPWithComparison } from "../../ts/functions/index"

describe('ZIP code', () => {
    it('cannot be empty', () => {
        expect(isValidZIP('')).to.be.false
    })

    it('cannot be null', () => {
        expect(isValidZIP(null as any)).to.be.false
    })

    describe('type', () => {
        it('cannot be a boolean', () => {
            expect(isValidZIP(true as any)).to.be.false
            expect(isValidZIP(false as any)).to.be.false
        })

        it('cannot be a array', () => {
            expect(isValidZIP([] as any)).to.be.false
        })

        it('can be a object', () => {
            expect(isValidZIP({} as any)).to.be.false
        })

        it('can be a number', () => {
            expect(isValidZIP(55524)).to.be.true
        })

        it('can be a string', () => {
            expect(isValidZIP('55524')).to.be.true
        })
    })

    describe('isValid() = true', () => {
        it('when it has known ZIP Code', () => {
            expect(isValidZIP(55564)).to.be.true;
            expect(isValidZIP('55524')).to.be.true;
        })
    })

    describe('isValid() = false', () => {
        it('if does not has 5 digit number', () => {
            expect(isValidZIP(555643)).to.be.false; // 6 digits
            expect(isValidZIP('5552')).to.be.false; // 4 digits
        })

        it('if contain non numeric character', () => {
            expect(isValidZIP('55$24')).to.be.false
            expect(isValidZIP('55 24')).to.be.false
        })
    })

    describe('isValidWithComparison() = true', () => {
        it('when it has known ZIP Code from user specified provinceKey', () => {
            expect(isValidZIPWithComparison(55564, { provinceKey: '34' })).to.be.true;
            expect(isValidZIPWithComparison('55524', { provinceKey: '34' })).to.be.true;
            expect(isValidZIPWithComparison('55524', {})).to.be.true;
        })
    })

    describe('isValidWithComparison() = false', () => {
        it('when ZIP does not exist ZIP range from user specified provinceKey', () => {
            expect(isValidZIPWithComparison(55564, { provinceKey: '31' })).to.be.false; // 55564 is 34 (Yogyakarta) ZIP range, not 31 (Jakarta)
            expect(isValidZIPWithComparison('55524', { provinceKey: '31' })).to.be.false; // 55524 is 34 (Yogyakarta) ZIP range, not 31 (Jakarta)
        })
    })
})