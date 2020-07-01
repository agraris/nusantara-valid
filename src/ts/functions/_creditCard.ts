import { IValid, IValidLength, IFormat } from "../interface"
import { numbersOnly } from "../helpers"
import { CC_LENGTH, CC_VALID_MII, CC_SPACE_INDEXES } from "../datas/creditCard"

class CreditCard implements IValid, IValidLength, IFormat {

    isValid(cc: string): boolean {
        if (!cc || typeof cc !== 'string') return false

        const numOnly = numbersOnly(cc)

        return this.isValidMII(cc.charAt(0)) && this.isValidLength(numOnly.length)
    }

    isValidLength(length: number): boolean {
        return length == CC_LENGTH
    }

    isValidMII(mii: string): boolean {
        return CC_VALID_MII.includes(mii)
    }

    format(cc: string): string {
        let newCC = numbersOnly(cc)

        return newCC
            .slice(0, CC_LENGTH)
            .split('')
            .reduce((a, b, index) => {
                const result = `${a}${b}`;

                if (!(index === newCC.length - 1)) {
                    if (CC_SPACE_INDEXES.includes(index)) return `${result} `;
                }

                return result;
            }, '');
    }
}

const cc = new CreditCard()

export function isValidCCNumber(param: string) {
    return cc.isValid(param)
}

export function formatCCNumber(param: string) {
    return cc.format(param)
}