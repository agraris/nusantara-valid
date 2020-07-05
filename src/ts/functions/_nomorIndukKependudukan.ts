import { IValid, IGetData, IDataNIK, IDataProvince } from "../interface"
import { NIK_REGEX, NIK_LENGTH } from "../datas/nik"
import { numbersOnly, correctLength, formatDate } from "../helpers"
import { PROVINCES_DATA } from "../datas/province"

/**
 * Nusantara Valid: _nomorIndukKependudukan.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorIndukKepemdudukan class
**/
class NomorIndukKependudukan implements IValid, IGetData {

    VALID_BPSCODE = Object.keys(PROVINCES_DATA).reduce(
        (a, b) => a.concat((PROVINCES_DATA as any)[b].bpsCode), []
    ) as number[]

    isValid(nik: string, provinceKey: string = '', birthday: string = ''): boolean {
        if (!nik || typeof nik !== 'string') return false

        const validNIK = NIK_REGEX.exec(numbersOnly(nik))

        if (!validNIK) return false

        const validLength = correctLength(0, validNIK[0].length, { minLength: NIK_LENGTH })
        const cBirthday = this.reformatBirthday(validNIK[4])

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
                const vBirthday = numbersOnly(birthday).substring(2, 8) // Strip the first 2 digits of year
                
                if (cBirthday != vBirthday) {
                    validBirthday = false
                }
            }

            return validProvince && validBirthday && validLength
        }

        return validLength && this.isValidProvince(parseInt(validNIK[1])) && !isNaN(formatDate('19' + cBirthday).getTime())
    }

    isValidProvince(bpsCode: number): boolean {
        return this.VALID_BPSCODE.includes(bpsCode)
    }

    // Reformat DDMMYY into YYMMDD
    reformatBirthday(birthday: string): string {
        const newBirthday = /(\d{2})(\d{2})(\d{2})/.exec(birthday)

        if (newBirthday) {
            let cDD = newBirthday[1]
            const cMM = newBirthday[2]
            const cYY = newBirthday[3]

            if (Number(cDD) > 40) // Check if it is a man of woman
                cDD = (Number(cDD) - 40).toString()

            return cYY + '' + cMM + '' + cDD
        }

        return ''
    }

    getData(nik: string): IDataNIK {
        const validNIK = NIK_REGEX.exec(numbersOnly(nik))

        let data = {} as IDataNIK

        if (!validNIK) return data

        data.nik = validNIK[0]
        data.sex = Number(validNIK[4].substr(0, 2)) > 40 ? 'Female' : 'Male'

        const fBday = this.reformatBirthday(validNIK[4])

        const validProvince = this.isValidProvince(Number(validNIK[1]))
        const validBirthday = !isNaN(formatDate('19' + fBday).getTime())

        if (validProvince) {
            let province = {} as IDataProvince

            for (const key in PROVINCES_DATA) {
                if (PROVINCES_DATA.hasOwnProperty(key)) {
                    const el = (PROVINCES_DATA as any)[key];
                    if (el.bpsCode == Number(validNIK[1])) {
                        province.key = key,
                        province.name = el.name
                        break
                    }
                }
            }

            data.province = province
        }

        if (validBirthday) {
            const currentYear = new Date().getFullYear()

            let bYYYY = Number(fBday.substr(0, 2)) + 2000
            const bMMYY = fBday.substring(2, 6)

            if (bYYYY > currentYear) {
                bYYYY = bYYYY - 100
            }

            data.birthday = new Date(formatDate(bYYYY + '' + bMMYY))
        }

        return data
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
export function isValidNIK(nik: string): boolean {
    return theNIK.isValid(nik)
}

/**
 * NIK validation with comparison with user provided provinceKey and birthday data.
 * 
 * It will compare NIK's bps code (see: NIK_REGEX[1]) with bps code from PROVINCE_DATA[provinceKey].bpsCode
 * and will compare NIK's birthday (see: NIK_REGEX[4] with user provided birthday)
 *
 * @param {string} nik - The NIK, the one to be validated
 * @param {object} comparison - The data to compare with, provinceKey (key from PROVINCE_DATA) and birthday (in YYYYMMDD format)
 * @return {boolean} Is valid or not
**/
export function isValidNIKWithComparison(nik: string, comparison: { provinceKey?: string, birthday?: string }): boolean {
    let { provinceKey = '', birthday = '' } = comparison

    return theNIK.isValid(nik, provinceKey, birthday)
}

/**
 * NIK data retreiver.
 *
 * Return a set of NIK object data from user provided nik
 *
 * @param {string} nik - The NIK
 * @return {object} The NIK data
**/
export function getDataNIK(nik: string): IDataNIK {
    return theNIK.getData(nik)
}