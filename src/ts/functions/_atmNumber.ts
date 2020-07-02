import { IValid, IValidLength } from "../interface"
import { numbersOnly } from "../helpers"
import { BANK_DATA } from "../datas/bank"

class ATMNumber implements IValid, IValidLength {
    VALID_ATMNUMBER_LENGTH = Object.keys(BANK_DATA).reduce(
        (pref, curr) => pref.includes((BANK_DATA as any)[curr].digits as never) ? pref : pref.concat((BANK_DATA as any)[curr].digits), []
    ) as number[]

    isValid(atm: string, bank: string = ''): boolean {
        if (!atm || typeof atm !== 'string') return false

        const numOnly = numbersOnly(atm)

        if (bank)
            return (BANK_DATA as any)[bank].digits == numOnly.length

        return this.isValidLength(numOnly.length)
    }

    isValidLength(length: number): boolean {
        return this.VALID_ATMNUMBER_LENGTH.includes(length)
    }
}

const atm = new ATMNumber()

export function isValidATMNumber(param: string, index: string = '') {
    return atm.isValid(param, index)
}