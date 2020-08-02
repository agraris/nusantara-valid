import { expect } from "chai"
import { isValidNIK, getDataNIK, isValidNIKWithComparison } from "../../../ts/functions/index.extended"

describe('NIK (Extended)', () => {
    describe('isValidNIK() = true', () => {
        it('if it has valid Regency code (BPS code)', () => {
            expect(isValidNIK('3404031011880001')).to.be.true // 34 => Yogyakarta, 04 => Sleman
            expect(isValidNIK('3101012012990002')).to.be.true // 31 => Jakarta, 01 => Kepulauan Seribu
        })
    })

    describe('isValidNIK() = false', () => {
        it('if it has invalid/unknown Regency code (BPS code) in its Province', () => {
            expect(isValidNIK('3406031011880001')).to.be.false // 34 => Yogyakarta, 06 => undefined
            expect(isValidNIK('3102012012990002')).to.be.false // 31 => Jakarta, 02 => undefined
        })
    })

    describe('isValidNIK() = false', () => {
        it('if it has invalid/unknown Province code (BPS code)', () => {
            expect(isValidNIK('3472031011880001')).to.be.false // 34 => Valid, 72 => Invalid
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
        it('return object data about the NIK\'s extended details', () => {
            expect(getDataNIK('3404025011880001')).to.deep.equal({
                nik: '3404025011880001',
                birthday: new Date('1988-11-10'),
                sex: 'Female',
                province: {
                    bpsCode: '34',
                    name: 'Yogyakarta'
                },
                regency: {
                    bpsCode: '34.04',
                    name: 'Kabupaten Sleman'
                },
                district: {
                    bpsCode: '34.04.02',
                    name: 'Godean'
                }
            })
        })
    })
})