import { expect } from "chai"
import { isValidCellularNumber as isValid } from "../ts/functions/index"
import { CELLULAR_MIN_LENGTH, CELLULAR_MAX_LENGTH } from "../ts/datas/cellular"

describe('Cellular number', () => {

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
        it('less than ' + CELLULAR_MIN_LENGTH + ' digits including country code', () => {
            expect(isValid('081812345')).to.be.false;
        })

        it('more than ' + CELLULAR_MAX_LENGTH + ' digits including country code', () => {
            expect(isValid('08181234567890')).to.be.false;
        })

        it('unknown cellular prefix', () => {
            expect(isValid('0999123456')).to.be.false;
        })
    })

    describe('is Valid when it has', () => {
        it(CELLULAR_MIN_LENGTH + ' to ' + CELLULAR_MAX_LENGTH + ' digits including country code', () => {
            expect(isValid('0818123456')).to.be.true;
        })
    })

})
