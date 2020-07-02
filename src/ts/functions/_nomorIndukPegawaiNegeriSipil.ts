import { IValid } from "../interface"
import { NIP_LENGTH, NIP_REGEX } from "../datas/nip"
import { numbersOnly, correctLength } from "../helpers"

class NomorIndukPegawaiNegeriSipil implements IValid {

    isValid(nip: string): boolean {
        if (!nip || typeof nip !== 'string') return false

        const validNIP = NIP_REGEX.exec(numbersOnly(nip))

        if(!validNIP) return false
        
        return this.isValidDate(validNIP[1]) && this.isValidDate(validNIP[2]) && correctLength(0, validNIP[0].length, { minLength: NIP_LENGTH })
    }

    isValidDate(date: string): boolean {
        const newDate = date.replace(/(\d{4})(\d{2})(?:(\d{2})?)/, "$1-$2-$3")

        const formatedDate = new Date(newDate)

        return !isNaN(formatedDate.getTime())
    }
}

const nip = new NomorIndukPegawaiNegeriSipil()

export function isValidNIP(param: string) {
    return nip.isValid(param)
}