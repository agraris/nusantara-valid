import { IValid, IValidLength, IGetData } from "../interface/index"
import { numbersOnly } from "../helpers/index"
import { BANK_DATA, BANKS } from "../datas/bank"

export class ATMNumber implements IValid, IValidLength, IGetData {
    VALID_ATMNUMBER_LENGTH = Object.keys(BANK_DATA).reduce(
        (pref, curr) => pref.includes((BANK_DATA as any)[curr].digits as never) ? pref : pref.concat((BANK_DATA as any)[curr].digits), []
    ) as number[]

    isValid(atm: string, bank?: string): boolean {
        if (!atm || typeof atm !== 'string') return false

        if (bank === undefined) bank = ''

        const numOnly = numbersOnly(atm)

        if (bank) return (BANK_DATA as any)[bank].digits == numOnly.length

        return this.isValidLength(numOnly.length)
    }

    isValidLength(length: number): boolean {
        return this.VALID_ATMNUMBER_LENGTH.includes(length)
    }

    getData(): Bank[] {
        const banks = BANKS.map((key) => ({
            key,
            name: (BANK_DATA as any)[key].name,
        }));

        return banks
    }
}

export interface Bank {
    key: string;
    name: string;
}

const atm = new ATMNumber()

export function isValid(param: string, index?: string) {
    return atm.isValid(param, index)
}

export function getData() {
    return atm.getData()
}