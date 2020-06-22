import { IValid, IValidLength } from "../interface/index"
import { NISN_REGEX, NISN_LENGTH } from "../datas/nisn"
import { numbersOnly } from "../helpers/index"

export class NomorIndukSiswaNasional implements IValid, IValidLength {

    isValid(nisn: string): boolean {
        if (!nisn || typeof nisn !== 'string') return false

        if (!this.isValidLength(nisn.length)) return false

        const validNISN = NISN_REGEX.exec(numbersOnly(nisn))

        if (!validNISN) return false

        return true
    }

    isValidLength(nisn: number): boolean {
        return nisn == NISN_LENGTH
    }
}

const nisn = new NomorIndukSiswaNasional()

export function isValid(param: string) {
    return nisn.isValid(param)
}