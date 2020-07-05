import { IValid, IFormat } from "../interface"
import { NPWP_REGEX, NPWP_LENGTH, NPWP_TAX_IDENTITIES, NPWP_DOT_INDEXES, NPWP_HYPHEN_INDEXES } from "../datas/npwp"
import { numbersOnly, correctLength } from "../helpers"

class NomorPokokWajibPajak implements IValid, IFormat {

    isValid(npwp: string): boolean {
        if (!npwp || typeof npwp !== 'string') return false

        const numOnly = numbersOnly(npwp)

        const regexNPWP = NPWP_REGEX.exec(numOnly)

        if (!regexNPWP) return false

        return this.isValidTaxIdentity(regexNPWP[1]) && correctLength(0, regexNPWP[0].length, { minLength: NPWP_LENGTH })
    }

    isValidTaxIdentity(taxIdentity: string): boolean {
        return NPWP_TAX_IDENTITIES.includes(taxIdentity)
    }

    format(npwp: string, pad = true): string {
        let newNPWP = numbersOnly(npwp)

        if (pad) newNPWP = newNPWP.padStart(NPWP_LENGTH, '0');

        return newNPWP
            .slice(0, NPWP_LENGTH)
            .split('')
            .reduce((a, b, index) => {
                const result = `${a}${b}`;

                if (!(index === newNPWP.length - 1)) {
                    if (NPWP_DOT_INDEXES.includes(index)) return `${result}.`;
                    if (NPWP_HYPHEN_INDEXES.includes(index)) return `${result}-`;
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
 * @param {boolean} pad
 * @return {string} Formated NPWP
**/
export function formatNPWP(npwp: string, pad: boolean = true): string {
    return theNPWP.format(npwp, pad)
}