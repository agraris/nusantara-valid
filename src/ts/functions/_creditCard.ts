import { IValid, IFormat } from "../interface"
import { numbersOnly, correctLength, includes } from "../helpers"
import { CC_LENGTH, CC_VALID_MII, CC_SPACE_INDEXES } from "../datas/creditCard"

/**
 * Nusantara Valid: _creditCard.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The CreditCard class
**/
class CreditCard implements IValid, IFormat {
    isValid(cc: string): boolean {
        if (!cc || typeof cc !== 'string') return false

        const numOnly = numbersOnly(cc)

        return this.isValidMII(cc.charAt(0)) 
            && correctLength(0, numOnly.length, { minLength: CC_LENGTH })
    }

    isValidMII(mii: string): boolean {
        return includes(CC_VALID_MII, mii)
    }

    format(cc: string): string {
        const newCC = numbersOnly(cc)

        return newCC
            .slice(0, CC_LENGTH)
            .split('')
            .reduce((a, b, index) => {
                const result = `${a}${b}`;

                if (!(index === newCC.length - 1)) {
                    if (includes(CC_SPACE_INDEXES, index)) return `${result} `;
                }

                return result;
            }, '');
    }
}

const cc = new CreditCard()

/**
 * Credit card number validation.
 *
 * It check if cc number has correct leading MII code and correct CC number's length
 *
 * @param {string} number - The cc number to be validated
 * @return {boolean} Is valid or not
**/
export function isValidCCNumber(number: string): boolean {
    return cc.isValid(number)
}

/**
 * Credit card number formating
 *
 * Format credit card with the correct format
 *
 * @param {string} number - CC number to be formated
 * @return {string} Formated cc number
**/
export function formatCCNumber(number: string): string {
    return cc.format(number)
}