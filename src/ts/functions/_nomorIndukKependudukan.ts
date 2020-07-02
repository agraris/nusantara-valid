import { IValid, IValidLength } from "../interface"
import { NIK_REGEX, NIK_LENGTH } from "../datas/nik"
import { numbersOnly } from "../helpers"
import { PROVINCES_DATA } from "../datas/province"

class NomorIndukKependudukan implements IValid, IValidLength {

    VALID_BPSCODE = Object.keys(PROVINCES_DATA).reduce(
        (a, b) => a.concat((PROVINCES_DATA as any)[b].bpsCode), []
    ) as number[]

    isValid(nik: string, provinceKey: string = '', birthday: string = ''): boolean {
        if (!nik || typeof nik !== 'string') return false

        const validNIK = NIK_REGEX.exec(numbersOnly(nik))

        if (!validNIK) return false

        // Comparison
        if (provinceKey || birthday)
        {
            let validProvince = true
            let validBirthday = true

            if (provinceKey) {
                if ((PROVINCES_DATA as any)[provinceKey].bpsCode != validNIK[1]) {
                    validProvince = false
                }
            }

            if (birthday) {
                let dd = validNIK[4].substr(0, 2)
                const mmyy = validNIK[4].substr(2, 4)

                if (Number(dd) > 40) // Check if it is a man of woman
                    dd = (Number(dd) - 40).toString()

                const cardBirthday = dd + '' + mmyy
                
                if (cardBirthday != birthday) {
                    validBirthday = false
                }
            }

            return this.isValidLength(validNIK[0].length) && validProvince && validBirthday
        }

        return this.isValidLength(validNIK[0].length) && this.isValidProvince(parseInt(validNIK[1])) && this.isValidBirthday(validNIK[4])
    }

    isValidLength(nipLength: number): boolean {
        return nipLength == NIK_LENGTH
    }

    isValidProvince(bpsCode: number): boolean {
        return this.VALID_BPSCODE.includes(bpsCode)
    }

    isValidBirthday(birthday: string): boolean {
        const newBirthday = /(\d{2})(\d{2})(\d{2})/.exec(birthday) // DDMMYY

        if (!newBirthday) return false

        let dd = parseInt(newBirthday[1])
        const mm = parseInt(newBirthday[2])
        const yy = parseInt(newBirthday[3])

        if (dd > 40) // Check if it is a man of woman
            dd = dd - 40

        const formatedBirthday = new Date('19' + yy + '-' + mm + '-' + dd) // '19YY-MM-DD'
        
        return !isNaN(formatedBirthday.getTime())
    }
}

const theNIK = new NomorIndukKependudukan()

/**
 * NIK validation without any comparison with user provided data.
 * 
 * It check if the NIK's bps code is included / exist in VALID_BPSCODE, check if the NIK's has valid birthday
 * and if the NIK has the correct length.
 *
 * @param {string} nik - The NIK, the one to be validated
 * @return {boolean} Is valid or not
**/
export function isValidNIK(nik: string) {
    return theNIK.isValid(nik)
}

/**
 * NIK validation with comparison with user provided provinceKey and birthday data.
 * 
 * It will compare NIK's bps code (see: NIK_REGEX[1]) with bps code from PROVINCE_DATA[provinceKey].bpsCode
 * and will compare NIK's birthday (see: NIK_REGEX[4] with user provided birthday)
 *
 * @param {string} nik - The NIK, the one to be validated
 * @param {object} comparison - The data to compare with, provinceKey (key from PROVINCE_DATA) and birthday (in DDMMYY format)
 * @return {boolean} Is valid or not
**/
export function isValidNIKWithComparison(nik: string, comparison: { provinceKey?: string, birthday?: string }) {
    let { provinceKey = '', birthday = '' } = comparison

    return theNIK.isValid(nik, provinceKey, birthday)
}