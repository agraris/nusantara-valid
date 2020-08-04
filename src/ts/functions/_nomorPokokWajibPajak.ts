import { IValid, IFormat } from "../interface"
import { NPWP_REGEX, NPWP_LENGTH, NPWP_TAX_IDENTITIES, NPWP_DOT_INDEXES, NPWP_HYPHEN_INDEXES } from "../datas/npwp"
import { numbersOnly, correctLength, includes } from "../helpers"

/**
 * Nusantara Valid: _nomorPokokWajibPajak.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorPokokWajibPajak class
**/
class NomorPokokWajibPajak implements IValid, IFormat {
    isValid(npwp: string): boolean {
        if (!npwp || typeof npwp !== 'string') return false

        const numOnly = numbersOnly(npwp)

        const regexNPWP = NPWP_REGEX.exec(numOnly)

        return regexNPWP !== null 
            && this.isValidTaxIdentity(regexNPWP[1]) 
            && correctLength(0, regexNPWP[0].length, { minLength: NPWP_LENGTH })
    }

    isValidTaxIdentity(taxIdentity: string): boolean {
        return includes(NPWP_TAX_IDENTITIES, taxIdentity)
    }

    format(npwp: string): string {
        const newNPWP = numbersOnly(npwp)

        return newNPWP
            .slice(0, NPWP_LENGTH)
            .split('')
            .reduce((a, b, index) => {
                const result = `${a}${b}`;

                if (!(index === newNPWP.length - 1)) {
                    if (includes(NPWP_DOT_INDEXES, index)) return `${result}.`;
                    if (includes(NPWP_HYPHEN_INDEXES, index)) return `${result}-`;
                }

                return result;
            }, '');
    }
}

const theNPWP = new NomorPokokWajibPajak()

/**
 * NPWP validation.
 *
 * Validate NPWP by validating NPWP's tax identity and NPWP's length
 *
 * @param {string} npwp - The NPWP to be validated
 * @return {boolean} Is valid or not
**/
export function isValidNPWP(npwp: string): boolean {
    return theNPWP.isValid(npwp)
}

/**
 * NPWP formating
 *
 * Format NPWP to the correct requirement
 *
 * @param {string} npwp - TheNPWP to be formated
 * @return {string} Formated NPWP
**/
export function formatNPWP(npwp: string): string {
    return theNPWP.format(npwp)
}