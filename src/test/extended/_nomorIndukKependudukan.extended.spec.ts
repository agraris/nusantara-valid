import { expect } from "chai"
import { isValidNIK } from "../../ts/functions/index.extended"

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
})