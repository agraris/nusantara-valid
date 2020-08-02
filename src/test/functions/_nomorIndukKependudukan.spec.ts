import { expect } from "chai"
import { isValidNIK, isValidNIKWithComparison, getDataNIK } from "../../ts/functions"
import { NomorIndukKependudukan } from "../../ts/functions/_nomorIndukKependudukan"
import { NIK_LENGTH } from "../../ts/datas/nik"

describe('NIK', () => {
    it('cannot be empty', () => {
        expect(isValidNIK('')).to.be.false
    })

    it('cannot be null', () => {
        expect(isValidNIK(null as any)).to.be.false
    })

    describe('type', () => {
        it('cannot be a boolean', () => {
            expect(isValidNIK(true as any)).to.be.false
            expect(isValidNIK(false as any)).to.be.false
        })

        it('cannot be a array', () => {
            expect(isValidNIK([] as any)).to.be.false
        })

        it('cannot be a object', () => {
            expect(isValidNIK({} as any)).to.be.false
        })

        it('cannot be a number', () => {
            expect(isValidNIK(3404021011880001 as any)).to.be.false
        })

        it('can be a string', () => {
            expect(isValidNIK('3404021011880001')).to.be.true
        })
    })

    describe('isValidNIK() = true', () => {
        it('if it has ' + NIK_LENGTH + ' digit', () => {
            expect(isValidNIK('3404021011880001')).to.be.true
            expect(isValidNIK('3101012012990002')).to.be.true
        })

        it('if it has valid Province code (BPS code)', () => {
            expect(isValidNIK('3404031011880001')).to.be.true // 34 => Yogyakarta
            expect(isValidNIK('3101012012990002')).to.be.true // 31 => Jakarta
        })

        it('if it has valid birthday', () => {
            expect(isValidNIK('3404021011880001')).to.be.true // 10-11-88 => 1988-11-10 -> Man
            expect(isValidNIK('3101012012990002')).to.be.true // 20-12-99 => 1999-12-20 -> Man
            expect(isValidNIK('3404025011880001')).to.be.true // 50-11-88 => 1988-11-(50-40) -> Woman
            expect(isValidNIK('3101016012990002')).to.be.true // 60-12-99 => 1999-12-(60-40) -> Woman
        })
    })

    describe('isValidNIK() = false', () => {
        it('if it does not meet the total NIP length of ' + NIK_LENGTH + ' digit', () => {
            expect(isValidNIK('34040210118800001')).to.be.false // Have 17 digits
            expect(isValidNIK('310101201299002')).to.be.false // Have 15 digits
            expect(isValidNIK('310101')).to.be.false // Have 6 digits
        })

        it('if it has invalid/unknown Province code (BPS code)', () => {
            expect(isValidNIK('3704031011880001')).to.be.false // 37 => Invalid/Unknown
            expect(isValidNIK('2201012012990002')).to.be.false // 22 => Invalid/Unknown
        })

        it('if it has invalid birthday', () => {
            expect(isValidNIK('3404021013880001')).to.be.false // 10-13-88 => 1988-13-10
            expect(isValidNIK('3101013212990002')).to.be.false // 32-12-99 => 1999-12-32
        })
    })

    describe('isValidNIKWithComparison() = true', () => {
        it('if it has valid comparison with provinceKey and birthday', () => {
            expect(isValidNIKWithComparison('3404021011880001', { provinceKey: '34', birthday: '1988-11-10' })).to.be.true // 10-11-88 => 1988-11-10 -> Man
        })

        it('if it has valid comparison with provinceKey only', () => {
            expect(isValidNIKWithComparison('3101012012990002', { provinceKey: '31' })).to.be.true // 20-12-99 => 1999-12-20 -> Man
        })

        it('if it has valid comparison with birthday only', () => {
            expect(isValidNIKWithComparison('3404025011880001', { birthday: '19881110' })).to.be.true // 50-11-88 => 1988-11-(50-40) -> Woman
        })

        it('it still valid if the comparison is all empty', () => {
            expect(isValidNIKWithComparison('3101016012990002', { provinceKey: '', birthday: '' })).to.be.true // 60-12-99 => 1999-12-(60-40) -> Woman
        })
    })

    describe('isValidNIKWithComparison() = false', () => {
        it('if it has unmatch NIK\'s bps code and PROVINCE_DATA[provinceKey].bpsCode but has same NIK\'s birthday and user provided birthday', () => {
            expect(isValidNIKWithComparison('3404021011880001', { provinceKey: '31', birthday: '19881110' })).to.be.false // BPS code JK = 31 compared NIK = 34
        })

        it('if it has unmatch comparison between NIK\'s bps code and PROVINCE_DATA[provinceKey].bpsCode', () => {
            expect(isValidNIKWithComparison('3101012012990002', { provinceKey: '34' })).to.be.false // provinceKey 'YO' has bpsCode of 34 but NIK's bpsCode is 31
        })

        it('if it has unmatch comparison between NIK\'s birthday with user provided birthday', () => {
            expect(isValidNIKWithComparison('3404025011880001', { birthday: '1999-11-10' })).to.be.false // User born in 99 but NIK's born in 88
        })

        it('if it compared with invalid birthday', () => {
            expect(isValidNIKWithComparison('3404025011880001', { birthday: 'AAAA-BB-CC' })).to.be.false // AAAA-BB-CC is invalid birthday
        })
    })

    describe('getDataNIK()', () => {
        it('return object data about the NIK\'s details', () => {
            expect(getDataNIK('3404025011880001')).to.deep.equal({
                nik: '3404025011880001',
                birthday: new Date('1988-11-10'),
                sex: 'Female',
                province: {
                    bpsCode: '34',
                    name: 'Yogyakarta'
                }
            })

            expect(getDataNIK('3101012012060002')).to.deep.equal({
                nik: '3101012012060002',
                birthday: new Date('2006-12-20'),
                sex: 'Male',
                province: {
                    bpsCode: '31',
                    name: 'Jakarta'
                }
            })

            expect(getDataNIK('390101201299')).to.deep.equal({}) // Invalid NIK

            expect(getDataNIK('3901012012990002')).to.deep.equal({
                "birthday": new Date('1999-12-20'),
                "nik": "3901012012990002",
                "sex": "Male",
            }) // Invalid province code

            expect(getDataNIK('3101013212060002')).to.deep.equal({
                nik: '3101013212060002',
                sex: 'Male',
                province: {
                    bpsCode: '31',
                    name: 'Jakarta'
                }
            }) // Invalid birthday
        })
    })

    describe('NIK classes', () => {
        it('reformatBirthday() failed', () => {
            const nik = new NomorIndukKependudukan()
            expect(nik.reformatBirthday('0812')).to.be.empty
        })
    })
})