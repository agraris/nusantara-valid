import { IValid, IValidLength } from "../interface/index"
import { NIK_REGEX, NIK_LENGTH } from "../datas/nomorIndukKependudukan"
import { numbersOnly } from "../helpers/index"
import { PROVINCES_DATA } from "../datas/province"

export class NomorIndukKependudukan implements IValid, IValidLength {

    VALID_BPSCODE = Object.keys(PROVINCES_DATA).reduce(
        (a, b) => a.concat((PROVINCES_DATA as any)[b].bpsCode), []
    ) as number[]

    isValid(nik: string | number): boolean {
        if (!nik) return false

        const validNIK = NIK_REGEX.exec(numbersOnly(nik))

        if (!validNIK) return false

        return this.isValidLength(validNIK[0].length) && this.isValidProvince(parseInt(validNIK[1])) && this.isValidBirthday(validNIK[4])
    }

    isValidLength(nip: number): boolean {
        return nip == NIK_LENGTH
    }

    isValidProvince(bpsCode: number): boolean {
        return this.VALID_BPSCODE.includes(bpsCode)
    }

    isValidBirthday(birthday: string): boolean {
        const newBirthday = /(\d{2})(\d{2})(\d{2})/.exec(birthday) // DDMMYY

        if (!newBirthday) return false

        let dd = parseInt(newBirthday[1])
        let mm = parseInt(newBirthday[2])
        let yy = parseInt(newBirthday[3])

        if (dd > 40) // Check if it is a man of woman
            dd = dd - 40

        const formatedBirthday = new Date('19' + yy + '-' + mm + '-' + dd) // '19YY-MM-DD'
        
        return !isNaN(formatedBirthday.getTime())
    }
}

const nik = new NomorIndukKependudukan()

export function isValid(param: string | number) {
    return nik.isValid(param)
}