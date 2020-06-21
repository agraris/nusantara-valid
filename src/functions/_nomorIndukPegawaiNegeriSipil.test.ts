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

        it('if it has valid gender code', () => {
            expect(isValid('199301212020122001')).to.be.true // 19930121202012(2)001
        })
    })

    describe('is invalid', () => {
        it('if it does not meet the total NIP length of ' + NIP_LENGTH + ' digit', () => {
            expect(isValid('2199301212020121001')).to.be.false // Have 19 digits
            expect(isValid('19930121202011001')).to.be.false // Have 17 digits
            expect(isValid('19930121')).to.be.false // Have 8 digits
        })

        it('if it has invalid gender code', () => {
            expect(isValid('199301212020123001')).to.be.false // 19930121202012(3)001 // 3 is invalid gender
        })
    })
})