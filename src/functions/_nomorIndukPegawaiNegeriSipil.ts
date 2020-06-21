import { IValid, IValidLength } from "../interface/index"
import { NIP_LENGTH, NIP_REGEX } from "../datas/nomorIndukPegawaiNegeriSipil"
import { numbersOnly } from "../helpers/index"

export class NomorIndukPegawaiNegeriSipil implements IValid, IValidLength {

    isValid(nip: string): boolean {
        if (!nip || typeof nip !== 'string') return false

        const validNIP = NIP_REGEX.exec(numbersOnly(nip))

        if(!validNIP) return false
        
        return this.isValidLength(validNIP[0].length) && this.isValidDate(validNIP[1]) && this.isValidDate(validNIP[2])
    }

    isValidLength(nip: number): boolean {
        return nip == NIP_LENGTH
    }

    isValidDate(date: string): boolean {
        const newDate = date.replace(/(\d{4})(\d{2})(?:(\d{2})?)/, "$1-$2-$3")

        const formatedDate = new Date(newDate)

        return !isNaN(formatedDate.getTime())
    }
}

const nip = new NomorIndukPegawaiNegeriSipil()

export function isValid(param: string) {
    return nip.isValid(param)
}