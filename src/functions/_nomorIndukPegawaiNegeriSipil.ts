import { IValid, IValidLength } from "../interface/index"
import { NIP_LENGTH, NIP_REGEX } from "../datas/nomorIndukPegawaiNegeriSipil"
import { numbersOnly } from "../helpers/index"

export class NomorIndukPegawaiNegeriSipil implements IValid, IValidLength {

    isValid(nip: string): boolean {
        if (!nip || typeof nip !== 'string') return false

        const newNIP = numbersOnly(nip)

        const validNIP = NIP_REGEX.exec(newNIP)

        if(!validNIP) return false

        return this.isValidLength(newNIP)
    }

    isValidLength(nip: any): boolean {
        return nip.length == NIP_LENGTH
    }
}

const nip = new NomorIndukPegawaiNegeriSipil()

export function isValid(param: string) {
    return nip.isValid(param)
}