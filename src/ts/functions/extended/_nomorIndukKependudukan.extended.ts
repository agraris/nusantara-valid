import { IDataNIK } from "../../interface"
import { NIK_REGEX } from "../../datas/nik"
import { numbersOnly, includes } from "../../helpers"
import { NomorIndukKependudukan } from '../_nomorIndukKependudukan'
import { getDataRegenciesInProvince, getDataDistrictsInRegency } from './_province.extended'

/**
 * Nusantara Valid: _nomorIndukKependudukan.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorIndukKepemdudukan class
**/
export class NomorIndukKependudukanExtended extends NomorIndukKependudukan {
    isValid(nik: string, provinceKey: string = '', birthday: string = ''): boolean {
        if (!super.isValid(nik, provinceKey, birthday)) return false

        const validNIK = NIK_REGEX.exec(numbersOnly(nik))

        if (!validNIK) return false

        let validRegency = false
        let validDistrict = false

        const provinceBPSCode = validNIK[1]
        const regencyBPSCode = provinceBPSCode + '.' + validNIK[2]
        const REGENCIES = getDataRegenciesInProvince(provinceBPSCode)
        const regenciesBPSCodes = REGENCIES.map(({ bpsCode }) => bpsCode)
        validRegency = includes(regenciesBPSCodes, regencyBPSCode)

        const districtBPSCode = regencyBPSCode + '.' + validNIK[3]
        const DISTRICTS = getDataDistrictsInRegency(regencyBPSCode)
        const districtsBPSCode = DISTRICTS.map(({ bpsCode }) => bpsCode)
        validDistrict = includes(districtsBPSCode, districtBPSCode)

        return validRegency && validDistrict
    }
}

const theNIK = new NomorIndukKependudukanExtended()

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