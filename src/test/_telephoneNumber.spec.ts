import { expect } from "chai"
import { isValidTelephoneNumber as isValid, formatTelephoneNumber as format } from "../ts/functions/index"
import { COUNTRY_CODE } from "../ts/datas/province";

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

    describe('isInvalid()', () => {
        it('when it has unknown cellular prefix', () => {
            expect(isValid('0999123456')).to.be.false;
        })
    })

    describe('isValid()', () => {
        it('when it has known landline areacode', () => {
            expect(isValid('0274123456')).to.be.true;
        })
    })

    describe('format()', () => {
        it('sould format for local line', () => {
            expect(format('0274123456')).to.be.string('0274-123456');
            expect(format('021333444')).to.be.string('021-333444');
        })

        it('sould format for international line with international calling code +' + COUNTRY_CODE, () => {
            expect(format('0274123456', true)).to.be.string('+62274-123456');
            expect(format('021333444', true)).to.be.string('+6221-333444');
        })
    })
})
