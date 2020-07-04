import { expect } from "chai"
import { isValidTNKB as isValid, getDataTNKB as getData } from "../ts/functions"

describe('TNKB', () => {
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
        it('even it uses lowercase character', () => {
            expect(isValid('ab1234xyz')).to.be.true
        })

        it('when it has known Area Code', () => {
            expect(isValid('AB123XY')).to.be.true;
            expect(isValid('B9876ABC')).to.be.true;
        })
    })

    describe('isValid() = false', () => {
        it('does not has Area Code', () => {
            expect(isValid('1234XYZ')).to.be.false
        })

        it('does not has Police Number', () => {
            expect(isValid('ABXYZ')).to.be.false
        })

        it('does not has Detailed Area Code', () => {
            expect(isValid('AB1234')).to.be.false
        })

        it('has more than 2 char of Area Code', () => {
            expect(isValid('ABC1234XYZ')).to.be.false
        })

        it('has more than 4 digit of Police Number', () => {
            expect(isValid('AB123456XYZ')).to.be.false
        })

        it('has more than 3 digit of Detailed Area Code', () => {
            expect(isValid('AB1234XYZA')).to.be.false
        })

        it('has symbol', () => {
            expect(isValid('AB12#34XYZ')).to.be.false
        })
    })

    describe('getData()', () => {
        it('return data object about the TNKB details', () => {
            expect(getData('AB1234XYZ')).to.deep.equal({
                areaCode: 'AB',
                index: 1234,
                detailedAreaCode: 'XYZ',
                province: {
                    key: 'YO',
                    name: 'Yogyakarta'
                }
            })
            expect(getData('B1A')).to.deep.equal({
                areaCode: 'B',
                index: 1,
                detailedAreaCode: 'A',
                province: {
                    key: 'JK',
                    name: 'Jakarta'
                }
            })
        })
    })
})