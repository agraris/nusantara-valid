import { IValid } from "../interface"
import { PROVINCE_DATA, PROVINCE_KEYS } from "../datas/province"
import { correctLength } from '../helpers'

/**
 * Nusantara Valid: _zipCode.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 *
 * @class The ZIPCode class
**/
class ZIPCode implements IValid {

    ZIP_RANGE = PROVINCE_KEYS.reduce(
        (a, b) => a.concat(PROVINCE_DATA[b].zipCode), []
    ) as object[]

    isValid(zip: string | number, provinceKey: string = ''): boolean {
        if (!zip) return false

        let zipArray = this.ZIP_RANGE
        zip = zip.toString()

        const validLength = correctLength(0, zip.length, { minLength: 5 })

        if (provinceKey)
            zipArray = PROVINCE_DATA[provinceKey].zipCode
        
        return validLength 
            && this.isValidZIPCode(zip, zipArray)
    }

    isValidZIPCode(zip: string, zipRange: any[]): boolean {
        for (let val of zipRange) {
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