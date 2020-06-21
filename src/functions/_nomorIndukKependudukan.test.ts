import { expect } from "chai"
import { isValid } from "./_nomorIndukKependudukan"
import { NIK_LENGTH } from "../datas/nomorIndukKependudukan"

describe('NIK', () => {
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

        it('can be a number', () => {
            expect(isValid(3404021011880001)).to.be.true
        })

        it('can be a string', () => {
            expect(isValid('3404021011880001')).to.be.true
        })
    })

    describe('is valid', () => {
        it('if it has ' + NIK_LENGTH + ' digit', () => {
            expect(isValid('3404021011880001')).to.be.true
            expect(isValid(3101012012990002)).to.be.true
        })

        it('if it has valid Province code (BPS code)', () => {
            expect(isValid('3404031011880001')).to.be.true // 34 => Yogyakarta
            expect(isValid(3101012012990002)).to.be.true // 31 => Jakarta
        })

        it('if it has valid birthday', () => {
            expect(isValid('3404021011880001')).to.be.true // 10-11-88 => 1988-11-10 -> Man
            expect(isValid(3101012012990002)).to.be.true // 20-12-99 => 1999-12-20 -> Man
            expect(isValid('3404025011880001')).to.be.true // 50-11-88 => 1988-11-(50-40) -> Woman
            expect(isValid(3101016012990002)).to.be.true // 60-12-99 => 1999-12-(60-40) -> Woman
        })
    })

    describe('is invalid', () => {
        it('if it does not meet the total NIP length of ' + NIK_LENGTH + ' digit', () => {
            expect(isValid('34040210118800001')).to.be.false // Have 17 digits
            expect(isValid(310101201299002)).to.be.false // Have 15 digits
        })

        it('if it has invalid/unknown Province code (BPS code)', () => {
            expect(isValid('3704031011880001')).to.be.false // 37 => Invalid/Unknown
            expect(isValid(2201012012990002)).to.be.false // 22 => Invalid/Unknown
        })

        it('if it has invalid birthday', () => {
            expect(isValid('3404021013880001')).to.be.false // 10-13-88 => 1988-13-10
            expect(isValid(3101013212990002)).to.be.false // 32-12-99 => 1999-12-32
        })
    })
})