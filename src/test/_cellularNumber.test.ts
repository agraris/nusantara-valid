import { expect } from "chai"
import { isValidCellularNumber as isValid, getDataCellularNumber as getData, formatCellularNumber as format } from "../ts/functions/index"
import { CELLULAR_MIN_LENGTH, CELLULAR_MAX_LENGTH } from "../ts/datas/cellular"
import { COUNTRY_CODE } from "../ts/datas/province"

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

    describe('isValid() = true', () => {
        it('when it has ' + CELLULAR_MIN_LENGTH + ' to ' + CELLULAR_MAX_LENGTH + ' digits including country code', () => {
            expect(isValid('08181234567')).to.be.true;
        })

        it('even when country code is included', () => {
            expect(isValid('628181234567')).to.be.true;
        })

        it('even when leading plush (+) symbol is included', () => {
            expect(isValid('+628181234567')).to.be.true;
        })

        it('even with formating', () => {
            expect(isValid('0818-1234-1234')).to.be.true;
        })
    })

    describe('inValid() = false', () => {
        it('when it has less than ' + CELLULAR_MIN_LENGTH + ' digits including country code', () => {
            expect(isValid('081812345')).to.be.false;
        })

        it('when it has more than ' + CELLULAR_MAX_LENGTH + ' digits including country code', () => {
            expect(isValid('08181234567890')).to.be.false;
        })

        it('when it has unknown cellular prefix', () => {
            expect(isValid('0999123456')).to.be.false;
        })
    })

    describe('getData()', () => {
        it('should return an object of mobile Provider', () => {
            expect(getData('081812345678')).to.deep.equal(
                {
                    key: 'XL',
                    name: 'XL Axiata'
                }
            )
            expect(getData('081212345678')).to.deep.equal(
                {
                    key: 'TELKOMSEL',
                    name: 'Telkomsel'
                }
            )
        })
    })

    describe('format()', () => {
        it('sould format for local line', () => {
            expect(format('081812341234')).to.be.string('0818-1234-1234');
            expect(format('+6285612341234')).to.be.string('0856-1234-1234');
        })

        it('sould format for international line with international calling code +' + COUNTRY_CODE, () => {
            expect(format('081812341234', true)).to.be.string('+62818-1234-1234');
            expect(format('+6285612341234', true)).to.be.string('+62856-1234-1234');
        })
    })
})
