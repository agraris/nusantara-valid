import { expect } from "chai"
import { isValidCCNumber as isValid, formatCCNumber as format } from "../../ts/functions/index"

describe('Credit Card number', () => {

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

    describe('isValid()', () => {
        it('when it has the correct length', () => {
            expect(isValid('4000 8000 0000 0000')).to.be.true; // 16
            expect(isValid('5000000000000000')).to.be.true; // 16
        })

        it('has valid MII identifier', () => {
            expect(isValid('4000 8000 0000 0000')).to.be.true; // 4
            expect(isValid('5000000000000000')).to.be.true; // 5
        })
    })

    describe('isInvalid()', () => {
        it('when it has incorect length, less or more than it should', () => {
            expect(isValid('4000 8000 000 000 000')).to.be.false; // 17
            expect(isValid('500000000000000')).to.be.false; // 15
        })

        it('has invalid MII identifier', () => {
            expect(isValid('7000 8000 0000 0000')).to.be.false; // 7
            expect(isValid('6000000000000000')).to.be.false; // 6
        })
    })
    
    describe('format()', () => {
        it('should has the correct format', () => {
            expect(format('4000123412341234')).to.be.string('4000 1234 1234 1234');
            expect(format('5000 5678 5678 5678')).to.be.string('5000 5678 5678 5678');
        })
    })
})
