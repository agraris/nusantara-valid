import { IValid, IValidLength } from "../interface/index"
import { NIP_LENGTH, NIP_REGEX } from "../datas/nomorIndukPegawaiNegeriSipil"
import { numbersOnly, formatDate } from "../helpers/index"

export class NomorIndukPegawaiNegeriSipil implements IValid, IValidLength {

    isValid(nip: string): boolean {
        if (!nip || typeof nip !== 'string') return false

        const validNIP = NIP_REGEX.exec(numbersOnly(nip))

        if(!validNIP) return false

        const birthday = formatDate(validNIP[1])
        const recDate = formatDate(validNIP[2])
        
        return this.isValidLength(validNIP[0].length) && !isNaN(birthday.getTime()) && !isNaN(recDate.getTime())
    }

    isValidLength(nip: number): boolean {
        return nip == NIP_LENGTH
    }
}

const nip = new NomorIndukPegawaiNegeriSipil()

export function isValid(param: string) {
    return nip.isValid(param)
}