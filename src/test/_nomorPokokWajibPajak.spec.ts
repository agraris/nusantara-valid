import { expect } from "chai"
import { isValidNPWP as isValid, formatNPWP as format } from "../ts/functions/index"
import { NPWP_LENGTH } from "../ts/datas/npwp"

describe('VRN', () => {
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
            expect(isValid(12345 as any)).to.be.false
        })
    })

    describe('isValid() = true', () => {
        it('even without formating', () => {
            expect(isValid('092542943407000')).to.be.true; // Without dots and hyphen
        })

        it('even with formating', () => {
            expect(isValid('09.254.294.3-407.000')).to.be.true; // With dots and hyphen
        })
        
        it('when it has known Tax Identifier', () => {
            expect(isValid('09.254.294.3-407.000')).to.be.true; // 09
        })
    })

    describe('isValid() = false', () => {
        it('when it does not match NPWP length ' + NPWP_LENGTH + ' even without formating', () => {
            expect(isValid('0925429434070000')).to.be.false;
            expect(isValid('09254294340700')).to.be.false;
        })

        it('when it does not match NPWP length ' + NPWP_LENGTH + ' even with formating', () => {
            expect(isValid('09.254.294.3-407.0000')).to.be.false;
            expect(isValid('09.254.294.3-407.00')).to.be.false;
        })

        it('when it has unknown Tax Identifier', () => {
            expect(isValid('992542943407000')).to.be.false;
            expect(isValid('99.254.294.3-407.000')).to.be.false;
        })
    })

    describe('format()', () => {
        it('should format with correct result', () => {
            expect(format('092542943407000')).to.be.string('09.254.294.3-407.000');
            expect(format('312542943407000')).to.be.string('31.254.294.3-407.000');
        })
    })
})