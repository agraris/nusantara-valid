import { expect } from "chai"
import { isValid } from "./_nomorIndukPegawaiNegeriSipil"
import { NIP_LENGTH } from "../datas/nomorIndukPegawaiNegeriSipil"

describe('NIP', () => {
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

    describe('is valid', () => {
        it('if it has ' + NIP_LENGTH + ' digit', () => {
            expect(isValid('199301212020121001')).to.be.true
        })

        it('if it has valid birthday', () => {
            expect(isValid('199301222020121002')).to.be.true // 1993-01-22
        })

        it('if it has valid recruitment year and month', () => {
            expect(isValid('199301222020121003')).to.be.true // 202012
        })

        it('if it has valid gender code', () => {
            expect(isValid('199301212020122004')).to.be.true // 19930121202012(2)004
        })
    })

    describe('is invalid', () => {
        it('if it does not meet the total NIP length of ' + NIP_LENGTH + ' digit', () => {
            expect(isValid('1993012120201210012')).to.be.false // Have 19 digits
            expect(isValid('19930121202011001')).to.be.false // Have 17 digits
            expect(isValid('19930121')).to.be.false // Have 8 digits
        })

        it('if it has invalid birthday', () => {
            expect(isValid('199301332020121001')).to.be.false // 1993-01-33
        })

        it('if it has invalid recruitment year and month', () => {
            expect(isValid('199301222020131001')).to.be.false // 2020-13
        })

        it('if it has invalid gender code', () => {
            expect(isValid('199301212020123001')).to.be.false // 19930121202012(3)001
        })
    })
})