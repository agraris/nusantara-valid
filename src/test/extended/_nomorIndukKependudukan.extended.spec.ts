import { expect } from "chai"
import { isValidNIK, getDataNIK } from "../../ts/functions/index.extended"

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