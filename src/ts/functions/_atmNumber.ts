import { IValid } from "../interface"
import { numbersOnly, correctLength, includes } from "../helpers"
import { BANK_DATA, BANK_KEYS } from "../datas/bank"

/**
 * Nusantara Valid: _atmNumber.ts
 * 
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 * 
 * @class The ATMNumber class
**/
class ATMNumber implements IValid {

    VALID_ATMNUMBER_LENGTH = BANK_KEYS.reduce(
        (pref, curr) => includes(pref, (BANK_DATA as any)[curr].digits) ? pref : pref.concat((BANK_DATA as any)[curr].digits), []
    ) as number[]

    isValid(atm: string, bank: string = ''): boolean {
        if (!atm || typeof atm !== 'string') return false

        const numOnly = numbersOnly(atm)

        let matchLength = correctLength(2, numOnly.length, { collection: this.VALID_ATMNUMBER_LENGTH })

        if (bank)
            matchLength = correctLength(0, numOnly.length, { minLength: (BANK_DATA as any)[bank].digits } )

        return matchLength
    }
}

const theATM = new ATMNumber()

/**
 * ATM number validation without comparison with bank
 *
 * It will validate ATM number based on it's length
 *
 * @param {string} atm - The atm number to be validated
 * @return {boolean} Is valid or not
**/
export function isValidATMNumber(atm: string): boolean {
    return theATM.isValid(atm)
}

/**
 * ATM number validation with comparison with bank
 *
 * It will validate ATM number based on it's length and specific Bank's length
 *
 * @param {string} atm - The atm number to be validated
 * @param {string} key - The bank key
 * @return {boolean} Is valid or not
**/
export function isValidATMNumberWithComparison(atm: string, key: string = ''): boolean {
    return theATM.isValid(atm, key)
}