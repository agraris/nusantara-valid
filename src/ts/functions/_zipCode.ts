import { IValid } from "../interface"
import { PROVINCE_DATA, PROVINCE_KEYS } from "../datas/province"
import { correctLength } from '../helpers'

/**
 * Nusantara Valid: _zipCode.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The ZIPCode class
**/
class ZIPCode implements IValid {

    ZIP_RANGES = PROVINCE_KEYS.reduce(
        (a, b) => a.concat(PROVINCE_DATA[b].zipCode), []
    )

    isValid(zip: string | number, provinceKey = ''): boolean {
        if (!zip) return false

        let zipArray
        zip = zip.toString()

        provinceKey ? zipArray = PROVINCE_DATA[provinceKey].zipCode : zipArray = this.ZIP_RANGES
        
        return parseInt(zip).toString() === zip
            && correctLength(0, zip.length, { minLength: 5 })
            && this.isValidZIPCode(zip, zipArray)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isValidZIPCode(zip: string, zipRange: any[]): boolean {
        for (const val of zipRange) {
            if (val.from <= zip && val.to >= zip) {
                return true
            } 
        }

        return false
    }
}

const theZIP = new ZIPCode()

/**
 * ZIP validation without any comparison with user provided data.
 *
 * It will check if the ZIP is included / exist in VALID_ZIPCODE array and if the ZIP has the correct length of 6.
 *
 * @param {string} zip - The ZIP, the one to be validated
 * @return {boolean} Is valid or not
**/
export function isValidZIP(zip: string | number): boolean {
    return theZIP.isValid(zip)
}

/**
 * ZIP validation with comparison with user provided provinceKey.
 *
 * It will check if the ZIP is included / exist in ZIP range from PROVINCE_DATA[provinceKey].zipCode[]
 *
 * @param {string | number} zip - The ZIP, the one to be validated
 * @param {object} comparison - The data to compare with, provinceKey (key from PROVINCE_DATA)
 * @return {boolean} Is valid or not
**/
export function isValidZIPWithComparison(zip: string | number, comparison: { provinceKey?: string }): boolean {
    const { provinceKey = '' } = comparison
    return theZIP.isValid(zip, provinceKey)
}