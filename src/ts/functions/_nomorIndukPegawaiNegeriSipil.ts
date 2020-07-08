import { IValid } from "../interface"
import { NIP_LENGTH, NIP_REGEX } from "../datas/nip"
import { numbersOnly, correctLength, formatDate } from "../helpers"

/**
 * Nusantara Valid: _nomorIndukPegawaiNegeriSipil.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorIndukPegawaiNegeriSipil class
**/
class NomorIndukPegawaiNegeriSipil implements IValid {
    isValid(nip: string): boolean {
        if (!nip || typeof nip !== 'string') return false

        const validNIP = NIP_REGEX.exec(numbersOnly(nip))
        
        return validNIP !== null 
            && !isNaN(formatDate(validNIP[1]).getTime()) 
            && !isNaN(formatDate(validNIP[2]).getTime()) 
            && correctLength(0, validNIP[0].length, { minLength: NIP_LENGTH })
    }
}

const theNIP = new NomorIndukPegawaiNegeriSipil()

/**
 * NIP validation.
 *
 * Validate NIP by validating NIP's birthday, NIP's recruitment date, and NIP's length
 *
 * @param {string} nip - The NIP to be validated
 * @return {boolean} Is valid or not
**/
export function isValidNIP(nip: string): boolean {
    return theNIP.isValid(nip)
}