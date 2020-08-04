import { IDataNIKExtended } from "../../interface"
import { numbersOnly, includes } from "../../helpers"
import { NomorIndukKependudukan } from '../_nomorIndukKependudukan'
import { getDataRegenciesInProvince, getDataDistrictsInRegency } from './_province.extended'

/**
 * Nusantara Valid: _nomorIndukKependudukan.extended.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorIndukKepemdudukanExtended class
**/
class NomorIndukKependudukanExtended extends NomorIndukKependudukan {
    isValid(nik: string, provinceKey = '', birthday = ''): boolean {
        if (!super.isValid(nik, provinceKey, birthday)) return false

        const newNIK = numbersOnly(nik)

        const provinceBPSCode = newNIK.substr(0, 2)
        const regencyBPSCode = provinceBPSCode + '.' + newNIK.substr(2, 2)
        const REGENCIES = getDataRegenciesInProvince(provinceBPSCode)
        const regenciesBPSCodes = REGENCIES.map(({ bpsCode }) => bpsCode)
        const validRegency = includes(regenciesBPSCodes, regencyBPSCode)

        const districtBPSCode = regencyBPSCode + '.' + newNIK.substr(4, 2)
        const DISTRICTS = getDataDistrictsInRegency(regencyBPSCode)
        const districtsBPSCode = DISTRICTS.map(({ bpsCode }) => bpsCode)
        const validDistrict = includes(districtsBPSCode, districtBPSCode)

        return validRegency && validDistrict
    }

    getData(nik: string): IDataNIKExtended {       
        const data = super.getData(nik) as IDataNIKExtended

        const provinceBPSCode = nik.substr(0, 2)
        const REGENCIES = getDataRegenciesInProvince(provinceBPSCode)
        const regencyBPSCode = provinceBPSCode + '.' + nik.substr(2, 2)

        for (const regency of REGENCIES) {
            if (regency.bpsCode == regencyBPSCode) {
                data.regency = regency
            }
        }

        const districtBPSCode = regencyBPSCode + '.' + nik.substr(4, 2)
        const DISTRICTS = getDataDistrictsInRegency(regencyBPSCode)

        for (const district of DISTRICTS) {
            if (district.bpsCode == districtBPSCode) {
                data.district = district
            }
        }

        return data
    }
}

const theNIK = new NomorIndukKependudukanExtended()

/**
 * NIK Extended validation without any comparison with user provided data.
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
    const { provinceKey = '', birthday = '' } = comparison

    return theNIK.isValid(nik, provinceKey, birthday)
}

/**
 * NIK Extended data retreiver.
 *
 * Return a set of NIK Extended object data from user provided nik
 *
 * @param {string} nik - The NIK
 * @return {object} The NIK Extended data
**/
export function getDataNIK(nik: string): IDataNIKExtended {
    return theNIK.getData(nik)
}