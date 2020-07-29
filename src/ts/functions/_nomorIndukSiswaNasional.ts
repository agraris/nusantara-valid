import { IValid } from "../interface"
import { NISN_REGEX, NISN_LENGTH, NISN_AGE_VALIDITY } from "../datas/nisn"
import { numbersOnly, correctLength } from "../helpers"

/**
 * Nusantara Valid: _nomorIndukSiswaNasional.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorIndukSiswaNasional class
**/
class NomorIndukSiswaNasional implements IValid {
    isValid(nisn: string): boolean {
        if (!nisn || typeof nisn !== 'string') return false

        const validNISN = NISN_REGEX.exec(numbersOnly(nisn))

        return validNISN !== null 
            && this.isValidPeriod(validNISN[1]) 
            && correctLength(0, validNISN[0].length, { minLength: NISN_LENGTH })
    }

    isValidPeriod(year: string): boolean {
        const thisYear = new Date().getFullYear()
        const endYear = thisYear - NISN_AGE_VALIDITY
        let birthYear = parseInt(year) + 2000

        if (birthYear > thisYear)
            birthYear = birthYear - 1000
        
        return birthYear < endYear ? false : true
    }
}

const theNISN = new NomorIndukSiswaNasional()

/**
 * NISN validation.
 *
 * Validate NISN by validating NISN's birth year (student age) with NISN_AGE_VALIDITY and NISN's length
 *
 * @param {string} nisn - The NISN to be validated
 * @return {boolean} Is valid or not
**/
export function isValidNISN(nisn: string): boolean {
    return theNISN.isValid(nisn)
}