import { IValid } from "../interface"
import { numbersOnly, correctLength } from "../helpers"
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
        (pref, curr) => pref.includes((BANK_DATA as any)[curr].digits as never) ? pref : pref.concat((BANK_DATA as any)[curr].digits), []
    ) as number[]

    isValid(atm: string, bank: string = ''): boolean {
        if (!atm || typeof atm !== 'string') return false

        const numOnly = numbersOnly(atm)

        if (bank) return (BANK_DATA as any)[bank].digits == numOnly.length

        return correctLength(2, numOnly.length, { collection: this.VALID_ATMNUMBER_LENGTH })
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