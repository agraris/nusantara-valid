import { IValid, IValidLength } from "../interface"
import { NISN_REGEX, NISN_LENGTH, NISN_AGE_VALIDITY } from "../datas/nisn"
import { numbersOnly } from "../helpers"

class NomorIndukSiswaNasional implements IValid, IValidLength {

    isValid(nisn: string): boolean {
        if (!nisn || typeof nisn !== 'string') return false

        if (!this.isValidLength(nisn.length)) return false

        const validNISN = NISN_REGEX.exec(numbersOnly(nisn))

        if (!validNISN) return false

        return this.isValidPeriod(validNISN[1])
    }

    isValidLength(nisn: number): boolean {
        return nisn == NISN_LENGTH
    }

    isValidPeriod(year: string): boolean {
        const thisYear = new Date().getFullYear()
        const endYear = thisYear - NISN_AGE_VALIDITY
        let birthYear = parseInt(year) + 2000

        if (birthYear > thisYear) {
            birthYear = birthYear - 1000
        }    

        if (birthYear < endYear) return false
        
        return true
    }
}

const nisn = new NomorIndukSiswaNasional()

export function isValidNISN(param: string) {
    return nisn.isValid(param)
}