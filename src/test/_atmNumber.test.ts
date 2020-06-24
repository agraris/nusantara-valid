import { expect } from "chai"
import { isValidATMNumber as isValid, getBankData as getData } from "../ts/functions/index"

describe('ATM number', () => {

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
            expect(isValid('87.800.000.00')).to.be.true; // 10
            expect(isValid('8780000000')).to.be.true; // 10
            expect(isValid('123.0005.123.000')).to.be.true; // 13
            expect(isValid('1230005123000')).to.be.true; // 13
        })

        describe('with specified bank', () => {
            it('has same dight length', () => {
                expect(isValid('87.800.000.00', 'BCAK')).to.be.true; // BCAK has 10 digit number
            })
        })
    })

    describe('isInvalid()', () => {
        it('when it does not match any ATM bank length', () => {
            expect(isValid('87.800.00.00')).to.be.false; // 9
            expect(isValid('878000000001')).to.be.false; // 12
        })

        describe('with specified bank', () => {
            it('has different digits length', () => {
                expect(isValid('123.0005.123.000', 'BCAK')).to.be.false; // BCAK has 10 digit number but the ATM number has 13 digits
            })
        })
    })

    describe('getData()', () => {
        it('should return an array of Bank data', () => {
            expect(getData()).to.deep.equal([
                { key: 'BCAK', name: 'Bank Central Asia' },
                { key: 'BCAS', name: 'Bank Central Asia Syariah' },
                { key: 'BNIK', name: 'Bank Negara Indonesia' },
                { key: 'BNIS', name: 'Bank Negara Indonesia Syariah' },
                { key: 'BRIK', name: 'Bank Rakyat Indonesia' },
                { key: 'BRIS', name: 'Bank Rakyat Indonesia Syariah' },
                { key: 'BTNK', name: 'Bank Tabungan Negara' },
                { key: 'BTNS', name: 'Bank Tabungan Negara Syariah' },
                { key: 'BTPK', name: 'Bank Tabungan Pensiunan Nasional' },
                { key: 'BTPS', name: 'Bank Tabungan Pensiunan Nasional Syariah' },
                { key: 'BUKK', name: 'Bukopin' },
                { key: 'BUKS', name: 'Bukopin Syariah' },
                { key: 'CMBK', name: 'Bank CIMB Niaga' },
                { key: 'CMBS', name: 'Bank CIMB Niaga Syariah' },
                { key: 'DNMK', name: 'Bank Danamon' },
                { key: 'DNMS', name: 'Bank Danamon Syariah' },
                { key: 'MDRK', name: 'Bank Mandiri' },
                { key: 'MDRS', name: 'Bank Mandiri Syariah' },
                { key: 'MGAK', name: 'Bank Mega' },
                { key: 'MGAS', name: 'Bank Mega Syariah' },
                { key: 'MUAM', name: 'Bank Muamalat' },
                { key: 'PMTK', name: 'Bank Permata' },
                { key: 'PMTS', name: 'Bank Permata Syariah' },
                { key: 'PNBK', name: 'Panin Bank' },
                { key: 'PNBS', name: 'Panin Bank Syariah' }
            ])
        })
    })

})
