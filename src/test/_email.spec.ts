import { expect } from "chai"
import { isValidEmail as isValid } from "../ts/functions/index"

describe('Email', () => {
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

    describe('isValid() = false', () => {
        it('it does not contain at [@] symbol', () => {
            expect(isValid('janedoe.at.domain.id')).to.be.false;
        })

        it('length is too long, more than 254', () => {
            const longEmail = 'a'.repeat(60) + '@' + 'd'.repeat(200) + '.id';
            expect(isValid(longEmail)).to.be.false;
        })

        it('the local part is too long, with more than 64 char', () => {
            const longLocalPart = 'a'.repeat(65) + '@' + 'domain.id';
            expect(isValid(longLocalPart)).to.be.false;
        })

        it('does not has local part', () => {
            expect(isValid('@domain.id')).to.to.false;
        })

        it('local part has non allowed character(s)', () => {
            expect(isValid('john()doe@domain.id')).to.to.false;
        })

        it('local part has multiple special char consecutively', () => {
            expect(isValid('jane..doe@domain.id')).to.to.false;
        })

        it('localpart start with special char', () => {
            expect(isValid('.johndoe@domain.id')).to.to.false;
        })

        it('localpart contains accentuation', () => {
            expect(isValid('jóhndoe@domain.id')).to.to.false;
        })
    })
})