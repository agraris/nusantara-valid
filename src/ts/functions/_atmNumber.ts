import { IValid } from "../interface"
import { numbersOnly, correctLength } from "../helpers"
import { BANK_DATA, BANK_NUMBER_LENGTHS } from "../datas/bank"

/**
 * Nusantara Valid: _atmNumber.ts
 * 
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 * 
 * @class The ATMNumber class
**/
class ATMNumber implements IValid {
    isValid(atm: string, bank = ''): boolean {
        if (!atm || typeof atm !== 'string') return false

        const numOnly = numbersOnly(atm)

        return bank ? correctLength(0, numOnly.length, { minLength: BANK_DATA[bank].digits }) : correctLength(2, numOnly.length, { collection: BANK_NUMBER_LENGTHS })
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
export function isValidATMNumberWithComparison(atm: string, key: string): boolean {
    if (!key) return false
    return theATM.isValid(atm, key)
}